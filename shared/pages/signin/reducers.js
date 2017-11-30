const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN/SET_LOADING_STATUS': {
      return {
        ...state, isLoading: action.isLoading,
      };
    }
    default: {
      return state;
    }
  }
};
