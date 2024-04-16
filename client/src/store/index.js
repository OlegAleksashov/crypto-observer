import { configureStore } from "@reduxjs/toolkit";
import { fetchReducer } from "./reducers/fetchReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

//export default configureStore({ reducer: fetchReducer });

const rootReducer = combineReducers({
  fetch: fetchReducer,
  user: userReducer,
});

export default configureStore({
  reducer: rootReducer,
});
