import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  i:2,
  todo : [
    {
      id : 0,
      todo : "test",
      done : false
    },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setAddTodo: (state, action) => {
      const todo = {
        id : state.i,
        todo : action.payload.todo,
        done : false
      }
      state.todo = [...state.todo, todo];
      state.i = state.i+1;
    },
    setRemoveTodo: (state, action) => {
      const todoList = state.todo.filter(t => t.id !== action.payload.todoId)
      state.todo = todoList;
    },
    setMakedDoneTodo: (state, action) => {
      const todoList = state.todo.filter(t => {
        if(t.id !== action.payload.todoId){
          return t;
        }else{
          t.done = !t.done;
          return t;
        }
      })
      state.todo = todoList;
    }
  },
});

export const { setMakedDoneTodo, setRemoveTodo, setAddTodo } = dataSlice.actions;
export default dataSlice.reducer;