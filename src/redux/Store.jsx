// // import { configureStore } from "@testing-library/dom";
// import { configureStore } from "@reduxjs/toolkit"; 
// import CartSlice from './CartSlice';
// import ProductSliceReducer from './ProductSlice'
//  const store =configureStore({
//     reducer:{
//         cart:CartSlice,
//         product:ProductSliceReducer
//     }
//  })
//  export default store;


import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productReducer from "./ProductSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
