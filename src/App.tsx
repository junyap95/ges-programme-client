import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import "./App.css";
import { AuthProvider } from "./Context/AuthContext";
import MapContainer from "./Page/Home";
import "react-loading-skeleton/dist/skeleton.css";
import MobileDeviceError from "./Page/MobileDeviceError";

const App: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 700px) or (max-height: 520px)");
  if (isMobile) {
    return <MobileDeviceError />;
  }

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/game-map" element={<MapContainer />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    setMatches(matchQueryList.matches);
    function handleChange(e: any) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
