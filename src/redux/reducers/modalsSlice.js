import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authModal: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setAuthModal(state, action) {
      state.authModal = action.payload;
    },
  },
});

export const { setAuthModal } = modalsSlice.actions;
export default modalsSlice.reducer;
