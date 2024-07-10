import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { FiUnlock } from "react-icons/fi";
import { toast } from "react-toastify";
import { IoHelpBuoyOutline } from "react-icons/io5";
import axios from "axios"; 
import msd from '../Assets/MSD.PNG'
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
const Login = () => {
  const [loginData, setLoginData] = useState({ 
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const changeHandle = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitHandle = async (e) => {
    console.log(loginData);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${window.location.origin}/login`,
        loginData
      );
      localStorage.setItem("token", response.data.token);
      navigate("/profile")
      // if (response.data.user.role === "Admin") {
      //   navigate("/profile")
      // }
      // if (response.data.user.role === "Student") {
      //   navigate("/student")
      // }
      toast.success(response.data.message);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
    <div className="min-vh-100 bg-light d-flex flex-column justify-content-center py-4">
      <div className="p-4 mx-auto w-100" style={{ maxWidth: '400px' }}>
        {/* <h1 className="font-weight-bold text-center mb-4">
          Hello There <span className="text-primary">!</span>
        </h1> */}
        <Container className="d-flex justify-content-center mb-4">
        <img src={msd} height={50} alt="" />
        </Container>
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          <form>
            <div className="px-4 py-3">
              <label className="font-weight-semibold text-sm text-muted pb-1 d-block">
                E-mail
              </label>
              <input
                type="email"
                value={loginData.email}
                name="email"
                onChange={changeHandle}
                className="form-control"
              />
              <label className="font-weight-semibold text-sm text-muted pb-1 d-block mt-3">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={changeHandle}
                autoComplete="complete-password"
                className="form-control"
              />
              <button
                type="submit"
                onClick={submitHandle}
                className="btn btn-primary w-100 py-2 mt-4"
              >
                <span className="mr-2">Login</span>
                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </form>
          <div className="py-3">
            <div className="d-flex justify-content-between">
              <button className="btn btn-link text-muted">
              <FiUnlock className="mx-2" />
                <span className="ml-1">Forgot Password</span>
              </button>
              <button className="btn btn-link text-muted">
              <IoHelpBuoyOutline className="mx-2" />
                <span className="ml-1">Help</span>
              </button>
            </div>
          </div>
        </div>
        <div className="py-3">
          <div className="d-flex justify-content-between">
            <Link to="/Signup">
              <button className="btn btn-link text-muted">
              <FaArrowLeftLong className="mx-2" />
                <span className="ml-1">
                  Don't Have an Account,
                  <span className="text-primary">Sign Up?</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
