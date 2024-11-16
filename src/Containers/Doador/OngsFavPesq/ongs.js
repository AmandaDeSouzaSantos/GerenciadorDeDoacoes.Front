import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Carousel, InputGroup } from 'react-bootstrap';
import { FaStar, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import NavDoador from '../../../Components/Doador/Nav/navDoador';
import './ongs.css';

function FavoritasEPesquisa() {
  const navegar = useNavigate();
  const [listaOngs, setListaOngs] = useState([]);
  const [resultadosPesquisa, setResultadosPesquisa] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const realizarPesquisa = (e) => {
    const termo = e.target.value;
    setTermoPesquisa(termo);
    if (termo === "") {
      setResultadosPesquisa(listaOngs);
    } else {
      setResultadosPesquisa(listaOngs.filter(ong => ong.nome.toLowerCase().includes(termo.toLowerCase())));
    }
  };

  const alternarFavorito = (id) => {
    setListaOngs(listaOngs.map(ong =>
      ong.id === id ? { ...ong, favorita: !ong.favorita } : ong
    ));
    setResultadosPesquisa(resultadosPesquisa.map(ong =>
      ong.id === id ? { ...ong, favorita: !ong.favorita } : ong
    ));
  };

  const acessarPerfilOng = (id) => {
    navegar(`/ong-perfil-doador/${id}`);
  };

  const ongsFavoritas = listaOngs.filter(ong => ong.favorita);
  const gruposFavoritas = [];
  for (let i = 0; i < ongsFavoritas.length; i += 3) {
    gruposFavoritas.push(ongsFavoritas.slice(i, i + 3));
  }

  return (
    <>
      <header>
        <NavDoador />
      </header>
   
      <Container className='col-md-9'>
        <Row>
     
          <Card className='cardt p-4 mb-4 '>
            <h4 className="tituloCad">ONGs Favoritas</h4>
            <Card.Body className='p-0'>
              <Carousel
                indicators={false}
                interval={2000}
                pause="hover"
                controls={true}
                wrap={true}
              >
                {gruposFavoritas.map((grupo, index) => (
                  <Carousel.Item key={index}>
                    <div className="d-flex justify-content-center">
                      {grupo.map((ong) => (
                        <Card key={ong.id} className="favorite-ong-card mx-2" onClick={() => acessarPerfilOng(ong.id)}>
                          <Card.Img
                            variant="top"
                            src={ong.imagem || "https://www.blogueirosdasaude.org.br/wp-content/uploads/2017/12/simbolo.jpg"}
                            alt={`Imagem da ${ong.nome}`}
                          />
                          <Card.Body>
                            <Card.Title>{ong.nome}</Card.Title>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          </Card>

       
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
                    value={termoPesquisa}
                    onChange={realizarPesquisa}
                    className="botaoVisualizar"
                  />
                </InputGroup>
              </Col>
            </Row>

            <Row>
              {resultadosPesquisa.map(ong => (
                <Col md={6} className="mt-3" key={ong.id}>
                  <Card className='donatario' onClick={() => acessarPerfilOng(ong.id)}>
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
                            onClick={(e) => { e.stopPropagation(); alternarFavorito(ong.id); }}
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
