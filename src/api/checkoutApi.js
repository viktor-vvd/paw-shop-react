import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  baseQuery: baseQuery,
  tagTypes: ["Checkout"],
  endpoints: (builder) => ({
    checkoutPOST: builder.mutation({
      query: (data) => {
        return {
          url: `carts/checkout`,
          method: `POST`,
          body: data,
        };
      },
      invalidatesTags:["Checkout"],
    }),

  }),
});
export const {
  useCheckoutPOSTMutation,
} = checkoutApi;
