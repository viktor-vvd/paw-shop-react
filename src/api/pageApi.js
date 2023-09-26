import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const pageApi = createApi({
  reducerPath: "pageApi",
  baseQuery: baseQuery,
  tagTypes: ["Pages"],
  endpoints: (builder) => ({
/*     projectsGET: builder.query({
      query: (data) => {
        return {
          url: `project/user_projects/`,
          method: `GET`,
          body: data,
        };
      },
      providesTags: ["Projects"],
    }), */
    pageHomeGET: builder.query({
      query: () => {
        return {
          url: `pages/home`,
          method: `GET`,
        };
      },
      providesTags: ["page"],
    }),
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
  usePageHomeGETQuery,
} = pageApi;
