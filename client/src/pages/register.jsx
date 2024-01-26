import React from 'react'

const register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-md bg-white rounded-md p-10 mx-auto w-full">
        <h1 className="text-center  text-black mt-4 text-3xl">Sign Up!!</h1>
        <p class="mt-2 text-sm text-gray-600 text-center">
          Please sign in to your account
        </p>
        <div className="mt-8">
          <from>
            <div>
              <label className="text-sm font-bold text-gray-700 tracking-wide">
                FirstName:
              </label>
              <input
                type="text"
                required
                min={2}
                max={50}
                className="w-full text-base py-2 border-b bg-white border-gray-300 focus:outline-none focus:border-indigo-500 text-black"
              ></input>
            </div>
            <div className="mt-4">
              <label className="text-sm font-bold text-gray-700 tracking-wide">
                LastName:
              </label>
              <input
                type="text"
                required
                min={2}
                max={50}
                className="w-full text-base py-2 border-b bg-white border-gray-300 focus:outline-none focus:border-indigo-500 text-black"
              ></input>
            </div >
            <div className="mt-4">
              <label className="text-sm font-bold text-gray-700 tracking-wide">
                Email:
              </label>
              <input
                type="text"
                required
                className="w-full text-base py-2 border-b bg-white border-gray-300 focus:outline-none focus:border-indigo-500 text-black"
              ></input>
            </div>
            <div className="mt-4">
              <label className="text-sm font-bold text-gray-700 tracking-wide">
                Password:
              </label>
              <input
                type="password"
                required
                className="w-full text-base py-2 border-b bg-white border-gray-300 focus:outline-none focus:border-indigo-500 text-black"
              ></input>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Register
              </button>
            </div>
            <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Do have an account?</span>
              <a
                href="#"
                class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign in
              </a>
            </p>
          </from>
        </div>
      </div>
    </div>
  )
}

export default register