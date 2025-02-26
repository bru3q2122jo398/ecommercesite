import React from 'react';

const Login = ({ openSignUp }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border"
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          {/* FIXED: Changed <a> to <button> to avoid invalid href error */}
          <button type="button" className="text-red-800">
            Forgot Password?
          </button>
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Don't Have an Account?</span>
        <button className="text-red-800 ml-2" onClick={openSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
