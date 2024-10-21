import "./home.css";
import React, { useState } from 'react';
import Nav from '../../Components/NavHomeSobre/nav'; 
import { Link } from "react-router-dom";

const Home = () => {
  const [isHoverDoador, setIsHoverDoador] = useState(false);
  const [isHoverOng, setIsHoverOng] = useState(false);

  return (
    <div>
      <Nav />
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div 
              className={`card card-doador text-center ${isHoverDoador ? 'hover' : ''}`}
            
            >
              <div className="card-body">
                <div className="card-conteudo">
                  <h5 className="card-title">Gostaria de doar?</h5>
                  <Link 
                    to="/login-doador" 
                    className="btn btn-login mb-1"
                    onMouseEnter={() => setIsHoverDoador(true)}
                    onMouseLeave={() => setIsHoverDoador(false)}
                  >
                    Login
                  </Link>
                  <p className="cadastre-se">
                    <a href="/cadastro-doador" 
                    onMouseEnter={() => setIsHoverDoador(true)}
                    onMouseLeave={() => setIsHoverDoador(false)}>Cadastre-se</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div 
              className={`card card-ong text-center ${isHoverOng ? 'hover' : ''}`}
            >
              <div className="card-body">
                <div className="card-conteudo">
                  <h5 className="card-title">ONGs</h5>
                  <Link 
                    to="/login-ong" 
                    className="btn btn-login mb-1"
                    onMouseEnter={() => setIsHoverOng(true)}
                    onMouseLeave={() => setIsHoverOng(false)}
                  >
                    Login
                  </Link>
                  <p className="cadastre-se">
                    <a href="/cadastro-ong"  
                    onMouseEnter={() => setIsHoverOng(true)}
                    onMouseLeave={() => setIsHoverOng(false)}>Cadastre-se</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;