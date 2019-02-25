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
      break;
    }
  }
  return state;
}
