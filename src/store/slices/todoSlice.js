import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodoPriority: (state, action) => {
      const { id, priority } = action.payload;
      const todoToUpdate = state.todos.find(todo => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.priority = priority;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodoPriority } = todoSlice.actions;
export default todoSlice.reducer;