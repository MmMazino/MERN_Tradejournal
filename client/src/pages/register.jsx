import React, { useEffect, useState } from "react";
import * as yup from "yup";

const register = () => {
  const userSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name cannot exceed 50 characters")
      .required("First name is required"),
    lastName: yup
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name cannot exceed 50 characters")
      .required(" name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [valid, setValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleInput = (e) => {
    const { id, value } = e.target;

    // Update the user state
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));

    // Validate the updated user object
    userSchema
      .validateAt(id, { [id]: value })
      .then(() => {
        setValid((prevValid) => ({ ...prevValid, [id]: true }));
      })
      .catch((error) => {
        setValid((prevValid) => ({ ...prevValid, [id]: false }));
        console.error(error.message);
      });
  };
  useEffect(() => {
    console.log(user);
    console.log(valid);
  }, [handleInput]);
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
                id="firstName"
                onChange={handleInput}
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
                id="lastName"
                onChange={handleInput}
                required
                min={2}
                max={50}
                className="w-full text-base py-2 border-b bg-white border-gray-300 focus:outline-none focus:border-indigo-500 text-black"
              ></input>
            </div>
            <div className="mt-4">
              <label className="text-sm font-bold text-gray-700 tracking-wide">
                Email:
              </label>
              <input
                type="text"
                id="email"
                onChange={handleInput}
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
                id="password"
                onChange={handleInput}
                required
                className="w-full text-base py-2 border-b bg-white border-gray-300 focus:outline-none focus:border-indigo-500 text-black"
              ></input>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Register
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Do have an account?</span>
              <a
                href={`/login`}
                className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign in
              </a>
            </p>
          </from>
        </div>
      </div>
    </div>
  );
};

export default register;
