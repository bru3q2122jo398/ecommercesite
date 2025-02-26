import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
    <h2 className='text-2xl font-semibold mb-4'>Sign Up</h2>
    <form >
        <div className='mb-4'>
        <label className='block text-gray-700' htmlFor="">Name</label>
        <input type="name" className='w-full px-3 py-2 border' placeholder='Enter Name' />

        </div>
        <div className='mb-4'>
          <label className='block text-gray-700' htmlFor="">Password</label>
          <input type="password" className='w-full px-3 py-2 border' placeholder='Enter Password' />
        </div>
        {/* <div className='mb-4 flex items-center justify-between'>
            <label className='inline-flex items-center'>
                <input type="checkbox" className='form-checkbox' />
                <span className='ml-2 text-gray-700'>Remember Me</span>
            </label>
            <a href="#" className='text-red-800'>Forgot Password?</a>
        </div> */}
        <div className='mb-4'>
            <button type='submit' className='w-full bg-red-600 text-white py-2'>Sign Up</button>
        </div>
    </form>
    <div className='text-center'>
        <span className='text-gray-700'>Already Have an Account?</span>
        <button className='text-red-800' onClick={openLogin} >Login </button>
    </div>
</div>
)
}

export default Register