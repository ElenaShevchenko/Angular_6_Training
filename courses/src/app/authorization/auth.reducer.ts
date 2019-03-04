const appInitialState = {
  isAuthenticated: false,
};

export function appReducer(
  state = appInitialState,
  action
) {
  switch (action.type) {
    case 'LOGIN Success': {
     state.isAuthenticated = true;
     break;
    }
    default: {
      return state;
    }
  }
}
