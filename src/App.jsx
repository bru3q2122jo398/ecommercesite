// import React, { useState } from 'react'

// import Navbar from "./components/Navbar";
// import Fooder from "./components/Fooder";
// import Home from "./pages/Home"
// import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import Shop from './pages/Shop';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';
// import Productdeti from './pages/Productdeti';
// import Order from '../src/pages/Order'; 
// import FilterData from '../src/pages/FilterData';





// const App = () => {
//   const [order ,setOrder]=useState(null)
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="" element={<Home/>}></Route>
//           <Route path="/shop"element={<Shop/>}></Route>
//           <Route path="/Cart" element={<Cart/>}></Route>
//           <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route>
//           <Route path='/order-confirmation' element={<Order order={order}/>}></Route>
//           <Route path='/filter-data' element={<FilterData />}></Route>
//           <Route path='/product/:id' element={<Productdeti />}></Route>



//         </Routes>
//         <Fooder />

//       </BrowserRouter>



//     </div>
//   )
// }

// export default App


import React, { useState } from 'react';

import Navbar from "./components/Navbar";
import Fooder from "./components/Fooder";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Productdeti from './pages/Productdeti';
import Order from './pages/Order';  // Fixed import path
import FilterData from './pages/FilterData'; // Fixed import path

const App = () => {
  const [order, setOrder] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
          <Route path="/order-confirmation" element={<Order order={order} />} />
          <Route path="/filter-data" element={<FilterData />} />
          <Route path="/product/:id" element={<Productdeti />} />
        </Routes>
        <Fooder />
      </BrowserRouter>
    </div>
  );
};

export default App;
