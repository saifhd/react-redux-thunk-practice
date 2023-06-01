import { createSlice } from '@reduxjs/toolkit'
import register from '../../Actions/Auth/RegisterAction';
import login from '../../Actions/Auth/LoginAction';

const accessToken = localStorage.getItem('accessToken') ?? null;
const user = JSON.parse(localStorage.getItem('user')) ?? {};

const initialState = {
    loading: false,
    user,
    accessToken,
    errors: {},
    success: false,
    value: 0
};

const authPending = (state) => {
    state.loading = true;
    state.success = false;
    state.errors = {};
}

const authFulfilled = (state, {payload}) => {
    state.loading = false;
    state.success = true;
    state.errors = null;
    const {access_token, id, name, email} = payload;
    state.accessToken = access_token;
    state.user = {
        id,
        name,
        email
    };
    localStorage.setItem('accessToken', access_token);
    localStorage.setItem('user', JSON.stringify({id, name, email}));
}

const authRejected = (state, {payload}) => {
    state.loading = false;
    state.success = false;
    state.errors = payload;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        state.accessToken = null;
        state.user = {};
        state.success = false
    },
    resetErrors: (state) => {
        state.errors = {};
    }
  },
  extraReducers:{
        [login.pending]: (state) => {
            authPending(state)
        },
        [login.fulfilled]: (state, {payload}) => {
            authFulfilled(state, {payload})
            
        },
        [login.rejected]: (state, {payload}) => {
            authRejected(state, {payload})
        },
        [register.pending]: (state) => {
            authPending(state)
        },
        [register.fulfilled]: (state, {payload}) => {
            authFulfilled(state, {payload})
        },
        [register.rejected]: (state, {payload}) => {
            authRejected(state, {payload})
        }
  }
})

// Action creators are generated for each case reducer function
export const { logout, resetErrors } = authSlice.actions

export default authSlice.reducer