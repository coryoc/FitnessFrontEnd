
import React, { useState } from "react";
import { loginUser, registerUser } from "../APIs/apis.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
    const res = await loginUser(username, password);
    console.log(res.token);
    window.localStorage.setItem('fitness_tracker_JWT', res.token);
    window.alert(res.message);

    } catch (err) {
        console.error(err);
      }

  };

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    try {
    const res = await registerUser(username, password);
    console.log(res);
    window.localStorage.setItem('fitness_tracker_JWT', res.token);
    window.alert(res.message);
    } catch (err) {
        console.error(err);
      }

  };

  return (
    <div className="login-form">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmitLogin} className="login-box">
        <label>Username:</label>
        <input
          id="username"
          onChange={handleOnChange}
          value={username}
          placeholder="username"
        />

        <label>Password:</label>
        <input
          id="password"
          onChange={handleOnChange}
          value={password}
          placeholder="password"
        />

        <button type="submit" id="login-button">
          Login
        </button>
      </form>

      <h2 className="form-title">Register</h2>
      <form onSubmit={handleSubmitRegister} className="login-box">
        <label>Username:</label>
        <input
          id="username"
          onChange={handleOnChange}
          value={username}
          placeholder="username"
        />

        <label>Password:</label>
        <input
          id="password"
          onChange={handleOnChange}
          value={password}
          placeholder="password"
        />

        <button type="submit" id="login-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;