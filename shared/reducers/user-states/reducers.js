const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_STATE/SAVE_USER_INFO': {
      return {
        ...state, data: action.data,
      };
    }
    case 'USER_STATE/REMOVE_CURRENT_USER_DATA': {
      return {};
    }
    case 'USER_STATE/SET_AUTH_ERROR': {
      return {
        ...state,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
