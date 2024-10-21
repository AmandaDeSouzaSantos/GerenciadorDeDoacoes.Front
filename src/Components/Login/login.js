import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './login.css';
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="text-center">
          <img src="/logo-removebg-preview (1).png" alt="Logo" className="login-logo" />
        </div>
        <h3 className="text-center">FAÇA LOGIN</h3>
        
        <div className="input-group mb-3">
          <span className="input-group-text">
            <AiOutlineUser />
          </span>
          <input
            type="email"
            className="form-control"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <AiOutlineLock />
          </span>
          <input
            type={mostrarSenha ? 'text' : 'password'}
            className="form-control"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <span className="input-group-text" onClick={toggleMostrarSenha} style={{ cursor: 'pointer' }}>
            {mostrarSenha ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
          <button type="submit" className="btn mb-3 btn-entrar ">Entrar</button>
          <Link to="/" className="btn btn-voltar">Voltar</Link>
      </form>
    </div>
  );
};

export default Login;