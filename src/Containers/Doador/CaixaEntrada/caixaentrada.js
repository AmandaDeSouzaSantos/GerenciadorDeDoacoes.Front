import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Card, Badge, Button } from 'react-bootstrap';
import { PiTrashBold } from "react-icons/pi";
import NavDoador from '../../../Components/Doador/Nav/navDoador';

function CaixaEntradaDoador() {
  const [listaDoacoes, setListaDoacoes] = useState([]);
  const [doacaoSelecionada, setDoacaoSelecionada] = useState(null);

  useEffect(() => {
  
    setListaDoacoes([]);
    setDoacaoSelecionada(null);
  }, []);

  const selecionarDoacao = (doacao) => {
    setDoacaoSelecionada(doacao);
  };

  const corPorStatus = (status) => {
    switch (status) {
      case "aceita":
        return "#D4EDDA";
      case "pendente":
        return "#FFF3CD";
      case "recusada":
        return "#F8D7DA";
      default:
        return "#FFFFFF";
    }
  };

  const mensagemPorStatus = (status) => {
    switch (status) {
      case "aceita":
        return "Parabéns! Sua doação foi aceita. Entre em contato com a ONG para combinar a entrega.";
      case "pendente":
        return "Sua doação está pendente. Por favor, aguarde a resposta da ONG.";
      case "recusada":
        return "Infelizmente, sua doação foi recusada. Considere tentar com outra ONG ou modificar a proposta.";
      default:
        return "Selecione uma doação para ver mais detalhes.";
    }
  };

  const removerDoacao = (doacao) => {
    setListaDoacoes(listaDoacoes.filter(d => d !== doacao));
    setDoacaoSelecionada(null);
  };

  return (
    <>
      <header>
        <NavDoador />
      </header>

      <Container className="justify-content-center col-md-9 contaiTa caixa-ent p-0">
        <Row className="justify-content-center">
          <Col>
            <Card className='conteudoCaixa'>
              <Card.Body className="p-0 cardCaixa">
                <Row className="m-0">
                  <Col md={4} className="pessoasMensagem">
                    <h5 className="m-0 mensagem">Doações</h5>
                    <ListGroup variant="flush">
                      {listaDoacoes.map((doacao, index) => (
                        <ListGroup.Item
                          key={index}
                          action
                          onClick={() => selecionarDoacao(doacao)}
                          active={doacaoSelecionada === doacao}
                          style={{
                            backgroundColor: doacaoSelecionada === doacao ? '#81BCDE' : corPorStatus(doacao.status),
                            cursor: 'pointer',
                            padding: '7px 7px 7px 25px'
                          }}
                          className="text-truncate"
                        >
                          {doacao.nomeOng}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>

                  <Col md={8} className="p-0 p-3 colme" style={{ backgroundColor: doacaoSelecionada ? corPorStatus(doacaoSelecionada.status) : "#FFFFFF" }}>
                    {doacaoSelecionada ? (
                      <div className="p-3">
                        <h5 className="text-center">{doacaoSelecionada.assunto}</h5>
                        <p className="text-center mt-4">{doacaoSelecionada.texto}</p>
                        <p className="text-muted text-end">{doacaoSelecionada.data}</p>
                        <div className="d-flex justify-content-center mt-3">
                          <Badge bg={doacaoSelecionada.status === "aceita" ? "success" : doacaoSelecionada.status === "pendente" ? "warning" : "danger"}>
                            {doacaoSelecionada.status.charAt(0).toUpperCase() + doacaoSelecionada.status.slice(1)}
                          </Badge>
                        </div>
                        
                        <p className="mt-3 text-center">{mensagemPorStatus(doacaoSelecionada.status)}</p>

                        <div className="d-flex justify-content-end mt-4">
                          <Button variant="link" className="d-flex align-items-center p-0" onClick={() => removerDoacao(doacaoSelecionada)}>
                            <PiTrashBold size={25} color="#34495e" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-center text-muted mt-4">Selecione uma doação para visualizar os detalhes</p>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CaixaEntradaDoador;
