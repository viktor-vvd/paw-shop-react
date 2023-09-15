import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authModal: false,
  cartModal: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setAuthModal(state, action) {
      state.authModal = action.payload;
    },
    setCartModal(state, action) {
      state.cartModal = action.payload;
    },
  },
});

export const { setAuthModal, setCartModal } = modalsSlice.actions;
export default modalsSlice.reducer;
