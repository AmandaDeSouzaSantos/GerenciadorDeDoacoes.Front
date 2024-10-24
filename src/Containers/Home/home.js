import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { MdAlternateEmail } from "react-icons/md";
import { RiLock2Line } from "react-icons/ri";

const Home = () => {
    const [isOngForm, setIsOngForm] = useState(false);

    const toggleForm = (formType) => {
        setIsOngForm(formType === 'ong');
    };

    return (
        <div className="container-fluid">
            <div className="row vh-100 vw-100">
                <div className="coluna1 col-md-5 d-flex align-items-center text-white">
                    <div className="d-flex flex-column flex-start">
                        <h1 className="mb-4">BEM VINDO!</h1>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </div>
                </div>

                {/* Botões Doador/ONG */}
                <div className="botoes col-md-2 d-flex flex-column justify-content-center align-items-end m-0 p-0">
                    <button 
                        className={`btnDoOng mx-0 mb-2 ${!isOngForm ? 'btnAtivo' : ''}`} 
                        onClick={() => toggleForm('doador')}>
                        Doador
                    </button>
                    <button 
                        className={`btnDoOng mx-0 ${isOngForm ? 'btnAtivo' : ''}`} 
                        onClick={() => toggleForm('ong')}>
                        Minha ONG
                    </button>
                </div>

                {/* Formulários */}
                <div className="col-md-5 d-flex flex-column justify-content-center align-items-center p-3 bg-white">
                    <div className="text-center mb-4">
                        <img src="https://via.placeholder.com/80" alt="ONG Logo" className="logoImg mb-2" />
                        <h2>ONG Pipipi</h2>
                    </div>

                    {/* Formulário Doador */}
                    {!isOngForm && (
                        <form className="w-75 d-flex flex-column align-items-center">
                            <div className="w-75 mb-3 input-container d-flex align-items-center">
                                <label htmlFor="email" className="form-label"></label>
                                <div className="campoEntrada input-group">
                                    <span className="icone input-group-text"><MdAlternateEmail /></span>
                                    <input type="email" className="form-control" id="email" placeholder="Digite Seu Email" />
                                </div>
                            </div>
                            <div className="w-75 mb-3 input-container d-flex align-items-center">
                                <label htmlFor="senhaDoador" className="form-label"></label>
                                <div className="campoEntrada input-group">
                                    <span className="icone input-group-text"><RiLock2Line /></span>
                                    <input type="password" className="form-control" id="senhaDoador" placeholder="Digite Sua Senha" />
                                </div>
                            </div>
                            <Link to="#" className="enCa mb-3 mt-1">Esqueci a senha</Link>
                            <button type="submit" className="btnEntrar btn w-60">Entrar como Doador</button>
                            <p className="mt-3 text-center">Ou <Link to="#" className='enCa'>Cadastre-se</Link></p>
                        </form>
                    )}

                    {/* Formulário ONG */}
                    {isOngForm && (
                         <form className="w-75 d-flex flex-column align-items-center">
                         <div className="w-75 mb-3 input-container d-flex align-items-center">
                             <label htmlFor="cnpj" className="form-label"></label>
                             <div className="campoEntrada input-group">
                                 <span className="icone input-group-text"><MdAlternateEmail /></span>
                                 <input type="text" className="form-control" id="cnpj" placeholder="Digite Seu CNPJ" />
                             </div>
                         </div>
                         <div className="w-75 mb-3 input-container d-flex align-items-center">
                             <label htmlFor="senhaOng" className="form-label"></label>
                             <div className="campoEntrada input-group">
                                 <span className="icone input-group-text"><RiLock2Line /></span>
                                 <input type="password" className="form-control" id="senhaOng" placeholder="Digite Sua Senha" />
                             </div>
                         </div>
                         <Link to="#" className=" enCa mb-3 mt-1">Esqueci a senha</Link>
                         <button type="submit" className="btnEntrar btn w-60">Entrar como ONG</button>
                         <p className="mt-3 text-center">Ou <Link to="#" className='enCa'>Cadastre-se</Link></p>
                     </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
