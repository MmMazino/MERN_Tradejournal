import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { id, value } = e.target;

    // Update the user state
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault;
    try {
      e.preventDefault();
      const res = await axios.post("/auth/login", user);
      if (res.status == 200) {
        localStorage.setItem("authToken", res.data.token);
        localStorage.setItem("user", res.data.user);
        alert("login success");
        // console.log(process.env.URL_PATH);
        navigate("/");
      }
    } catch (error) {
      console.error("Error making POST request:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="max-w-md bg-white rounded-md p-10 mx-auto w-full">
        <h1 className="text-center  text-black mt-4 text-3xl">WelcomeBack!!</h1>
        <p className="mt-2 text-sm text-gray-600 text-center">
          Please sign in to your account
        </p>
        <div className="mt-8">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                className="text-sm font-bold text-gray-700 tracking-wide"
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                required
                onChange={handleInput}
                className="w-full text-base py-2 border-b bg-white border-gray-300 focus:outline-none focus:border-indigo-500 text-black"
              ></input>
            </div>
            <div className="mt-4">
              <label className="text-sm font-bold text-gray-700 tracking-wide">
                Password:
              </label>
              <input
                type="password"
                onClick={handleInput}
                id="password"
                required
                className="w-full text-base py-2 border-b bg-white border-gray-300 focus:outline-none focus:border-indigo-500 text-black"
              ></input>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-white focus:ring-indigo-400 border-gray-300 rounded"
                ></input>
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Sign in
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Don't have an account?</span>
              <a
                href={`/register`}
                className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
