import {
  ErrorMsg,
  FillInputs,
  LoginBtn,
  LoginFormWrapper,
} from "../StyledComponents/styledComponents";
import { LoaderCircle } from "lucide-react";

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
    <LoginFormWrapper className="login-form" $isLoading={gameMapLoading}>
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

        <LoginBtn type="submit" $btnActive={btnActive}>
          {authLoading ? <LoaderCircle color="#e5e5e5" className="login-spinner" /> : "I'M GAME!"}
          {loginError && <ErrorMsg>Invalid User ID</ErrorMsg>}
        </LoginBtn>
      </form>
    </LoginFormWrapper>
  );
}
