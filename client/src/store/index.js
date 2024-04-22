import { configureStore } from "@reduxjs/toolkit";
import { fetchReducer } from "./reducers/fetchReducer";
import { authReducer } from "./reducers/authReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  fetch: fetchReducer,
  auth: authReducer,
});

//TODO: What does "getDefaultMiddleware" mean? How does it work?

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
