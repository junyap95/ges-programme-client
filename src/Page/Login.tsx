import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../clientConstants";

export const login = async (userid: any, URL: any) => {
  try {
    const params = { userid: userid };
    const response = await fetch(`http://localhost:3001/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    console.log("response client", response);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const Login: React.FC = () => {
  const [userid, setUserid] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserid(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log("User ID:", userid);
    const loginRes = await login(userid, API_URL);
    console.log(loginRes);
    // On successful login, redirect to another page
    if (loginRes.operation) {
      setLoginError(false);
      navigate("/map");
    } else {
      setLoginError(true);
    }
    return;
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="userid">User ID:</label>
          <input type="text" id="userid" value={userid} onChange={handleChange} required />
        </div>

        <button type="submit">Login</button>
      </form>
      {loginError && <p className="error">Invalid User ID</p>}
    </div>
  );
};

export default Login;
