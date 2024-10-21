import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Containers/Home/home';
import Sobre from '../Containers/Sobre/sobre';
import DoadorLogin from '../Containers/Authentication/Doador/doador';
import OngLogin from '../Containers/Authentication/Ong/ong';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login-doador" element={<DoadorLogin />} />
        <Route path="/login-ong" element={<OngLogin/>} />
      </Routes>
    </Router>
  );
}

export default App;