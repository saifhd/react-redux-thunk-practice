import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';
import httpClient from '../../Hooks/httpClient';

const initialState = {
    loading: false,
    todos: null,
    errors: {},
    success: false
};

export const todosAction = createAsyncThunk(
    'todos/index',
    async({page},{rejectWithValue}) => {
        try {
            // const config = {
            //     Headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     }
            // };
            const response = await httpClient.get('/todos?page=' +page );
            return response.data
        }
        catch (error) {
            // console.log(error)
            // if (error.response.status == 422) {
            //     return rejectWithValue(error.response.data.errors)
            // }
            // alert(error.response.data.message)
        }
    }
)

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
  },
  extraReducers:{
        [todosAction.pending]: (state) => {
            state.loading = true;
            state.success = false;
            state.errors = {};
        },
        [todosAction.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.success = true;
            state.errors = null;
            state.todos = payload;
            
        },
        [todosAction.rejected]: (state, {payload}) => {
            state.loading = false;
            state.success = false;
            state.errors = payload;
        }
  }
})

// Action creators are generated for each case reducer function
// export const {  } = todoSlice.actions

export default todoSlice.reducer