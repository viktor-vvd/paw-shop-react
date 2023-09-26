import { configureStore } from "@reduxjs/toolkit";
import { pageApi } from "../api/pageApi";
import modalsSlice from "./reducers/modalsSlice";
import pageSlice from "./reducers/pageSlice";
import authSlice from "./reducers/authSlice";
import { authApi } from "api/authApi";
import { promoSlice } from "./reducers/promoSlice";
import { promoApi } from "api/promoApi";

export const store = configureStore({
  reducer: {
    modals: modalsSlice,
    page: pageSlice,
    auth: authSlice,
    promo: promoSlice,

    //api reducers
    
    [pageApi.reducerPath]: pageApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [promoApi.reducerPath]: promoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
      pageApi.middleware,
      promoApi.middleware,
    ]),
});
