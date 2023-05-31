import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./reducers/username";
import customerReducer from "./reducers/customer";
import confirmRuducer from "./reducers/confirmstate";

export default configureStore({
  reducer: {
    username: usernameReducer,
    customer: customerReducer,
    confirm: confirmRuducer
  },
})