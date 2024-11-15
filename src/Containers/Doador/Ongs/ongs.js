import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Carousel } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './ongs.css';

function FavoritasEPesquisa() {
  const [ongs, setOngs] = useState([
    { id: 1, nome: "ONG Esperança", endereco: "Rua da Paz, 123", cep: "12345-678", favorita: true },
    { id: 2, nome: "Amigos do Bem", endereco: "Av. Solidariedade, 456", cep: "87654-321", favorita: true },
    { id: 3, nome: "Ajuda Viva", endereco: "Rua Alegria, 789", cep: "11223-445", favorita: true },
    { id: 4, nome: "Nova Vida", endereco: "Travessa Luz, 321", cep: "98765-432", favorita: true },
    { id: 5, nome: "Amor Animal", endereco: "Rua Esperança, 555", cep: "10101-202", favorita: true }
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

  return (
    <Container className='col-md-9'>
      <Row>
        {/* Seção de ONGs Favoritas */}
      
          <Card className='cardt p-4 mb-4'>
            <h4 className="tituloCad">Ongs Favoritas</h4>
            <Card.Body>
              <Carousel
                indicators={false}
                interval={3000}    // Define o intervalo para a transição automática (3000 ms = 3 segundos)
                controls={true}    // Adiciona controles para navegação manual
                wrap={true}        // Faz o carrossel retornar ao primeiro item após o último
                className="favorite-carousel"
              >
                <Carousel.Item>
                  <div className="d-flex">
                    {ongs.filter(ong => ong.favorita).map((ong) => (
                      <Card key={ong.id} className="favorite-ong-card mx-2">
                        <Card.Img
                          variant="top"
                          src="https://www.blogueirosdasaude.org.br/wp-content/uploads/2017/12/simbolo.jpg"
                          alt="Imagem da ONG"
                          className="favorite-ong-image"
                        />
                        <Card.Body>
                          <Card.Title className="favorite-ong-title">{ong.nome}</Card.Title>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        

        {/* Seção de Pesquisa */}
      
          <Card className='cardt1 p-4 '>
              <Row>
                <Col md={6}>
                  <h3 className="tituloCad">Pesquisar</h3>
                </Col>
                <Col md={6}>
                  <Form.Control className='pesquisaDonatario'
                  type="text"
                  placeholder="Pesquise a ONG que você procura"
                  value={searchTerm}
                  onChange={handleSearch}
                  />
                </Col>
              </Row>
          
            <Row>
              {searchResults.map(ong => (
                <Col md={6} className="mt-3" key={ong.id}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <Card.Img src="https://www.blogueirosdasaude.org.br/wp-content/uploads/2017/12/simbolo.jpg" alt="Imagem da ONG" className="w-100" />
                        </Col>
                        <Col md={8}>
                          <h5>{ong.nome}</h5>
                          <p>{ong.endereco}</p>
                          <p>CEP: {ong.cep}</p>
                          <Button variant="link" onClick={() => handleFavoritar(ong.id)}>
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
  );
}

export default FavoritasEPesquisa;
