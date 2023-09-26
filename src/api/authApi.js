import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api.config";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQuery,
    tagTypes: [],
    endpoints: (builder) => ({
      /* inviteUser: builder.mutation({
        query: (data) => {
          return {
            url: `users/invite/`,
            method: `POST`,
            body: data,
          };
        },
      }), */
      registerUser: builder.mutation({
        query: (data) => {
          return {
            url: `register/`,
            method: `POST`,
            body: data,
          };
        },
      }),
      loginUser: builder.mutation({
        query: (data) => {
          return {
            url: `login/`,
            method: `POST`,
            body: data,
          };
        },
        invalidatesTags: ["User"],
      }),
      forgotPassword: builder.mutation({
        query: (data) => {
          return {
            url: `password/forgot/`,
            method: `POST`,
            body: data,
          };
        },
      }),
      logoutUser: builder.mutation({
        query: (data) => {
          return {
            url: `logout/`,
            method: `POST`,
            body: data,
          };
        },
        invalidatesTags: ["User"],
      }),
      /* user: builder.query({
        query: (data) => {
          return {
            url: `users/`,
            method: `GET`,
            body: data,
          };
        },
        providesTags: ["User"],
      }),
      setUser: builder.mutation({
        query: (data) => {
          return {
            url: `users/`,
            method: `PATCH`,
            body: data,
          };
        },
        invalidatesTags: ["User"],
      }),
      resetPassword: builder.mutation({
        query: (data) => {
          return {
            url: `users/reset_password/`,
            method: `POST`,
            body: data,
          };
        },
      }),
      finishResetPassword: builder.mutation({
        query: (data) => {
          return {
            url: `users/finish_reset_password/`,
            method: `POST`,
            body: data,
          };
        },
      }), */
    }),
  });
  export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useForgotPasswordMutation,
    useLogoutUserMutation,
    /* useInviteUserMutation,
    useRegistrationUserMutation,
    useLoginUserMutation,
    useUserQuery,
    useSetUserMutation,
    useChangePasswordMutation,
    useResetPasswordMutation,
    useFinishResetPasswordMutation, */
  } = authApi;
  