import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = "http://localhost:5000/register";

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        setUser({
          username: '',
          email: '',
          password: '',
          confirmpassword: '',
        });
        localStorage.setItem("token", data.token);
        window.alert("Signup Successful");
        navigate("/home");
      }
    }
    catch (err) {
      console.log("register : ", err);
    }
  };

  return (
    <div className="main-register">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">Username:</label>
        <input
          type="text"
          id="first"
          name="username"
          value={user.username}
          placeholder="Enter user name"
          autoComplete="off"
          onChange={handleInput}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          placeholder="Enter your email"
          autoComplete="off"
          onChange={handleInput}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={user.password}
          autoComplete="off"
          onChange={handleInput}
          required
        />

        <label htmlFor="confirmpassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          placeholder="Re-type password for confirmation"
          value={user.confirmpassword}
          autoComplete="off"
          onChange={handleInput}
          required
        />

        <button className="btn-a" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
