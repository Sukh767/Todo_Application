import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [{id: 1, task : "Hello world", isDone: false}]
};


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state,action) =>{
      const todo = {
        id: nanoid(), 
        task : action.payload,
        isDone : false,
      }
      state.todos.push(todo)
    },
    removeTodo: (state,action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    markAsDone: (state,action) => {
      state.todos = state.todos.map((todo)=>{
        if(todo.id === action.payload){
          return { ...todo, isDone: !todo.isDone }; // Toggle isDone status
        }
        return todo;
      })
    },
  }
})


export const {addTodo,removeTodo,markAsDone} = todoSlice.actions;

export default todoSlice.reducer;