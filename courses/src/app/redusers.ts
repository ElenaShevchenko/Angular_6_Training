const appInitialState = {
  isAuthenticated: false,
};

export function appReducer(
  state = appInitialState,
  action
) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

const courseListInitialState = {
  items: [],
  currentLength: 5,
};

export function courseListReducer(
  state = courseListInitialState,
  action
) {
  switch (action.type) {
    case 'GET_COURSE Loaded Success': {
      state.items = action.payload;
      if (state.currentLength > (state.items.length - 5)) {
        state.currentLength = state.items.length;
      } else {
        state.currentLength = state.currentLength + 5;
      }
      break;
    }
    case 'REMOVE_COURSE Success':
      state.items = action.payload;
  }
  return state;
}
