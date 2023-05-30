export interface CustomerData {
  id: string,
  code: string,
  name: string,
  email: string,
  tel: string,
  status: string
}

export interface ActionUpdateCustomer {
  data: CustomerData,
  index: number
}

export interface ActionMultipleUpdateCustomer {
  status: string,
  arrIndex: number[]
}