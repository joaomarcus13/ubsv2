import types from './types';

export default {
  registerRequest(payload) {
    return {
      type: types.REGISTER_REQUEST,
      payload,
    };
  },
  registerSuccess(payload) {
    return {
      type: types.REGISTER_SUCCESS,
      payload,
    };
  },
  registerFailure(payload) {
    return {
      type: types.REGISTER_FAILURE,
      payload,
    };
  },
  registerOpen(payload) {
    return {
      type: types.REGISTER_OPEN,
      payload,
    };
  },
  loginRequest(payload) {
    return {
      type: types.LOGIN_REQUEST,
      payload,
    };
  },
  loginSuccess(payload) {
    return {
      type: types.LOGIN_SUCCESS,
      payload,
    };
  },
  loginFailure(payload) {
    return {
      type: types.LOGIN_FAILURE,
      payload,
    };
  },
};
