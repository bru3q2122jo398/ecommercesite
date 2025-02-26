

// // import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //   products: [], 
// //   searchTerm:'',
// //   filteredData:[]
// // };

// // const ProductSlice = createSlice({
// //   name: "product",
// //   initialState, 
// //   reducers: {
// //     setProducts: (state, action) => {
// //       state.products = action.payload;
// //     },
// //     setSearchTerm(state, action){
// //       state.searchTerm=action.payload
// //       state.filteredData=state.products.filter(product =>
// //         product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
// //       )
// //     }
// //   },
// // });

// // export const { setProducts,setSearchTerm } = ProductSlice.actions;
// // export default ProductSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [],
//   searchTerm: "",
// };

// const ProductSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     setProducts: (state, action) => {
//       state.products = action.payload;
//     },
//     setSearchTerm: (state, action) => {
//       state.searchTerm = action.payload;
//     },
//   },
// });

// export const { setProducts, setSearchTerm } = ProductSlice.actions;
// export default ProductSlice.reducer;

// // Selector to get filtered products
// export const selectFilteredProducts = (state) => {
//   const { products, searchTerm } = state.product;
//   return products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// };

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], 
  searchTerm: "",
  filteredData: []
};

const ProductSlice = createSlice({
  name: "product",
  initialState, 
  reducers: {
    setProducts: (state, action) => {
      state.products = Array.isArray(action.payload) ? action.payload : []; // ✅ Ensures it's an array
      state.filteredData = state.products; // ✅ Initialize filtered data
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter((product) =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }
  },
});

export const { setProducts, setSearchTerm } = ProductSlice.actions;
export default ProductSlice.reducer;
