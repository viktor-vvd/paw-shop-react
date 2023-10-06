import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const BASE_URL = `https://dropshop.demka.online/api/`;

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    headers.set("sHost", `paw.shop`);
    headers.set("Accept", `application/json`);
    headers.set("Cache-Control", `no-cache`);
    const access_token = getState().auth.access_token;
    const token = Cookies.get("access_token");
      console.log({access_token:access_token,token:token});
    if (access_token) {
      headers.set("Authorization", `Bearer ${access_token}`);
    } else if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    const cart_id = getState().cart.cart_id;
    const cart = Cookies.get("cart_id");
      console.log({cart:cart});
    if (cart_id) {
      headers.set("sCart", cart_id);
    } else if (cart) {
      headers.set("sCart", cart);
    }
    return headers;
  },
});

/* export const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (
    (result.error && result.error.status === 403) ||
    (result.error && result.error.status === 401)
  ) {
    const refreshResult = await baseQuery(
      {
        url: "users/token/refresh/",
        method: "POST",
        body: { refresh: token },
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      // set new access token
      api.dispatch(setAccessToken({ accessToken: refreshResult.data.access }));

      // retry query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(removeTokens());
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
    }

    // if (refreshResult?.data) {
    //   // set new access token
    //   api.dispatch(setToken({ accessToken: refreshResult.data.access }));

    //   // retry query
    //   result = await baseQuery(args, api, extraOptions);
    // } else {
    //   api.dispatch(signOut());
    // }
  }

  return result;
};*/
