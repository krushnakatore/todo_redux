import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  REM_TODO
} from "./actionTypes";

export const addtodo = (data) => ({
  type: ADD_TODO,
  payload: data
});

export const addTodoLoading = (data) => {
  return {
    type: ADD_TODO_LOADING,
    payload: data
  };
};
export const addTodoSuccess = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data
  };
};
export const addTodoError = () => {
  return {
    type: ADD_TODO_ERROR
  };
};

export const remtodo = (id) => ({
  type: REM_TODO,
  payload: id
});
