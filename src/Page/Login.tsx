import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../clientConstants";
import { AuthContext } from "../Context/AuthContext";

const login = async (userid: string) => {
  try {
    const params = { userid: userid };
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (response.ok) return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

const Login: React.FC = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const userid = localStorage.getItem("userid");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context?.setUserIdHandler(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic
    if (userid) {
      const loginRes = await login(userid);
      if (loginRes.operation) {
        setLoginError(false);
        context?.signInContext(); /** Setting context state */
        navigate("/game-map");
      } else {
        setLoginError(true);
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="userid">User ID:</label>
          <input type="text" id="userid" value={context?.userid} onChange={handleChange} required />
        </div>

        <button type="submit">Login</button>
      </form>
      {loginError && <p className="error">Invalid User ID</p>}
    </div>
  );
};

export default Login;
