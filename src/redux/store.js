import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./reducers/modalsSlice";

export const store = configureStore({
  reducer: {
    modals: modalsSlice,
    /*notifications: notificationsSlice,
      folded: sideNavBarSlice,
      projects: projectsSlice,
      gitHub: gitHubSlice,
      [authApi.reducerPath]: authApi.reducer,
      [notificationsApi.reducerPath]: notificationsApi.reducer,
      [projectApi.reducerPath]: projectApi.reducer,
      [gitHubIntegrationApi.reducerPath]: gitHubIntegrationApi.reducer,*/
  },
  /*     middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat([
        authApi.middleware,
        notificationsApi.middleware,
        projectApi.middleware,
        gitHubIntegrationApi.middleware,
      ]),
 */
});
