/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import actions from './actions';
import authactions from '../auth/actions';
import { convertDate, getAge } from '../../../util/dateFunctions';
import types from './types';
import history from '../../../services/homeHistory';

function* getClients() {
  try {
    const response = yield call(api.get, '/client');
    const data = response.data.map((e) => {
      const obj = { ...e };
      obj.updated_at = convertDate(obj.updated_at);
      obj.created_at = convertDate(obj.created_at);
      obj.age = getAge(obj.birthDate);
      obj.birthDate = convertDate(obj.birthDate);
      return obj;
    });
    yield put(actions.clientsLoadedSuccess(data));
  } catch (error) {
    const err = error.response?.data?.errors;

    if (err) {
      err.forEach((e) => {
        if (e !== 'login required') toast.error(e, { toastId: e });
      });
    }
  }
}
function* getResidences() {
  try {
    const response = yield call(api.get, '/residence');
    const data = response.data.map((e) => {
      const obj = { ...e };
      obj.updated_at = convertDate(obj.updated_at);
      obj.created_at = convertDate(obj.created_at);
      obj.Clients?.forEach((client) => {
        client.updated_at = convertDate(client.updated_at);
        client.birthDate = convertDate(client.birthDate);
      });
      return obj;
    });
    yield put(actions.residencesLoadedSuccess(data));
  } catch (error) {
    const err = error.response?.data?.errors;
    if (err) {
      err.forEach((e) => {
        if (e !== 'login required') toast.error(e, { toastId: e });
      });
    }
  }
}

function* createClient({ payload }) {
  try {
    const client = yield call(api.post, '/client', payload.data);
    payload.form.btnReset.click();
    toast.success('Cidadão cadastrado com sucesso!');
    yield put(actions.clientCreatedSuccess(client.data));
  } catch (error) {
    const err = error.response?.data?.errors;
    if (err) {
      err.forEach((e) => {
        toast.error(e);
      });
    }
  }
}

function* createResidence({ payload }) {
  const { data, init, clientsSelected, setClientsSelected } = payload;
  try {
    const residence = yield call(api.post, '/residence', data);
    yield all(
      clientsSelected.map((client) =>
        call(api.put, `/client/${client.id}`, {
          residence_id: residence.data.id,
        })
      )
    );

    // payload.form.btnReset.click();
    init();
    setClientsSelected([]);
    toast.success('Residencia cadastrada com sucesso!');
    yield put(actions.residenceCreatedSuccess(residence.data));
  } catch (error) {
    const err = error.response?.data?.errors;
    if (err) {
      err.forEach((e) => {
        toast.error(e);
      });
    }
  }
}

function* updateClient({ payload }) {
  try {
    const data = { ...payload };
    delete data.created_at;
    delete data.updated_at;
    const client = yield call(api.put, `/client/${data.id}`, data);

    toast.success('Dados do cidadão atualizados com sucesso!');

    yield put(actions.clientUpdatedSuccess(payload));
  } catch (error) {
    const err = error.response?.data?.errors;
    if (err) {
      err.forEach((e) => {
        toast.error(e);
      });
    }
  }
}

function* deleteClient({ payload }) {
  try {
    // const data = { ...payload };

    const res = yield call(api.delete, `/client/${payload.id}`);

    toast.success('Cidadão deletado com sucesso!');
  } catch (error) {
    const err = error.response?.data?.errors;
    if (err) {
      err.forEach((e) => {
        toast.error(e);
      });
    }
  }
  yield put(actions.clientDeletedSuccess(payload.id));
}

function* updateResidence({ payload }) {
  const { clientsSelected, clientsPrevious } = payload;
  const data = { ...payload.data };
  console.log(data);
  delete data.created_at;
  delete data.updated_at;
  try {
    const residence = yield call(api.put, `/residence/${data.id}`, data);
    yield all(
      clientsSelected.map((client) =>
        call(api.put, `/client/${client.id}`, {
          residence_id: residence.data.id,
        })
      )
    );
    console.log(clientsPrevious.filter((e) => !clientsSelected.includes(e)));
    // yield all(
    //   clientsPrevious.filter(c=>clientsSelected.con).map((client) =>
    //     call(api.put, `/client/${client.id}`, {
    //       residence_id: residence.data.id,
    //     })
    //   )
    // );
    toast.success('Dados da residencia atualizados com sucesso!');

    yield put(actions.residenceUpdatedSuccess(payload));
  } catch (error) {
    const err = error.response?.data?.errors;
    if (err) {
      err.forEach((e) => {
        toast.error(e);
      });
    }
  }
}

function* deleteResidence({ payload }) {
  try {
    const res = yield call(api.delete, `/residence/${payload.id}`);

    toast.success('Residencia deletada com sucesso!');
  } catch (error) {
    const err = error.response?.data?.errors;
    if (err) {
      err.forEach((e) => {
        toast.error(e);
      });
    }
  }
  yield put(actions.residenceDeletedSuccess(payload.id));
}

export default all([
  takeLatest(types.LOAD_CLIENTS, getClients),
  takeLatest(types.LOAD_RESIDENCES, getResidences),
  takeLatest(types.CREATE_CLIENT, createClient),
  takeLatest(types.CREATE_RESIDENCE, createResidence),
  takeLatest(types.UPDATE_CLIENT, updateClient),
  takeLatest(types.DELETE_CLIENT, deleteClient),
  takeLatest(types.UPDATE_RESIDENCE, updateResidence),
  takeLatest(types.DELETE_RESIDENCE, deleteResidence),
]);
