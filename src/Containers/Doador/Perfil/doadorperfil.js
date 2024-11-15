import React, { useState } from 'react';
import { Card, ListGroup, Button, Row, Col, Form } from 'react-bootstrap';
import { FaEdit, FaPhone } from 'react-icons/fa';
import { TbDoorExit } from "react-icons/tb";
import NavDoador from '../../../Components/Doador/Nav/navDoador';
import './doadorperfil.css';

function DoadorPerfil() {
    const [isEditing, setIsEditing] = useState(false);

    const [doadorDados, setDoadorDados] = useState({
        profilePicture: "https://via.placeholder.com/150", // Placeholder image
        name: "Nome do Doador",
        address: "Endereço do Doador",
        cep: "00000-000",
        phone: "(00) 0000-0000",
        email: "contato@doador.com",
    });

    const handleEditClick = () => setIsEditing(!isEditing);

    const handleInputChange = (e, field) => {
        setDoadorDados({ ...doadorDados, [field]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setDoadorDados({ ...doadorDados, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <header>
                <NavDoador />
            </header>
            <div className="container p-0 ong-profile col-md-9">
                <Card className='cardongperfil'>
                    <Card.Body>
                        <Row>
                            <Col className="col-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={doadorDados.name}
                                            onChange={(e) => handleInputChange(e, 'name')}
                                        />
                                    ) : (
                                        <Card.Title className="doadorNome">{doadorDados.name}</Card.Title>
                                    )}
                                    <Button variant="link" onClick={handleEditClick}>
                                        <FaEdit size={20} color="#34495e" />
                                    </Button>
                                </div>

                                <ListGroup variant="flush" className="mt-2">
                                    <ListGroup.Item>
                                        <strong>Endereço:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={doadorDados.address}
                                                onChange={(e) => handleInputChange(e, 'address')}
                                            />
                                        ) : (
                                            doadorDados.address
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>CEP:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={doadorDados.cep}
                                                onChange={(e) => handleInputChange(e, 'cep')}
                                            />
                                        ) : (
                                            doadorDados.cep
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Telefone:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={doadorDados.phone}
                                                onChange={(e) => handleInputChange(e, 'phone')}
                                            />
                                        ) : (
                                            <div className="d-flex align-items-center">
                                                <FaPhone className="me-2" /> {doadorDados.phone}
                                            </div>
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Email:</strong> {isEditing ? (
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={doadorDados.email}
                                                onChange={(e) => handleInputChange(e, 'email')}
                                            />
                                        ) : (
                                            <a href={`mailto:${doadorDados.email}`}>{doadorDados.email}</a>
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row className="justify-content-end">
                                            <Col xs="auto">
                                                <Button variant="link" className="d-flex align-items-center p-0">
                                                    <TbDoorExit size={25} color="#34495e"/>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>

                                {isEditing && (
                                    <Button className="cadBotao mt-3" onClick={() => setIsEditing(false)}>
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

export default DoadorPerfil;
