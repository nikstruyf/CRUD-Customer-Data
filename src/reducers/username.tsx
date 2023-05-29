import { createSlice } from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
  name: 'username',
  initialState: {
    value: ''
  },
  reducers: {
    doLogin: (state, action) => {
      state.value = action.payload;
    },
    doLogout: (state) => {
      state.value = '';
    }
  },
})

export const { doLogin, doLogout } = usernameSlice.actions;

export const usernameDisplay = (state: any) => state.username.value;

export default usernameSlice.reducer;
