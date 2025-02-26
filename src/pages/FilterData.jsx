// import React from 'react'
// import { useSelector } from 'react-redux'
// import NoProduct from '../assets/Images/not_found.png'
// import Productcart from '../components/Productcart'; 

// const FilterData = () => {
//     const filterProducts= useSelector(state => state.product.filteredData)
//   return (
    
//     <div className=' mx-auto py-12 px-4 md:px-16 lg:px-24'>
//         {filterProducts.length > 0 ?
//         <>
//     <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
//     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
//       {filterProducts.map(((product)=>(
//              <Productcart product={product}/>
//       )))}
//     </div>
//     </>
//     :
//     <div className='flex justify-center'>
//         <img src={NoProduct} alt="" />

//     </div>
//      }
//   </div>
//   )
// }

// export default FilterData

import React from "react";
import { useSelector } from "react-redux";
import NoProduct from "../assets/Images/not_found.png";
import Productcart from "../components/Productcart";

const FilterData = () => {
  // const filterProducts = useSelector((state) => state.product.filteredData || []);
  const filterProducts = useSelector((state) => state.product.filteredData || []);


  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filterProducts.map((product) => (
              <Productcart key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img src={NoProduct} alt="No products found" className="w-64 h-64 object-contain" />
        </div>
      )}
    </div>
  );
};

export default FilterData;
