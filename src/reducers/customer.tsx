import { createSlice } from "@reduxjs/toolkit";
import { CustomerData, ActionUpdateCustomer, ActionMultipleUpdateCustomer } from "../interface";

import sampleData from '../sampledata.json';

interface ActionInsertType {
    type: string,
    payload: CustomerData
}

interface ActionUpdateType {
  type: string,
  payload: ActionUpdateCustomer
}

interface ActionDeleteType {
  type: string,
  payload: number
}

interface ActionMultipleUpdateType {
  type: string,
  payload: ActionMultipleUpdateCustomer
}

interface ActionMultipleDeleteType {
  type: string,
  payload: number[]
}

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    value: sampleData
  },
  reducers: {
    insertCustomer: (state, action: ActionInsertType) => {
      state.value.push(action.payload); 
    },
    updateCustomer: (state, action: ActionUpdateType) => {
      state.value.splice(action.payload.index, 1, action.payload.data);
    },
    deleteCustomer: (state, action: ActionDeleteType) => {
      state.value.splice(action.payload, 1);
    },
    multipleUpdateCustomer: (state, action: ActionMultipleUpdateType) => {
      for (let i = 0; i < action.payload.arrIndex.length; i++) {
        state.value[action.payload.arrIndex[i]].status = action.payload.status
      }
    },
    multipleDeleteCustomer: (state, action: ActionMultipleDeleteType) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.value.splice(action.payload[i], 1);
      }
    },
  },
})

export const {
  insertCustomer,
  updateCustomer,
  deleteCustomer,
  multipleUpdateCustomer,
  multipleDeleteCustomer
} = customerSlice.actions;

export const customerArrayData = (state: any) => state.customer.value;

export default customerSlice.reducer;