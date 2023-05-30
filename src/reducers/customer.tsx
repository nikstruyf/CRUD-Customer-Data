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

interface ActionDeleteType {
  type: string,
  payload: number
}

const sampleData = [{
  id: 'nik27252725',
  code: 'nik2725',
  name: 'nik',
  email: 'nikkun@gmail.com',
  tel: '0933912725',
  status: 'inactive'
},{
  id: 'nik73607360',
  code: 'kin7360',
  name: 'kin',
  email: 'memoryo@gmail.com',
  tel: '0933277360',
  status: 'inactive'
},{
  id: 'nalin27252725',
  code: 'nalin2725',
  name: 'nalin',
  email: 'nikkunraho@gmail.com',
  tel: '0933912725',
  status: 'inactive'
}]

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
  },
})

export const { insertCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;

export const customerArrayData = (state: any) => state.customer.value;

export default customerSlice.reducer;