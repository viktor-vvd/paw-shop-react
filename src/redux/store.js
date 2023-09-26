import { configureStore } from "@reduxjs/toolkit";
import { pageApi } from "../api/pageApi";
import modalsSlice from "./reducers/modalsSlice";
import pageSlice from "./reducers/pageSlice";
import authSlice from "./reducers/authSlice";
import { authApi } from "api/authApi";

export const store = configureStore({
  reducer: {
    modals: modalsSlice,
    page: pageSlice,
    auth: authSlice,

    //api reducers
    
    [pageApi.reducerPath]: pageApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
      pageApi.middleware,
    ]),
});
