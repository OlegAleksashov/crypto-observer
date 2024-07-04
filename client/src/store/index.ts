import { configureStore } from "@reduxjs/toolkit";
import { fetchReducer } from "./reducers/fetchReducer";
import { authReducer } from "./reducers/authReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  fetch: fetchReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
