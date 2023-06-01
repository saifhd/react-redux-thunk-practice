import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Features/Auth/AuthSlice'
import todoReducer from './Features/Todo/TodoSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer
  },
})