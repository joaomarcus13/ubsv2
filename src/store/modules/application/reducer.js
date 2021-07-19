import { convertDate, getAge } from '../../../util/dateFunctions';
import types from './types';
import history from '../../../services/homeHistory';

const INITIAL_STATE = {
  clients: [],
  residences: [],
};

function reducer(state = INITIAL_STATE, action) {
  const newState = { ...state };
  switch (action.type) {
    case types.CLIENTS_LOADED_SUCCESS: {
      newState.clients = action.payload;
      return newState;
    }
    case types.RESIDENCES_LOADED_SUCCESS: {
      newState.residences = action.payload;
      return newState;
    }

    case types.CLIENT_CREATED_SUCCESS: {
      const payload = { ...action.payload };
      payload.age = getAge(payload.birthDate);
      payload.birthDate = convertDate(payload.birthDate);
      payload.created_at = convertDate(payload.created_at);
      payload.updated_at = convertDate(payload.updated_at);
      newState.clients.unshift(payload);
      return newState;
    }
    case types.CLIENT_UPDATED_SUCCESS: {
      const { payload } = action;
      payload.birthDate = convertDate(payload.birthDate);
      const index = newState.clients.findIndex((e) => e.id === payload.id);
      newState.clients.splice(index, 1);
      newState.clients.unshift(payload);
      return newState;
    }

    case types.CLIENTE_DELETED_SUCCESS: {
      const clients = [...newState.clients];

      const index = clients.findIndex((e) => e.id === action.payload);
      clients.splice(index, 1);
      newState.clients = clients;

      return newState;
    }

    case types.RESIDENCE_CREATED_SUCCESS: {
      const payload = { ...action.payload };
      payload.created_at = convertDate(payload.created_at);
      payload.updated_at = convertDate(payload.updated_at);
      newState.residences.unshift(payload);
      return newState;
    }

    case types.RESIDENCE_UPDATED_SUCCESS: {
      const { data, clientsSelected } = action.payload;
      console.log(data);
      const clients = [...clientsSelected];
      data.Clients = clients;
      console.log(data);
      const index = newState.residences.findIndex((e) => e.id === data.id);
      newState.residences.splice(index, 1);
      newState.residences.unshift(data);
      return newState;
    }

    case types.RESIDENCE_DELETED_SUCCESS: {
      const residences = [...newState.residences];

      const index = residences.findIndex((e) => e.id === action.payload);
      residences.splice(index, 1);
      newState.residences = residences;

      return newState;
    }

    default: {
      return state;
    }
  }
}

export default reducer;
