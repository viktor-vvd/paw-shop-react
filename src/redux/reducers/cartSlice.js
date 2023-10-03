import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../../api/cartApi";

const initialState = {
  cartCount:0,
  cartTotal:0,
  cart_id:null,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartCount(state, action) {
      state.cartCount = action.payload;
    },
    setCartTotal(state, action) {
      state.cartTotal = action.payload;
    },
    setCart_id(state, action) {
      state.cart_id = action.payload;
    },
    removeCart(state, action) {
      state.cartCount = 0;
      state.cartTotal = 0;
      state.cart_id=null;
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

export const {setCartCount, setCart_id, removeCart, setCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
