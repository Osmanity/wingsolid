import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state) => {
            state.login = true
        },
        logout: (state) => {
            state.login = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions

export const selectLogin = (state) => state.login.login;

export default loginSlice.reducer