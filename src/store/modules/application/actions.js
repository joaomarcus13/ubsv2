import types from './types';

export default {
  clientsLoadedSuccess(payload) {
    return {
      type: types.CLIENTS_LOADED_SUCCESS,
      payload,
    };
  },
  loadClients(payload) {
    return {
      type: types.LOAD_CLIENTS,
      payload,
    };
  },
  residencesLoadedSuccess(payload) {
    return {
      type: types.RESIDENCES_LOADED_SUCCESS,
      payload,
    };
  },
  loadResidences(payload) {
    return {
      type: types.LOAD_RESIDENCES,
      payload,
    };
  },
  createClient(payload) {
    return {
      type: types.CREATE_CLIENT,
      payload,
    };
  },
  clientCreatedSuccess(payload) {
    return {
      type: types.CLIENT_CREATED_SUCCESS,
      payload,
    };
  },
  updateClient(payload) {
    return {
      type: types.UPDATE_CLIENT,
      payload,
    };
  },
  clientUpdatedSuccess(payload) {
    return {
      type: types.CLIENT_UPDATED_SUCCESS,
      payload,
    };
  },
  createResidence(payload) {
    return {
      type: types.CREATE_RESIDENCE,
      payload,
    };
  },
  residenceCreatedSuccess(payload) {
    return {
      type: types.RESIDENCE_CREATED_SUCCESS,
      payload,
    };
  },
  deleteClient(payload) {
    return {
      type: types.DELETE_CLIENT,
      payload,
    };
  },
  clientDeletedSuccess(payload) {
    return {
      type: types.CLIENTE_DELETED_SUCCESS,
      payload,
    };
  },

  updateResidence(payload) {
    return {
      type: types.UPDATE_RESIDENCE,
      payload,
    };
  },
  residenceUpdatedSuccess(payload) {
    return {
      type: types.RESIDENCE_UPDATED_SUCCESS,
      payload,
    };
  },

  deleteResidence(payload) {
    return {
      type: types.DELETE_RESIDENCE,
      payload,
    };
  },
  residenceDeletedSuccess(payload) {
    return {
      type: types.RESIDENCE_DELETED_SUCCESS,
      payload,
    };
  },
};
