import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className='flex'>
        <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/7c9e63f7-5b5d-43a4-a3fb-41917ac25301/web/IN-en-20251013-TRIFECTA-perspective_7bc35267-b383-4fb3-b173-eae32292d42e_large.jpg' alt='log-in-bg' />
        <form className='relative p-12 bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0  flex justify-center flex-col gap-6'>
          <h1 className='text-white text-bold text-3xl p-2'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
          {!isSignInForm && <input type='text' placeholder='Full-name' className=' text-white p-2 w-full border-1 bg-gray-600 bg-opacity-50 rounded-md' />}
          <input type='email' placeholder='Email-Address' className=' text-white p-2 w-full border-1 bg-gray-600 bg-opacity-50 rounded-md' />
          <input type='password' placeholder='Password' className=' text-white p-2 w-full border-1 bg-gray-600 bg-opacity-50 rounded-md' />
          <button className='p-4 bg-red-700 w-full rounded-md mt-4'>{isSignInForm ? "Sign In": "Sign Up"}</button>
          <p className='text-white' >{isSignInForm ? (<>New to Netflix? <span className="text-white cursor-pointer hover:underline hover:font-semibold" onClick={toggleSignInForm}>Sign Up Now.</span> </>): (<>Already Registered? <span className="text-white cursor-pointer hover:underline hover:font-semibold" onClick={toggleSignInForm}>Sign In Now.</span> </>)}</p>
        </form>
      </div>
    </div>
  )
}

export default Login