import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: baseQuery,
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    commentsRandomListGET: builder.query({
      query: (data) => {
        return {
          url: `comments/products/random`,
          method: `GET`,
          params:data,
        };
      },
      providesTags: ["Catalog"],
    }),
    commentsProductListGET: builder.query({
      query: ({data, id}) => {
        return {
          url: `comments/products/${id}`,
          method: `GET`,
          params:data,
        };
      },
      providesTags: ["Catalog"],
    }),
    commentsAddPOST: builder.mutation({
      query: ({data, id}) => {
        return {
          contentType: "multipart/form-data",
          url: `comments/products/${id}`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags:["Projects"],
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
  useCommentsRandomListGETQuery,
  useLazyCommentsRandomListGETQuery,
  useCommentsProductListGETQuery,
  useLazyCommentsProductListGETQuery,
  useCommentsAddPOSTMutation,
} = commentsApi;
