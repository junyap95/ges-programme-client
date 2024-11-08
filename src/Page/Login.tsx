import { SAM_LOADING } from "../utils/constants";
import IntroAutoType from "../Components/AutoTyper";
import { useLoginForm } from "../hooks/useLoginForm";
import LoginForm from "../Components/LoginForm";

export default function Login() {
  const { userid, loginError, btnActive, gameMapLoading, authLoading, handleChange, handleLogin } =
    useLoginForm();

  const hostname = window.location.hostname; // Gets the hostname (e.g., "localhost" or "127.0.0.1")
  const protocol = window.location.protocol; // Gets the protocol (e.g., "http:" or "https:")
  const port = window.location.port; // Gets the port number (e.g., "3000" for http://localhost:3000)

  console.log(`${protocol}//${hostname}:${port}`);

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
            transform: gameMapLoading ? "translateX(-200%)" : "translateX(0)",
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
            transform: gameMapLoading ? "translateX(200%)" : "translateX(0)",
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
        {gameMapLoading && (
          <div style={{ padding: "1em" }}>
            <img
              className="sam-loading"
              src={SAM_LOADING}
              alt="studyseed-sam"
              style={{
                // margin: "0 auto",
                // inset: "0",
                height: "15em",
                // position: "absolute",
              }}
            />
            {gameMapLoading && <IntroAutoType />}
          </div>
        )}
        <LoginForm
          userid={userid}
          loginError={loginError}
          btnActive={btnActive}
          gameMapLoading={gameMapLoading}
          authLoading={authLoading}
          handleChange={handleChange}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
}
