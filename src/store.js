import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import slidersReducer from "./features/sliders/sliderSlice.js";
import bannersReducer from "./features/banners/bannersSlice.js";
import cartReducer from "./features/cart/cartSlice.js";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    sliders: slidersReducer,
    banners: bannersReducer,
    cart: cartReducer,
  },
});
