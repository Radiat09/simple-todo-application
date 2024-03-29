import { createSlice } from "@reduxjs/toolkit";

const initialTodos = {
  todos: [
    { id: 1, title: "Drag", status: "todo" },
    { id: 2, title: "Drop", status: "done" },
    { id: 3, title: "Delete", status: "ongoing" },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    showTodos: (state) => state,
    addTodos: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    updateTodos: (state, action) => {
      const { id, status } = action.payload;
      const isTodoExist = state.todos.find((todo) => todo.id === id);
      if (isTodoExist) {
        isTodoExist.status = status;
      }
    },
    deleteTodos: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const { showTodos, addTodos, deleteTodos, updateTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
