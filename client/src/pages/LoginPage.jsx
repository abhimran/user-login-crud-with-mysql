import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here, such as sending a request to your backend service
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <div className='flex items-center justify-center'>
      <form
        className='bg-white p-6 rounded-lg shadow-md w-[500px] '
        onSubmit={handleSubmit}
      >
        <h2 className='text-lg font-medium mb-4'>Login</h2>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-medium mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='border border-gray-400 p-2 w-full'
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-medium mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='border border-gray-400 p-2 w-full'
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
