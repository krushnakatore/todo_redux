import { useState } from "react";
import { addTodoError, addTodoLoading, addTodoSuccess } from "../store/action";
import { addtodo } from "../store/action";
import { useDispatch, useSelector } from "react-redux";

export const Todos = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => ({
    todos: state.todos,
    loading: state.loading,
    error: state.error
  }));

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter-Todo"
      />
      <button
        onClick={() => {
          dispatch(addTodoLoading(loading));

          fetch("http://localhost:8000/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: false, title: text })
          })
            .then((d) => d.json())
            .then((res) => {
              // dispatch(addtodo(text));
              dispatch(addTodoSuccess(res));
            })
            .catch((err) => {
              dispatch(addTodoError(err));
            });
        }}
      >
        Add Todo
      </button>
      {todos.map((e) => (
        <div key={e.id}>
          {" "}
          {e.title}-{e.status ? "Done" : "Not Done"}
        </div>
      ))}
    </>
  );
};
