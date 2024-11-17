import IntroAutoType from "../Components/AutoTyper";
import { useLoginForm } from "../hooks/useLoginForm";
import LoginForm from "../Components/LoginForm";
import {
  GES_STUDYSEED_LOGO,
  SAM_COMPLETION,
  SAM_CONSTRUCTION,
  SAM_LOADING,
} from "../utils/image-constants";

export default function Login() {
  const { userid, loginError, btnActive, gameMapLoading, authLoading, handleChange, handleLogin } =
    useLoginForm();

  return (
    <div className="login-container">
      <div className="login-subwrapper">
        <img
          className="sam-left"
          src={SAM_COMPLETION}
          alt="studyseed sam"
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
          src={SAM_CONSTRUCTION}
          alt="studyseed sam"
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
            src={GES_STUDYSEED_LOGO}
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
