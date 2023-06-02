import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../login/Login";
import ForgetPassword from "../login/ForgetPassword";
import Register from "../login/Register";

const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default PageRouter;
