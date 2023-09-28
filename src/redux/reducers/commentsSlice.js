import { createSlice } from "@reduxjs/toolkit";
import { commentsApi } from "../../api/commentsApi";

const initialState = {};
export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  /*   extraReducers: (builder) => {
    builder.addMatcher(
        pageApi.endpoints.projectsGET.matchFulfilled,
      (state, { payload }) => {
        state.projectsList = payload;
      }
    );
  },
 */
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
