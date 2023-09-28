import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./reducers/modalsSlice";
import pageSlice from "./reducers/pageSlice";
import { pageApi } from "../api/pageApi";
import authSlice from "./reducers/authSlice";
import { authApi } from "api/authApi";
import promoSlice from "./reducers/promoSlice";
import { promoApi } from "api/promoApi";
import catalogSlice from "./reducers/catalogSlice";
import { catalogApi } from "api/catalogApi";
import commentsSlice from "./reducers/commentsSlice";
import { commentsApi } from "api/commentsApi";

export const store = configureStore({
  reducer: {
    modals: modalsSlice,
    page: pageSlice,
    auth: authSlice,
    promo: promoSlice,
    catalog: catalogSlice,
    comments: commentsSlice,
    //api reducers
    
    [pageApi.reducerPath]: pageApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [promoApi.reducerPath]: promoApi.reducer,
    [catalogApi.reducerPath]: catalogApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
      pageApi.middleware,
      promoApi.middleware,
      catalogApi.middleware,
      commentsApi.middleware,
    ]),
});
