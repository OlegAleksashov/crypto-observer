import { configureStore } from "@reduxjs/toolkit";
import { fetchReducer } from "./redusers";
import { combineReducers } from "@reduxjs/toolkit";
import { validateUser } from "./reduserForUsers";

//export default configureStore({ reducer: fetchReducer });

const rootReducer = combineReducers({
  fetch: fetchReducer,
   user: validateUser,
});

export default configureStore({
  reducer: rootReducer,
});
