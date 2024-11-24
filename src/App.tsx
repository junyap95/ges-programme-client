import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import "./App.css";
import { AuthProvider } from "./Context/AuthContext";
import MapContainer from "./Page/Home";
import "react-loading-skeleton/dist/skeleton.css";
import MobileDeviceError from "./Page/MobileDeviceError";
import { useMediaQuery } from "./hooks/useMedia";

const App: React.FC = () => {
  const isLandscape = useMediaQuery("(orientation: landscape)");
  const isMobile = useMediaQuery(
    isLandscape
      ? "(max-width: 767px) or (max-height: 460px)"
      : "(max-width: 460px) or (max-height: 767px)"
  );

  if (isMobile) return <MobileDeviceError />;

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
