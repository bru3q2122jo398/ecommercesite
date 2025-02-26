
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [], // ✅ Changed 'product' to 'products' (plural)
//   totalQuantity: 0,
//   totalPrice: 0,
// };

// const CartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const newItem = action.payload;

//       // ✅ Fix: Ensure 'state.products' is an array before calling 'find()'
//       if (!state.products) {
//         state.products = [];
//       }

//       const itemIndex = state.products.find((item) => item.id === newItem.id);

//       if (itemIndex) {
//         itemIndex.quantity++;
//         itemIndex.totalPrice += newItem.price; // ✅ Fix: Correct spelling of totalPrice
//       } else {
//         state.products.push({
//           id: newItem.id,
//           name: newItem.name,
//           price: newItem.price,
//           quantity: 1,
//           totalPrice: newItem.price,
//           image: newItem.image,
//         });
//       }

//       state.totalPrice += newItem.price;
//       state.totalQuantity++;
//     },
//     removeFromCart(state,action){
//       const id = action.payload;
//       const findItem = state.products.find((item) => item.id === id)
//       if(findItem){
//           state.totalPrice -= findItem.totalPrice
//           state.totalQuantity -= findItem.Quantity
//           state.products = state.products.filter(item => item.id !==id)

//       }

//     },
//     increaseQuantity(state,action){
//       const id = action.payload;
//       const findItem = state.products.find((item) => item.id === id)
//       if(findItem){
//         findItem.quantity++;
//         findItem.totalPrice += findItem.price
//         state.totalQuantity++;
//         state.totalPrice +=findItem.price
//       }
//     },
//     decreaseQuantity(state,action){
//       const id = action.payload;
//       const findItem = state.products.find((item) => item.id === id)
//       if(findItem.quantity > 1){
//       if(findItem){
//         findItem.quantity--;
//         findItem.totalPrice -= findItem.price
//         state.totalQuantity--;
//         state.totalPrice -=findItem.price
//       }
//     }
//     }
//   },
// });

// export const { addToCart, removeFromCart, increaseQuantity,decreaseQuantity } = CartSlice.actions;
// export default CartSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        state.totalPrice -= item.totalPrice;
        state.totalQuantity -= item.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
        state.totalQuantity++;
        state.totalPrice += item.price;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalPrice -= item.price;
        state.totalQuantity--;
        state.totalPrice -= item.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
