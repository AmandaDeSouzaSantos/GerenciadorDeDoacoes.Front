import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import NavDoador from '../../../Components/Doador/Nav/navDoador';

function PerfilOng() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ong, setOng] = useState(null);

  useEffect(() => {
    // Função simulada para buscar ONG com base no ID
    const fetchOngById = async (id) => {
      const ongs = [
        { id: 1, nome: "ONG Esperança", endereco: "Rua da Paz, 123", cep: "12345-678", favorita: true, imagem: "https://via.placeholder.com/150", cnpj: "12.345.678/0001-90", instagram: "@ongesperanca", facebook: "fb.com/ongesperanca", site: "www.ongesperanca.com" },
        { id: 2, nome: "Amigos do Bem", endereco: "Av. Solidariedade, 456", cep: "87654-321", favorita: true, imagem: "https://via.placeholder.com/150", cnpj: "23.456.789/0001-00", instagram: "@amigosdobem", facebook: "fb.com/amigosdobem", site: "www.amigosdobem.org" },
      ];
      const ong = ongs.find((ong) => ong.id === parseInt(id));
      setOng(ong);
    };

    fetchOngById(id);
  }, [id]);

  if (!ong) {
    return <p>ONG não disponível</p>;
  }

  const handleDoacaoClick = () => {
    navigate(`/doacao/${id}`);
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
                src={ong.imagem || "https://www.blogueirosdasaude.org.br/wp-content/uploads/2017/12/simbolo.jpg"} 
                alt={`Imagem da ${ong.nome}`}
                className="perfil-ong-imagem" 
              />
            </Col>
            <Col md={7}>
              <h3><strong>{ong.nome}</strong></h3>
              <h4><strong>CNPJ:</strong> {ong.cnpj || 'Não disponível'}</h4>
              <h4><strong>Endereço:</strong> {ong.endereco}</h4>
              <h4><strong>CEP:</strong> {ong.cep}</h4>
              <h4><strong>Telefone:</strong> {ong.telefone}</h4>
              <h4><strong>Email:</strong> {ong.email}</h4>
              <a href={ong.instagram} target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaInstagram size={35} color="#E1306C" />
              </a>
              <a href={ong.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={35} color="#3b5998" />
              </a>
              <h4><strong>Site:</strong> <a href={`https://${ong.site}`} target="_blank" rel="noopener noreferrer">{ong.site}</a></h4>
              
              {/* Botão de Doação */}
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
