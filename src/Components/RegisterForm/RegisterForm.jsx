import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterForm";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Registration Successful!");
      navigate("/"); 
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        {errors.name && <p className="error">{errors.name}</p>}

        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MdEmail className="icon" />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Register</button>

        <div className="register-link">
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
