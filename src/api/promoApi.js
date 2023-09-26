import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const promoApi = createApi({
  reducerPath: "promoApi",
  baseQuery: baseQuery,
  tagTypes: ["Promo"],
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
    /* pageHomeGET: builder.query({
      query: () => {
        return {
          url: `pages/home`,
          method: `GET`,
        };
      },
      providesTags: ["page"],
    }), */
    incomingsSave: builder.mutation({
      query: (data) => {
        return {
          url: `incomings/`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags:["Promo"],
    }),
/*     delete: builder.mutation({
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
  useIncomingsSaveMutation,
} = promoApi;
