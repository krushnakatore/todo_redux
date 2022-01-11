import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  REM_TODO
} from "./actionTypes";

const init = {
  loading: false,
  todos: [],
  error: false
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, payload],
        loading: false
      };
    case ADD_TODO_ERROR:
      return {
        ...state,

        loading: false,
        error: true
      };
    case REM_TODO:
      return {
        ...state
      };
    default:
      return state;
  }
};
