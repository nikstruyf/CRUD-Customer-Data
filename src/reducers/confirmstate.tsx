import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: '',
    status: '',
    display: false
}

export const confirmSlice = createSlice({
  name: 'confirm',
  initialState: {
    value: initialState
  },
  reducers: {
    askConfirm: (state, action) => {
      state.value = action.payload;
    },
    doConfirm: (state) => {
      state.value = {
        message: '',
        status: 'confirm',
        display: false
      };
    },
    doCancel: (state) => {
      state.value = {
        message: '',
        status: 'cancel',
        display: false
      };
    },
    resetConfirm: (state) => {
      state.value = initialState;
    }
  },
})

export const { askConfirm, doConfirm, doCancel, resetConfirm } = confirmSlice.actions;

export const confirmState = (state: any) => state.confirm.value;

export default confirmSlice.reducer;