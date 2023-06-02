import React from "react";

const Register = () => {
  const onSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="login container mx-auto h-screen flex justify-center items-center">
        <div className="login-wrapper rounded shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-10 bg-gradient-to-tl from-green-400 via-cyan-900 to-blue-500 w-4/5 md:w-1/2 lg:w-2/6 mx-auto text-center flex flex-col items-center justify-center">
          <form onSubmit={onSignUp} className="text-left w-full">
            <label
              htmlFor="firstname"
              className="text-white font-semibold text-left block"
            >
              Firstname:
            </label>
            <input
              type="text"
              name="firstname"
              className="border-2 border-blue-500 mb-2 px-3 py-1 rounded w-full text-black"
              placeholder="Firstname"
            />
            <label
              htmlFor="lastname"
              className="text-white font-semibold text-left block"
            >
              Lastname:
            </label>
            <input
              type="text"
              name="lastname"
              className="border-2 border-blue-500 mb-2 px-3 py-1 rounded w-full text-black"
              placeholder="Lastname"
            />
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
              placeholder="Email"
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
              placeholder="Password"
            />
            <label
              htmlFor="repassword"
              className="text-white font-semibold text-left block"
            >
              Password:
            </label>
            <input
              type="password"
              name="repassword"
              className="border-2 border-blue-500 px-3 py-1 rounded mb-4 w-full text-black"
              placeholder="Re-Password"
            />
            <button className="text-white rounded bg-blue-500 block px-2 py-1 mb-6">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
