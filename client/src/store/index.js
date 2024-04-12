import { configureStore } from "@reduxjs/toolkit";
import { fetchReducer } from "./redusers";
import { combineReducers } from "@reduxjs/toolkit";

//export default configureStore({ reducer: fetchReducer });

const rootReducer = combineReducers({
    fetch: fetchReducer,
  });
  
  export default configureStore({
    reducer: rootReducer,
  });