import React from "react";

const login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-md bg-white rounded-md p-10 mx-auto w-full">
        <h1 className="text-center  text-black mt-4 text-3xl">WelcomeBack!!</h1>
        <p class="mt-2 text-sm text-gray-600 text-center">
          Please sign in to your account
        </p>
        <div className="mt-8">
          <from>
            <div>
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
            <div class="flex items-center justify-between mt-4">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="h-4 w-4 bg-white focus:ring-indigo-400 border-gray-300 rounded"
                ></input>
                <label
                  for="remember_me"
                  class="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Sign in
              </button>
            </div>
            <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Don't have an account?</span>
              <a
                href={`/register`}
                class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign up
              </a>
            </p>
          </from>
        </div>
      </div>
    </div>
  );
};

export default login;
