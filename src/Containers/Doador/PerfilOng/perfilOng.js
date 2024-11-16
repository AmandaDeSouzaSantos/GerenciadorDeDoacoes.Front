import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import NavDoador from '../../../Components/Doador/Nav/navDoador';

function PerfilOng() {
  const [ong, setOng] = useState(null);
  const navigate = useNavigate();

  const handleDoacaoClick = () => {
    navigate(`/doacao`);
  };

  return (
    <>
      <header>
        <NavDoador />
      </header>
      <Container className='col-md-9'>
        <Card className='cardt p-4 mb-4'>
          <h4 className="tituloCad">Perfil ONG</h4>
          <Row>
            <Col md={5}>
              <Card.Img
                src={ong?.imagem }
                alt={`Imagem da ${ong?.nome || 'ONG'}`}
                className="perfil-ong-imagem"
              />
            </Col>
            <Col md={7}>
              <h3><strong>{ong?.nome || 'Nome da ONG'}</strong></h3>
              <h4><strong>CNPJ:</strong> {ong?.cnpj || 'Não disponível'}</h4>
              <h4><strong>Endereço:</strong> {ong?.endereco || 'Não disponível'}</h4>
              <h4><strong>CEP:</strong> {ong?.cep || 'Não disponível'}</h4>
              <h4><strong>Telefone:</strong> {ong?.telefone || 'Não disponível'}</h4>
              <h4><strong>Email:</strong> {ong?.email || 'Não disponível'}</h4>
              <a href={ong?.instagram} target="_blank" rel="noopener noreferrer" className="me-3">
                <FaInstagram size={35} color="#E1306C" />
              </a>
              <a href={ong?.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={35} color="#3b5998" />
              </a>
              <h4>
                <strong>Site:</strong>{' '}
                <a href={`https://${ong?.site}`} target="_blank" rel="noopener noreferrer">
                  {ong?.site || 'Não disponível'}
                </a>
              </h4>
              <Button
                className='cadBotao mt-2'
                onClick={handleDoacaoClick}
              >
                Fazer Doação
              </Button>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default PerfilOng;
