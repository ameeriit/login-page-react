import React from "react";

const ForgetPassword = () => {
  const onForgotPassword = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="login container mx-auto h-screen flex justify-center items-center">
        <div className="login-wrapper rounded shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] p-10 bg-gradient-to-tl from-green-400 via-cyan-900 to-blue-500 w-4/5 md:w-1/2 lg:w-2/6 mx-auto text-center flex flex-col items-center justify-center">
          <form onSubmit={onForgotPassword} className="text-left w-full">
            <label
              htmlFor="email"
              className="text-white font-semibold text-left block mb-2"
            >
              Enter email:
            </label>
            <input
              type="email"
              name="email"
              className="border-2 border-blue-500 mb-8 px-3 py-1 rounded w-full text-black"
              placeholder="Enter Your Email"
            />
            <div className="flex justify-center">
              <button className="text-white rounded bg-blue-500 block px-2 py-1">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
