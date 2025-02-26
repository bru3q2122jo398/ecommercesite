import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
  const navigate = useNavigate(); // Fix capitalization

  // Handle case where order is null or undefined
  if (!order) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-red-600">Order Not Found</h2>
        <p className="text-gray-600 mt-2">Please complete your checkout process.</p>
        <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate('/checkout')}
        >
          Go to Checkout
        </button>
      </div>
    );
  }

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <h2 className='text-2xl font-semibold mb-4'>Thank you for your order</h2>
      <p>Your order has been placed successfully. You will receive an email confirmation shortly.</p>

      <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
        <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
        <p><strong>Order Number:</strong> {order.orderNumber}</p>

        <div className='text-md font-semibold mt-4'>
          <h2>Shipping Information</h2>
          <p>{order.shoppingInformation?.address || 'N/A'}</p>
          <p>{order.shoppingInformation?.city || 'N/A'}</p>
          <p>{order.shoppingInformation?.zip || 'N/A'}</p>
        </div>

        <div className='mt-4'>
          <h3 className='text-md font-semibold mb-2'>Products Ordered</h3>
          {order.products.map(product => (
            <div key={product.id} className='flex justify-between mt-2'>
              <p>{product.name} x {product.quantity}</p>
              <p>${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className='mt-4 flex justify-between'>
          <span><strong>Total Price</strong></span>
          <span className='font-semibold'>${order.totalPrice.toFixed(2)}</span>
        </div>

        <div className='mt-6'>
          <button className='bg-green-500 text-white py-2 px-4 hover:bg-green-600'>Order Tracking</button>
          <button 
            className='ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800'
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
