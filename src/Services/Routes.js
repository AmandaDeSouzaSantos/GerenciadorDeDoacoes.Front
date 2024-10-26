import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from '../Containers/Principal/principal';
import Sobre from '../Containers/Sobre/sobre';
import DoadorLogin from '../Containers/Authentication/Doador/doador';
import OngLogin from '../Containers/Authentication/Ong/ong';
import CadDoador from '../Containers/Cadastros/Doador/cadDoador';
import CadOng from '../Containers/Cadastros/Ong/cadOng';
import RecSenhaOng from '../Containers/OngSenha/RecuperarSenha/recSenhaOng';
import RecSenhaDoador from '../Containers/DoadorSenha/RecuperarSenha/recSenhaDoador';
import OngPerfil from '../Components/Ong/Perfil/ongPerfil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login-doador" element={<DoadorLogin />} />
        <Route path="/login-ong" element={<OngLogin />} />
        <Route path="/cadastro-doador" element={<CadDoador />} />
        <Route path="/cadastro-ong" element={<CadOng />} />
        <Route path="/recuperar-ong-senha" element={<RecSenhaOng />} />
        <Route path="/recuperar-doador-senha" element={<RecSenhaDoador />} />
        <Route path="/ong-perfil" element={<OngPerfil />} />
      </Routes>
    </Router>
  );
}

export default App;
