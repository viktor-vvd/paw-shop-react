import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "api/authApi";

const initialState = {
    access_token: null,
    token_type: null,
    user: null,
    isAuth: false,
  };
  export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setTokens(state, action) {
        state.access_token = action.payload.access_token;
        state.token_type = action.payload.token_type;
        state.user = action.payload.user;
      },
      setAccessToken(state, action) {
        state.access_token = action.payload.access_token;
      },
      removeTokens(state, action) {
        state = initialState;
      },
      setIsAuth(state, action) {
        state.isAuth = action.payload;
      },
    },
    /* extraReducers: (builder) => {
      builder.addMatcher(
        authApi.endpoints.user.matchFulfilled,
        (state, { payload }) => {
          state.userInfo = payload;
          state.isAuth = true;
        }
      );
    }, */
  });
  
  export const { setTokens, setAccessToken, removeTokens, setIsAuth } =
    authSlice.actions;
  export default authSlice.reducer;
  