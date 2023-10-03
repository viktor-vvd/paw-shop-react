import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../../api/cartApi";

const initialState = {
  cartCount:0,
  cart_id:null,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartCount(state, action) {
      state.cartCount = action.payload;
    },
    setCart_id(state, action) {
      state.cart_id = action.payload;
    },
    removeCart(state, action) {
      state=initialState;
    }
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

export const {setCartCount, setCart_id, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
