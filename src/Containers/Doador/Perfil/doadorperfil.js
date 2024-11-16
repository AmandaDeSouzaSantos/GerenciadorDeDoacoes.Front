import React, { useState } from 'react';
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaPhone } from 'react-icons/fa';
import { TbDoorExit } from "react-icons/tb";
import NavDoador from '../../../Components/Doador/Nav/navDoador';

function PerfilDoador() {
    const [editando, setEditando] = useState(false);

    const [dadosDoador, setDadosDoador] = useState({
        nome: "",
        cpf: "",
        endereco: "",
        cep: "",
        email: "",
        telefone: "",
    });

    const alternarEdicao = () => setEditando(!editando);

    const alterarEntrada = (e, campo) => {
        setDadosDoador({ ...dadosDoador, [campo]: e.target.value });
    };

    return (
        <>
            <header>
                <NavDoador />
            </header>
            <div className="container col-md-9">
                <Card className='cardt'>
                    <Card.Body>
                        <Row>
                            <Col className="col-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    {editando ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={dadosDoador.nome}
                                            onChange={(e) => alterarEntrada(e, 'nome')}
                                            placeholder="Digite seu nome"
                                        />
                                    ) : (
                                        <Card.Title className="doador-nome">{dadosDoador.nome }</Card.Title>
                                    )}
                                    <Button variant="link" onClick={alternarEdicao}>
                                        <FaEdit size={20} color="#34495e" />
                                    </Button>
                                </div>

                                <ListGroup variant="flush" className="mt-2">
                                    <ListGroup.Item>
                                        <strong>CPF:</strong> {editando ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={dadosDoador.cpf}
                                                onChange={(e) => alterarEntrada(e, 'cpf')}
                                                placeholder="Digite seu CPF"
                                            />
                                        ) : (
                                            dadosDoador.cpf
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Endereço:</strong> {editando ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={dadosDoador.endereco}
                                                onChange={(e) => alterarEntrada(e, 'endereco')}
                                                placeholder="Digite seu endereço"
                                            />
                                        ) : (
                                            dadosDoador.endereco 
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>CEP:</strong> {editando ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={dadosDoador.cep}
                                                onChange={(e) => alterarEntrada(e, 'cep')}
                                                placeholder="Digite seu CEP"
                                            />
                                        ) : (
                                            dadosDoador.cep 
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Email:</strong> {editando ? (
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={dadosDoador.email}
                                                onChange={(e) => alterarEntrada(e, 'email')}
                                                placeholder="Digite seu e-mail"
                                            />
                                        ) : (
                                            <a href={`mailto:${dadosDoador.email}`}>{dadosDoador.email}</a>
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Telefone:</strong> {editando ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={dadosDoador.telefone}
                                                onChange={(e) => alterarEntrada(e, 'telefone')}
                                                placeholder="Digite seu telefone"
                                            />
                                        ) : (
                                            <div className="d-flex align-items-center">
                                                <FaPhone className="me-2" /> {dadosDoador.telefone}
                                            </div>
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row className="justify-content-end">
                                            <Col xs="auto">
                                                <Button variant="link" className="d-flex align-items-center p-0">
                                                    <TbDoorExit size={25} color="#34495e" />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>

                                {editando && (
                                    <Button className="botao-salvar mt-3" onClick={() => setEditando(false)}>
                                        Salvar
                                    </Button>
                                )}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default PerfilDoador;
