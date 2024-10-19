import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import "./App.css";

import MapContainer from "./Page/MapContainer";
import TesterMap from "./Page/TesterMap";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/game-map" element={<MapContainer />} />
      <Route path="/test-map" element={<TesterMap />} />
    </Routes>
  );
};

export default App;
