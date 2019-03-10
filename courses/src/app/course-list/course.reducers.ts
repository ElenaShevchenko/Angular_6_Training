import { CourseListActionTypes } from './course.actions';

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
    case CourseListActionTypes.GetCourseSuccess: {
      state.items = action.payload;
      break;
    }
    case CourseListActionTypes.UpdateCounter:
      if (state.currentLength > (state.items.length - 5)) {
        state.currentLength = state.items.length;
      } else {
        state.currentLength = state.currentLength + 5;
      }
      break;
    case CourseListActionTypes.SearchSuccess: {
      state.items = action.payload;
      break;
    }
    case CourseListActionTypes.GetAuthorsSuccess: {
      state.authors = action.payload;
      break;
    }
  }
  return state;
}
