import { createSlice } from "@reduxjs/toolkit";
import { promoApi } from "../../api/promoApi";

const initialState = {};
export const promoSlice = createSlice({
  name: "promo",
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

export const {  } = promoSlice.actions;
export default promoSlice.reducer;
