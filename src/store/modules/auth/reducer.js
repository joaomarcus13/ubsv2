import types from './types';
import api from '../../../services/api';

const INITIAL_STATE = {
  isLoggedIn: false,
  token: false,
  user: {},
  isRegisterVisible: false,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      delete api.defaults.headers.Authorization;
      const newState = { ...INITIAL_STATE };
      return newState;
    }

    case types.REGISTER_SUCCESS: {
      const newState = { ...state };
      newState.isRegisterVisible = false;
      return newState;
    }

    case types.REGISTER_OPEN: {
      const newState = { ...state };
      newState.isRegisterVisible = true;
      return newState;
    }

    default: {
      // console.log(action);
      return state;
    }
  }
}

export default reducer;
