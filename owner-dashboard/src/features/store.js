import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import restaurantReducer from "./restaurantSlice.js";
import notificationReducer from "./notificationSlice.js";
import ownerReducer from "./ownerSlice.js";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, restaurantReducer);

const store = configureStore({
  reducer: {
    restaurant: persistedReducer,
    notification: notificationReducer,
    owner: ownerReducer,


  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export default { store, persistor };