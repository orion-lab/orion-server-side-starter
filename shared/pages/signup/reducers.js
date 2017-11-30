const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HOME/SAVE_SIGNIN_INFO': {
      return {
        ...state, signInInfo: action.data,
      };
    }
    default: {
      return state;
    }
  }
};
