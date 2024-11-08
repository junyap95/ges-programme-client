import { useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { login } from "../utils/helperFunctions";

export const useLoginForm = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [userid, setUserId] = useState("");
  const [btnActive, setBtnActive] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [gameMapLoading, setGameMapLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginError(false);
    setGameMapLoading(false);
    if (e.target.value.length >= 5) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
    setUserId(e.target.value.toUpperCase());
  }, []);

  const handleLogin = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoginError(false);
      if (userid) {
        setAuthLoading(true);
        const loginRes = await login(userid);
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (loginRes.operation) {
          setGameMapLoading(true);
          setLoginError(false);
          context?.signInContext(userid);
          navigate("/game-map");
        } else {
          setLoginError(true);
          setGameMapLoading(false);
          setAuthLoading(false);
        }
      }
    },
    [userid, context, navigate]
  );

  return {
    userid,
    loginError,
    btnActive,
    gameMapLoading,
    authLoading,
    handleChange,
    handleLogin,
  };
};
