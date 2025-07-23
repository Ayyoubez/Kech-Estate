import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({ user: userReducer });
const persistConfig = {
  key: "Root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultmiddleware) => {
    return getDefaultmiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);
