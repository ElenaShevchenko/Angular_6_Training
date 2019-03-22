const appInitialState = {
  isAuthenticated: false,
};

export function authReducer(
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
