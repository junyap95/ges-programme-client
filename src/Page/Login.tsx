import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { MarkerWrapper } from "../StyledComponents/styledComponents";
import styled from "styled-components";
import { API_URL } from "../constants";
import IntroAutoType from "../Components/AutoTyper";

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

export default function Login() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const [userid, setUserId] = useState("");
  const [btnActive, setBtnActive] = useState(false);
  const [serverLoading, setServerLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginError(false);
    setServerLoading(false);
    if (e.target.value.length >= 5) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
    setUserId(e.target.value.toUpperCase());
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic
    if (userid) {
      const loginRes = await login(userid);
      setServerLoading(true);
      if (loginRes.operation) {
        setLoginError(false);
        context?.signInContext(userid); /** Setting context state */
        navigate("/game-map");
      } else {
        setLoginError(true);
        setServerLoading(false);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-subwrapper">
        <img
          className="sam-left"
          src="https://ik.imagekit.io/jbyap95/sam_constructor02_shadow.png?updatedAt=1730139103345"
          alt="studyseed-sam"
          style={{
            width: "50%",
            position: "absolute",
            right: "75%",
            bottom: "10%",
            pointerEvents: "none",
            userSelect: "none",
            transition: "all 1s ease-in-out",
            transform: serverLoading ? "translateX(-200%)" : "translateX(0)",
          }}
        />

        <img
          className="sam-right"
          src="https://ik.imagekit.io/jbyap95/sam_constructor01_shadow.png?updatedAt=1730139103345"
          alt="studyseed-sam"
          style={{
            width: "50%",
            position: "absolute",
            left: "80%",
            bottom: "10%",
            pointerEvents: "none",
            userSelect: "none",
            transition: "all 1s ease-in-out",
            transform: serverLoading ? "translateX(200%)" : "translateX(0)",
          }}
        />

        <div style={{ position: "absolute", top: "0", padding: "0", width: "25rem" }}>
          <img
            className="studyseed-logo"
            src="https://ik.imagekit.io/jbyap95/gamified%20learning%20programme.png?updatedAt=1730298460178"
            alt="studyseed-logo"
            style={{
              width: "100%",
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </div>
        {serverLoading ? (
          <div style={{ padding: "1em" }}>
            <img
              className="sam-loading"
              src="https://ik.imagekit.io/jbyap95/sam_anim03.gif?updatedAt=1729092923412"
              alt="studyseed-sam"
              style={{
                // margin: "0 auto",
                // inset: "0",
                height: "15em",
                // position: "absolute",
              }}
            />
            {serverLoading && <IntroAutoType />}
          </div>
        ) : (
          <>
            <LoginForm className="login-form">
              <form
                onSubmit={handleLogin}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2em",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FillInputs
                  placeholder="Enter Your Userid"
                  type="text"
                  id="userid"
                  value={userid}
                  onChange={handleChange}
                  required
                  maxLength={10}
                  autoComplete="off"
                />

                <MarkerWrapper
                  type="submit"
                  style={{
                    position: "relative",
                    backgroundColor: btnActive ? "#f58439" : "grey",
                    pointerEvents: btnActive ? "auto" : "none",
                    padding: "1em 3em",
                  }}
                >
                  I'M GAME!
                  {loginError && <ErrorMsg>Invalid User ID</ErrorMsg>}
                </MarkerWrapper>
              </form>
            </LoginForm>
          </>
        )}
      </div>
    </div>
  );
}
const FillInputs = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3em;
  font-size: 1em;
  text-align: center;
  caret-color: #2b496d;
  color: #333333;
  border: 0px solid #3380fc;
  border-bottom: 2px solid #2b496d;
  background-color: transparent;

  &::placeholder {
    color: #2b496d;
  }

  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`;

const LoginForm = styled.div`
  position: relative;
  top: 10%;
  width: 25rem;
  padding: 3rem;
  border: 2px solid #3380fc;
  height: 14rem;

  background-color: rgba(229, 229, 229, 0.1);
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0px solid rgba(255, 255, 255, 0.1);
`;

const ErrorMsg = styled.small`
  position: absolute;
  top: -50%;
  left: 0%;
  right: 0%;
  color: #f5394c;
`;
