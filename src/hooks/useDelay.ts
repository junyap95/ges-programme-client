import { useState, useEffect } from "react";

export const useDelay = () => {
  const [elementLoading, setElementLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setElementLoading(false), 1000);
  }, []);

  return { elementLoading };
};
