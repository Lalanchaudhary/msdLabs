import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    age: "",
    gender: "Male",
    email: "",
    mobile_no: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  const changeHandle = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const submitHandle = async () => {
    console.log(signupData);
    if (signupData.password !== signupData.confirm_password) {
      return toast.error("Password and confirm password do not match");
    }
    try {
      const response = await axios.post(
        `${window.location.origin}/signup`,
        signupData
      );
      navigate("/login");
      toast.success(response.data.message);
    } catch (err) {
      toast.error(err.response.data.Message);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-light">
      <div className="container" style={{ maxWidth: '400px' }}>
        <div className="card p-4 shadow-sm w-100">
          <h1 className="mb-4 text-center">Sign up</h1>
          <input
            type="text"
            className="form-control mb-3"
            name="name"
            onChange={changeHandle}
            required
            value={signupData.name}
            placeholder="Full Name"
          />
          <input
            type="number"
            className="form-control mb-3"
            name="age"
            onChange={changeHandle}
            required
            value={signupData.age}
            placeholder="Age"
          />
          <select
            name="gender"
            className="form-select mb-3"
            onChange={changeHandle}
            value={signupData.gender}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <input
            type="email"
            className="form-control mb-3"
            name="email"
            required
            onChange={changeHandle}
            value={signupData.email}
            placeholder="Email"
          />
          <input
            type="tel"
            className="form-control mb-3"
            onChange={changeHandle}
            value={signupData.mobile_no}
            name="mobile_no"
            pattern="[0-9]{10,15}"
            required
            placeholder="Mobile Number"
          />
          <input
            type="password"
            className="form-control mb-3"
            name="password"
            onChange={changeHandle}
            required
            value={signupData.password}
            placeholder="Password"
          />
          <input
            type="password"
            className="form-control mb-3"
            name="confirm_password"
            onChange={changeHandle}
            value={signupData.confirm_password}
            required
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            onClick={submitHandle}
            className="btn btn-primary w-100 mb-3"
          >
            Create Account
          </button>
          <div className="text-center text-muted mt-3">
            By signing up, you agree to the{" "}
            <a className="text-decoration-none" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="text-decoration-none" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-center text-muted mt-3">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-primary text-decoration-none">Log in</span>
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Signup;
