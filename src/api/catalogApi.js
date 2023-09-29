import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: baseQuery,
  tagTypes: ["Catalog"],
  endpoints: (builder) => ({
    catalogListGET: builder.query({
      query: (data) => {
        return {
          url: `variations/`,
          method: `GET`,
          params: data,
        };
      },
      providesTags: ["Catalog"],
    }),
    catalogItemGET: builder.query({
      query: (data) => {
        return {
          url: `variation/${data}`,
          method: `GET`,
          /* params: data, */
        };
      },
      providesTags: ["Catalog"],
    }),
    /* pageHomeGET: builder.query({
      query: () => {
        return {
          url: `pages/home`,
          method: `GET`,
        };
      },
      providesTags: ["page"],
    }), */
/*     createProject: builder.mutation({
      query: (data) => {
        return {
          url: `project/manage_project/`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags:["Projects"],
    }),
 *//*     delete: builder.mutation({
      query: (data) => {
        return {
          url: `notifications/`,
          method: `DELETE`,
          body: data,
        };
      },
      invalidatesTags:["Notifications"],
    }), */

  }),
});
export const {
  useCatalogListGETQuery,
  useLazyCatalogListGETQuery,
  useCatalogItemGETQuery,
  useLazyCatalogItemGETQuery,
} = catalogApi;
