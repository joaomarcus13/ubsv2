/* eslint-disable no-unused-expressions */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import actions from './actions';
import actionsApplication from '../application/actions';

import history from '../../../services/history';
import types from './types';

function* loginRequest({ payload }) {
  try {
    const response = yield call(api.post, '/auth', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    yield put(actionsApplication.loadClients());
    yield put(actionsApplication.loadResidences());
    history.push('/');
  } catch (error) {
    const err = error.response.data?.errors || [];
    err.length > 0
      ? err.forEach((e) => toast.error(e))
      : toast.error('Erro ao logar');
    yield put(actions.loginFailure());
  }
}

function* registerRequest({ payload }) {
  const {
    emailRegister: email,
    nameRegister: name,
    passwordRegister: password,
  } = payload;

  try {
    yield call(api.post, '/users', { email, name, password });
    yield put(actions.registerSuccess());
    toast.success('conta criada com sucesso');
  } catch (error) {
    const err = error.response.data?.errors || [];

    err.length > 0
      ? err.forEach((e) => toast.error(e))
      : toast.error('Erro ao criar conta');
    yield put(actions.registerFailure());
  }
}

function* getStorageData({ payload }) {
  if (payload) {
    try {
      api.defaults.headers.Authorization = `Bearer ${payload.auth.token}`;
      yield call(api.get, '/auth/token');
      yield put(actions.loginSuccess({ ...payload.auth }));
    } catch (error) {
      yield put(actions.loginFailure());
      history.push('/login');
    }
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.GET_STORAGE_DATA, getStorageData),
]);
