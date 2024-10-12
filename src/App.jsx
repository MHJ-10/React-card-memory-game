import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import EasyLevel from "./components/easyLevel";
import HardLevel from "./components/hardLevel";
import LevelsMenu from "./components/levelsMenu";
import NormalLevel from "./components/normalLevel";
import NotFound from "./components/not-found";

function App() {
  return (
    <Routes>
      <Route index={true} element={<LevelsMenu />} />
      <Route path="/easy" element={<EasyLevel />} />
      <Route path="/normal" element={<NormalLevel />} />
      <Route path="/hard" element={<HardLevel />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
}

export default App;
