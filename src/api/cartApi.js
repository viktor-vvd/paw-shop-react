import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: baseQuery,
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    cartGET: builder.query({
      query: () => {
        return {
          url: `carts/`,
          method: `GET`,
        };
      },
      providesTags: ["Cart"],
    }),
    addToCartPOST: builder.mutation({
      query: ({id, data}) => {
        return {
          url: `carts/${id}/add/`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags: ["Cart"],
    }),
    removeFromCartPOST: builder.mutation({
      query: ({id, data}) => {
        return {
          url: `carts/${id}/remove/`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags: ["Cart"],
    }),
    addPromocodePOST: builder.mutation({
      query: (data) => {
        return {
          url: `carts/promocode/add`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags: ["Cart"],
    }),
    removePromocodePOST: builder.mutation({
      query: (data) => {
        return {
          url: `carts/promocode/remove`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags: ["Cart"],
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
    delete: builder.mutation({
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
    useCartGETQuery,
  useLazyCartGETQuery,
  useAddToCartPOSTMutation,
  useRemoveFromCartPOSTMutation,
  useAddPromocodePOSTMutation,
  useRemovePromocodePOSTMutation
} = cartApi;
