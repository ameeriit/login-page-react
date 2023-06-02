import React from "react";
import loginImg from "../images/login.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="login container mx-auto h-screen flex justify-center items-center">
        <div className="login-wrapper rounded shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-10 bg-gradient-to-tl from-green-400 via-cyan-900 to-blue-500 w-4/5 md:w-1/2 lg:w-2/6 mx-auto text-center flex flex-col items-center justify-center">
          <img src={loginImg} alt="loginimg.png" className="mb-4 w-24" />
          <h4 className="text-white font-semibold text-2xl mb-6">Login</h4>
          <form onSubmit={onSignIn} className="text-left w-full">
            <label
              htmlFor="email"
              className="text-white font-semibold text-left block"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="border-2 border-blue-500 mb-2 px-3 py-1 rounded w-full text-black"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="password"
              className="text-white font-semibold text-left block"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="border-2 border-blue-500 px-3 py-1 rounded mb-4 w-full text-black"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link
              to="/forgetpassword"
              className="flex justify-end text-white font-semibold mb-2"
            >
              Forgot Password?
            </Link>
            <input
              type="checkbox"
              name="remlog"
              className="mb-8 mr-2 form-checkbox h-4 w-4"
            />
            <label htmlFor="remlog" className="text-white font-semibold">
              Remember me
            </label>
            <button className="text-white rounded bg-blue-500 block px-2 py-1 mb-6">
              Sign In
            </button>
            <div className="flex justify-center">
              <Link to="/register" className="text-white text-center">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
