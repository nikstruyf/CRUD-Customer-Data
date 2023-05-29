import { createSlice } from "@reduxjs/toolkit";
import { CustomerData, ActionUpdateCustomer } from "../interface";

interface ActionInsertType {
    type: string,
    payload: CustomerData
}

interface ActionUpdateType {
  type: string,
  payload: ActionUpdateCustomer
}

const sampleData = {
  id: 'nik27252725',
  code: 'nik2725',
  name: 'nik',
  email: 'nikkunraho@gmail.com',
  tel: '0933912725',
  status: 'inactive'
}

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    value: [sampleData]
  },
  reducers: {
    insertCustomer: (state, action: ActionInsertType) => {
      state.value.push(action.payload); 
    },
    updateCustomer: (state, action: ActionUpdateType) => {
      state.value.splice(action.payload.index, 1, action.payload.data);
    }
  },
})

export const { insertCustomer, updateCustomer } = customerSlice.actions;

export const customerArrayData = (state: any) => state.customer.value;

export default customerSlice.reducer;