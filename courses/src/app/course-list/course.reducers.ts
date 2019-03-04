const courseListInitialState = {
  items: [],
  currentLength: 5,
  authors: []
};

export function courseListReducer(
  state = courseListInitialState,
  action
) {
  switch (action.type) {
    case 'GET_COURSE Loaded Success': {
      state.items = action.payload;
      break;
    }
    case 'UPDATE_COUNT':
      if (state.currentLength > (state.items.length - 5)) {
        state.currentLength = state.items.length;
      } else {
        state.currentLength = state.currentLength + 5;
      }
      break;
    case 'SEARCH Loaded Success': {
      state.items = action.payload;
      break;
    }
    case 'GET_AUTHORS Loaded Success': {
      state.authors = action.payload;
      break;
    }
  }
  return state;
}
