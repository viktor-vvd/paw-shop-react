import { createSlice } from "@reduxjs/toolkit";
import { checkoutApi } from "../../api/checkoutApi";

const initialState = {};
export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    
  },
/*   extraReducers: (builder) => {
    builder.addMatcher(
        pageApi.endpoints.projectsGET.matchFulfilled,
      (state, { payload }) => {
        state.projectsList = payload;
      }
    );
  },
 */});

export const {  } = checkoutSlice.actions;
export default checkoutSlice.reducer;
