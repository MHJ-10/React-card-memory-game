import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LevelsMenu from './components/levelsMenu';
import EasyLevel from './components/easyLevel';
import NormalLevel from './components/normalLevel';
import HardLevel from './components/hardLevel';
import NotFound from './components/not-found';


function App() {

  return (
   <div>
    <Routes>
      <Route path='/' element={<LevelsMenu/>} />
      <Route path='/easy' element={<EasyLevel/>} />
      <Route path='/normal' element={<NormalLevel/>} />
      <Route path='/hard' element={<HardLevel/>} />
      <Route path="/not-found" element={<NotFound/>} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
   </div>
  )
}

export default App;
