import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Carousel,InputGroup } from 'react-bootstrap';
import { FaStar,FaSearch  } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavDoador from '../../../Components/Doador/Nav/navDoador';
import './ongs.css';

function FavoritasEPesquisa() {
  const navigate = useNavigate();
  const [ongs, setOngs] = useState([
    { id: 1, nome: "ONG Esperança", endereco: "Rua da Paz, 123", cep: "12345-678", favorita: true, imagem: "https://via.placeholder.com/150", cnpj: "12.345.678/0001-90", instagram: "@ongesperanca", facebook: "fb.com/ongesperanca", site: "www.ongesperanca.com" },
    { id: 2, nome: "Amigos do Bem", endereco: "Av. Solidariedade, 456", cep: "87654-321", favorita: true, imagem: "https://via.placeholder.com/150", cnpj: "23.456.789/0001-00", instagram: "@amigosdobem", facebook: "fb.com/amigosdobem", site: "www.amigosdobem.org" },
  ]);
  const [searchResults, setSearchResults] = useState(ongs);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term === "") {
      setSearchResults(ongs);
    } else {
      setSearchResults(ongs.filter(ong => ong.nome.toLowerCase().includes(term.toLowerCase())));
    }
  };

  const handleFavoritar = (id) => {
    setOngs(ongs.map(ong =>
      ong.id === id ? { ...ong, favorita: !ong.favorita } : ong
    ));
    setSearchResults(searchResults.map(ong =>
      ong.id === id ? { ...ong, favorita: !ong.favorita } : ong
    ));
  };

  const handleClickOng = (id) => {
    navigate(`/ong-perfil-doador/${id}`);
  };

  const favoriteOngs = ongs.filter(ong => ong.favorita);
  const groupedFavorites = [];
  for (let i = 0; i < favoriteOngs.length; i += 3) {
    groupedFavorites.push(favoriteOngs.slice(i, i + 3));
  }

  return (
    <>
      <header>
        <NavDoador />
      </header>
   
      <Container className='col-md-9'>
        <Row>
          {/* Seção de ONGs Favoritas */}
          <Card className='cardt p-4 mb-4 '>
            <h4 className="tituloCad">Ongs Favoritas</h4>
            <Card.Body className='p-0'>
              <Carousel
                indicators={false}
                interval={2000}
                pause="hover"
                controls={true}
                wrap={true}
              >
                {groupedFavorites.map((group, index) => (
                  <Carousel.Item  key={index}>
                    <div className="d-flex justify-content-center">
                      {group.map((ong) => (
                        <Card key={ong.id} className="favorite-ong-card mx-2" onClick={() => handleClickOng(ong.id)}>
                          <Card.Img
                            variant="top"
                            src={ong.imagem || "https://www.blogueirosdasaude.org.br/wp-content/uploads/2017/12/simbolo.jpg"}
                            alt={`Imagem da ${ong.nome}`}
                          />
                          <Card.Body>
                            <Card.Title >{ong.nome}</Card.Title>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          </Card>

          {/* Seção de Pesquisa */}
          <Card className='cardt1 p-4'>
            <Row>
              <Col md={6}>
                <h3 className="tituloCad">Pesquisar</h3>
              </Col>
              <Col md={6}>
                <InputGroup className="pesquisaDonatario">
                  <InputGroup.Text className="botaoVisualizar">
                    <FaSearch />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Pesquise a ONG que você procura"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="botaoVisualizar"
                  />
                </InputGroup>
              </Col>
            </Row>

            <Row>
              {searchResults.map(ong => (
                <Col md={6} className="mt-3" key={ong.id}>
                  <Card className='donatario' onClick={() => handleClickOng(ong.id)}>
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col md={4} className="m-0">
                          <Card.Img 
                            src={ong.imagem || "https://www.blogueirosdasaude.org.br/wp-content/uploads/2017/12/simbolo.jpg"} 
                            alt={`Imagem da ${ong.nome}`} 
                            className="w-100" 
                          />
                        </Col>
                        <Col md={7}>
                          <h5>{ong.nome}</h5>
                          <p>{ong.endereco}</p>
                          <p>CEP: {ong.cep}</p>
                        </Col>
                        <Col md={1} className="d-flex justify-content-end">
                          <Button 
                            variant="link" 
                            onClick={(e) => { e.stopPropagation(); handleFavoritar(ong.id); }}
                            className="p-0"
                          >
                            <FaStar size={25} color={ong.favorita ? "gold" : "grey"} />
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

          </Card>
        </Row>
      </Container>
    </>
  );
}

export default FavoritasEPesquisa;
