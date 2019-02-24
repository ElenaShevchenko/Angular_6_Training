const initialState = {
  isAuthenticated: false,
  courseList: []
};

export function appReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case 'GET_COURSE Loaded Success': {
      console.log(action);
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
