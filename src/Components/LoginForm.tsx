import { LoaderCircle } from "lucide-react";
import {
  ErrorMsg,
  FillInputs,
  LoginBtn,
  LoginFormWrapper,
} from "../StyledComponents/styledForLogin";
import { SAM_COMPLETION, SAM_CONSTRUCTION } from "../utils/image-constants";

interface LoginFormProps {
  userid: string;
  loginError: boolean;
  btnActive: boolean;
  gameMapLoading: boolean;
  authLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.FormEvent) => void;
}

export default function LoginForm({
  userid,
  loginError,
  btnActive,
  gameMapLoading,
  authLoading,
  handleChange,
  handleLogin,
}: LoginFormProps) {
  return (
    <LoginFormWrapper onSubmit={handleLogin} className="login-form" $isLoading={gameMapLoading}>
      <img
        className="sam-left"
        src={SAM_COMPLETION}
        alt="studyseed sam"
        style={{
          width: "80%",
          position: "absolute",
          right: "90%",
          bottom: "-30%",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <img
        className="sam-right"
        src={SAM_CONSTRUCTION}
        alt="studyseed sam"
        style={{
          width: "80%",
          position: "absolute",
          left: "90%",
          bottom: "-30%",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

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

      <LoginBtn type="submit" $btnActive={btnActive}>
        {authLoading ? <LoaderCircle color="#e5e5e5" className="login-spinner" /> : "I'M GAME!"}
        {loginError && <ErrorMsg>Invalid User ID</ErrorMsg>}
      </LoginBtn>
    </LoginFormWrapper>
  );
}
