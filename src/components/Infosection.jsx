import React from 'react'
import { FaHeadset, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaLock, FaMoneyBill1Wave } from 'react-icons/fa6'

const Infosection = () => {
    const infoitems =[
        {
            icon:<FaShippingFast className='text-3xl text-red-600'/>,
            title: 'free shipping',
            description:'Get your order delivered with no extra cost',
        },
        {
            icon: <FaHeadset className='text-3xl text-red-600'/>,
            title: 'Support 24/7',
            description:'We are here to assist you anytime',
        },
        {
            icon: <FaMoneyBill1Wave className='text-3xl text-red-600'/>,
            title: '100% Money Back',
            description:'Full refund if you are not satisfied',

        },
        {
            icon: <FaLock className='text-3xl text-red-600'/>,
            title: 'Payment Secure',
            description:'Your payment information is safe with us',
        },
        {
            icon: <FaTag className='text-3xl text-red-600'/>,
            title:'Discount',
            description:'Enjoy the best prices on our products'
        }
    ]
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>

            {infoitems.map((ImInsertTemplate,index)=>(
                <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md 
                 transform transition-transform duration-300  hover:scale-105 cursor-pointer'>
                {ImInsertTemplate.icon}
                <h3 className='mt-4 text-xl font-semibold'> {ImInsertTemplate.title}</h3>
                <p className='mt-2 text-gray-600'>{ImInsertTemplate.description}</p>
               </div> 
            ))}
    </div>
</div>
  )
}

export default Infosection