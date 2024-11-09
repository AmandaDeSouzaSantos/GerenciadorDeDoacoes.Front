import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from '../Containers/Principal/principal';
import CadDoador from '../Containers/Doador/Cadastro/cadDoador';
import CadOng from '../Containers/Ong/Cadastro/cadOng';
import RecSenhaOng from '../Containers/Ong/RecuperarSenha/recSenhaOng';
import RecSenhaDoador from '../Containers/Doador/RecuperarSenha/recSenhaDoador';
import OngPerfil from '../Containers/Ong/Perfil/ongPerfil';
import CaixaEntradaOng from '../Containers/Ong/CaixaEntrada/caixaentrada';
import OngDonatario from '../Containers/Ong/Donatario/donatario';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/cadastro-doador" element={<CadDoador />} />
        <Route path="/cadastro-ong" element={<CadOng />} />
        <Route path="/recuperar-ong-senha" element={<RecSenhaOng />} />
        <Route path="/recuperar-doador-senha" element={<RecSenhaDoador />} />
        <Route path="/ong-perfil" element={<OngPerfil />} />
        <Route path="/caixa-entrada-ong" element={<CaixaEntradaOng />} />
        <Route path="/ong-donatario" element={<OngDonatario />} />
      </Routes>
    </Router>
  );
}

export default App;
