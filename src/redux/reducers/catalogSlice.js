import { createSlice } from "@reduxjs/toolkit";
import { catalogApi } from "../../api/catalogApi";

const initialState = {};
export const catalogSlice = createSlice({
  name: "catalog",
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

export const {  } = catalogSlice.actions;
export default catalogSlice.reducer;
