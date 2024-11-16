import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import NavOng from '../../../Components/Ong/Nav/navOng';
import './caixaentrada.css';

function CaixaEntrada() {
    const [mensagens, setMensagens] = useState([]); // Controle de mensagens
    const [mensagemSelecionada, setMensagemSelecionada] = useState(null); // Mensagem selecionada

    // Função para selecionar uma mensagem
    const selecionarMensagem = (mensagem) => {
        setMensagemSelecionada(mensagem);
    };

    return (
        <>
            <header>
                <NavOng />
            </header>
            <Container className="justify-content-center col-md-9 contaiTa caixa-ent p-0">
                <Row className="justify-content-center">
                    <Col>
                        <Card className="conteudoCaixa">
                            <Card.Body className="p-0 cardCaixa">
                                <Row className="m-0">
                             
                                    <Col md={4} className="pessoasMensagem">
                                        <h5 className="m-0 mensagem">Mensagens</h5>
                                        <ListGroup className="align-text" variant="flush">
                                            {mensagens.map((mensagem, index) => (
                                                <ListGroup.Item
                                                    key={index}
                                                    action
                                                    onClick={() => selecionarMensagem(mensagem)}
                                                    active={mensagemSelecionada === mensagem}
                                                    style={{
                                                        backgroundColor: mensagemSelecionada === mensagem ? '#81BCDE' : '#FFFFFF',
                                                        color: mensagemSelecionada === mensagem ? '#EC2A2A' : '#000000',
                                                        cursor: 'pointer',
                                                        padding: '7px 7px 7px 25px',
                                                    }}
                                                    className="text-truncate"
                                                >
                                                    {mensagem.nomeDoador}
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Col>

                                    <Col md={8} className="p-0 colme">
                                        {mensagemSelecionada ? (
                                            <div className="p-3">
                                                <h5 className="text-center text-dark">{mensagemSelecionada.assunto}</h5>
                                                <p className="text-center text-dark mt-4">{mensagemSelecionada.texto}</p>
                                                <p className="text-muted text-end">{mensagemSelecionada.data}</p>
                                                <div className="d-flex justify-content-center mt-3">
                                                    <Button variant="success" className="me-2">
                                                        Aceitar <FaCheckCircle />
                                                    </Button>
                                                    <Button variant="danger">
                                                        Recusar <FaTimesCircle />
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-center text-muted mt-4">
                                                Selecione uma mensagem para visualizar os detalhes
                                            </p>
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

export default CaixaEntrada;
