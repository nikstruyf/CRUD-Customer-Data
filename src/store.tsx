import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./reducers/username";
import customerReducer from "./reducers/customer";

export default configureStore({
  reducer: {
    username: usernameReducer,
    customer: customerReducer,
  },
})