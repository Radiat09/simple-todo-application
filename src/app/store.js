import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../feature/todosSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persisConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  todosReducer: todosReducer,
});

const persistedReducer = persistReducer(persisConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
