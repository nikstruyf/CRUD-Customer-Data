import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./reducers/username";

export default configureStore({
  reducer: {
    username: usernameReducer,
  },
})