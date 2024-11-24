import IntroAutoType from "../Components/AutoTyper";
import { useLoginForm } from "../hooks/useLoginForm";
import LoginForm from "../Components/LoginForm";
import { GES_STUDYSEED_LOGO, SAM_LOADING } from "../utils/image-constants";
import { LoginSubWrapper, LoginWrapper, LogoWrapper } from "../StyledComponents/styledForLogin";

export default function Login() {
  const { userid, loginError, btnActive, gameMapLoading, authLoading, handleChange, handleLogin } =
    useLoginForm();

  return (
    <LoginWrapper>
      <LoginSubWrapper>
        <LogoWrapper>
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
        </LogoWrapper>

        {gameMapLoading && (
          <div style={{ padding: "1em" }}>
            <img
              className="sam-loading"
              src={SAM_LOADING}
              alt="studyseed-sam"
              style={{
                height: "15em",
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
      </LoginSubWrapper>
    </LoginWrapper>
  );
}
