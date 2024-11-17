import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { login } from "../utils/network-functions";

export const useDelay = () => {
  const [elementLoading, setElementLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setElementLoading(false), 1000);
  }, []);

  return { elementLoading };
};
