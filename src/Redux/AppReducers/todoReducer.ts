import { createSlice } from "@reduxjs/toolkit";

interface initial_state {
  todoList: {
    id: number;
    value: string;
  }[];
}

const initialState: initial_state = {
  todoList: [],
};

const todoSlice = createSlice({ 
  name: "test",
  initialState: initialState,
  reducers: {
    addTodo: (
      state,
      {payload,}: {
        payload: {
          id: number;
          value: string;
        };
      }
    ) => {
      state.todoList = [...state.todoList, payload];
    },
    deleteTask: (state, { payload }: { payload: number }) => {
      let selectedItem = state.todoList[payload];
      state.todoList = state.todoList.filter(
        (elem) => elem.id !== selectedItem.id
      );
    },
    editTask: (
      state,
      {
        payload,
      }: {
        payload: {
          id: number;
          value: string;
        };
      }
    ) => {
      let editIndex = state.todoList.findIndex(
        (elem) => elem.id === payload.id
      );
      if (editIndex !== -1) {
        state.todoList[editIndex] = payload;
      }
    },
  },
});

export const { addTodo, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;