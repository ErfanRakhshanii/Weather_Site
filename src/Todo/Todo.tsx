import { useDispatch } from "react-redux";
import { useAppSelector } from "../Redux/CHooks";
import { RootState } from "../Redux/CStore";
import { useState } from "react";
import {
  addTodo,
  deleteTask,
  editTask,
} from "../Redux/AppReducers/todoReducer";

export default function Todo() {
  const state = useAppSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState<undefined | number>();
  return (
    <section
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          width: 500,
          height: 500,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          backgroundColor: "white",
        }}
      >
        {state.todoList.map((item, index) => {
          return (
            <div
              style={{
                height: 50,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <p>{item.value}</p>
              <button
                onClick={() => {
                  setEditMode(true);
                  setInput(item.value);
                  setEditId(item.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  dispatch(deleteTask(index));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div
        style={{
          width: 500,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          overflowY: "auto",
        }}
      >
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button
          onClick={() => {
            if (input !== "") {
              if (editMode) {
                let editedTask = {
                  id: editId as number,
                  value: input,
                };
                dispatch(editTask(editedTask));
                setEditMode(false);
                setInput("");
                setEditId(undefined);
              } else {
                const exists = state.todoList.findIndex(
                  (elem) => elem.value === input
                );
                if (exists === -1) {
                  let newTask = {
                    id: Math.random(),
                    value: input,
                  };
                  dispatch(addTodo(newTask));
                  setInput("");
                }
              }
            }
          }}
        >
          {editMode ? "Edit todo" : "Add todo"}
        </button>
      </div>
    </section>
  );
}
