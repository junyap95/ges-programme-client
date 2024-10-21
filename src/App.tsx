import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import "./App.css";
import { AuthProvider } from "./Context/AuthContext";
import MapContainer from "./Page/MapContainer";
import TesterMap from "./Page/TesterMap";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/game-map" element={<MapContainer />} />
        <Route path="/test-map" element={<TesterMap />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
