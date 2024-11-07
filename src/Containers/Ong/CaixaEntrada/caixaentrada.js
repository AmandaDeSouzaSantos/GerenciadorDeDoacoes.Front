import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import NavOng from '../../../Components/Ong/Nav/navOng';
import './caixaentrada.css';

function CaixaEntrada() {
    const [mensagens, setMensagens] = useState([]);
    const [mensagemSelecionada, setMensagemSelecionada] = useState(null);

    useEffect(() => {
        const mensagensExemplo = [
            { nomeDoador: "Maria Silva", assunto: "Doação de Roupas", texto: "Gostaria de doar algumas roupas de inverno.", data: "2024-11-01" },
            { nomeDoador: "João Souza", assunto: "Alimentos para Doação", texto: "Tenho alimentos não perecíveis disponíveis.", data: "2024-11-02" },
            { nomeDoador: "Ana Lima", assunto: "Doação de Brinquedos", texto: "Posso doar alguns brinquedos usados.", data: "2024-11-03" },
            { nomeDoador: "Carlos Oliveira", assunto: "Doação em Dinheiro", texto: "Gostaria de contribuir financeiramente.", data: "2024-11-04" },
            { nomeDoador: "Beatriz Rocha", assunto: "Doação de Móveis", texto: "Tenho móveis em bom estado para doar.", data: "2024-11-05" },
            { nomeDoador: "Ricardo Santos", assunto: "Ajuda com Voluntariado", texto: "Posso ajudar como voluntário em eventos.", data: "2024-11-06" },
            { nomeDoador: "Juliana Costa", assunto: "Doação de Produtos de Higiene", texto: "Gostaria de doar produtos de higiene.", data: "2024-11-07" },
            { nomeDoador: "Fernando Martins", assunto: "Doação de Livros", texto: "Tenho vários livros educativos para doar.", data: "2024-11-08" },
        ];
        
        setMensagens(mensagensExemplo);
        setMensagemSelecionada(mensagensExemplo[0]);
    }, []);

    const handleSelectMensagem = (mensagem) => {
        setMensagemSelecionada(mensagem);
    };

    return (
        <>
            <header>
                <NavOng />
            </header>
            <Container className="justify-content-center col-md-7 caixa-ent p-0 b-0">
                <Row className="justify-content-center">
                    <Col className="p-2">
                        <Card style={{ borderRadius: '15px', overflow: 'hidden' }}>
                            <Card.Body className="p-0">
                                <Row className="m-0">
                                    {/* Coluna de Mensagens com Rolagem */}
                                    <Col md={4} className="p-0" style={{ maxHeight: '445px', overflowY: 'auto',  scrollbarColor: '#81BCDE #2C749E' }}>
                                        <h5 className="p-3 m-0 mensagem">Mensagens</h5>
                                        <ListGroup variant="flush">
                                            {mensagens.map((mensagem, index) => (
                                                <ListGroup.Item
                                                    key={index}
                                                    action
                                                    onClick={() => handleSelectMensagem(mensagem)}
                                                    active={mensagemSelecionada === mensagem}
                                                    style={{
                                                        backgroundColor: mensagemSelecionada === mensagem ? '#81BCDE' : '#FFFF',
                                                        color: mensagemSelecionada === mensagem ? '#EC2A2A' : '#black',
                                                        cursor: 'pointer',
                                                        padding: '10px'
                                                    }}
                                                    className="text-truncate"
                                                >
                                                    {mensagem.nomeDoador}
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Col>

                                    {/* Coluna de Detalhes da Mensagem */}
                                    <Col md={8} className="p-0 colme" >
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
                                                        <FaTimesCircle />
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-center text-muted mt-4">Selecione uma mensagem para visualizar os detalhes</p>
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
