const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HOME/SAVE_TOPIC_DATA': {
      return {
        ...state, topics: action.data,
      };
    }
    default: {
      return state;
    }
  }
};
