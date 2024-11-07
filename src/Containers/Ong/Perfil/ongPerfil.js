import React, { useState } from 'react';
import { Card, ListGroup, Button, Row, Col, Form } from 'react-bootstrap';
import { FaEdit, FaInstagram, FaFacebook } from 'react-icons/fa';
import NavOng from '../../../Components/Ong/Nav/navOng';

import './ongPerfil.css';

function OngPerfil() {
    const [isEditing, setIsEditing] = useState(false);

    const [ongDados, setOngDados] = useState({
        logo: "https://www.blogueirosdasaude.org.br/wp-content/uploads/2017/12/simbolo.jpg",
        name: "Nome da ONG",
        cnpj: "00.000.000/0001-00",
        address: "Endereço da ONG",
        cep: "00000-000",
        phone: "(00) 0000-0000",
        email: "contato@ong.com",
        instagram: "https://www.instagram.com/ong",
        facebook: "https://www.facebook.com/ong",
        website: "www.ong.com"
    });

    const handleEditClick = () => setIsEditing(!isEditing);

    const handleInputChange = (e, field) => {
        setOngDados({ ...ongDados, [field]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setOngDados({ ...ongDados, logo: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <header>
                <NavOng />
            </header>
            <div className="container p-0 ong-profile col-md-8">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col className="text-center mb-2 mb-md-0 d-flex align-items-center flex-column justify-content-center col-lg-6 col-12">
                                <img
                                    src={ongDados.logo}
                                    alt="Logo da ONG"
                                    style={{ width: "90%" }}
                                    className="img-fluid"
                                />
                                {isEditing && (
                                    <Form.Group className="mt-2">
                                        <Form.Control type="file" onChange={handleImageChange} />
                                    </Form.Group>
                                )}
                            </Col>

                            <Col className="col-lg-6 col-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={ongDados.name}
                                            onChange={(e) => handleInputChange(e, 'name')}
                                        />
                                    ) : (
                                        <Card.Title className="ongNome">{ongDados.name}</Card.Title>
                                    )}
                                    <Button variant="link" onClick={handleEditClick}>
                                        <FaEdit size={20} color="#34495e" />
                                    </Button>
                                </div>

                                <ListGroup variant="flush" className="mt-2">
                                    <ListGroup.Item>
                                        <strong>CNPJ:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={ongDados.cnpj}
                                                onChange={(e) => handleInputChange(e, 'cnpj')}
                                            />
                                        ) : (
                                            ongDados.cnpj
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Endereço:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={ongDados.address}
                                                onChange={(e) => handleInputChange(e, 'address')}
                                            />
                                        ) : (
                                            ongDados.address
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>CEP:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={ongDados.cep}
                                                onChange={(e) => handleInputChange(e, 'cep')}
                                            />
                                        ) : (
                                            ongDados.cep
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Telefone:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={ongDados.phone}
                                                onChange={(e) => handleInputChange(e, 'phone')}
                                            />
                                        ) : (
                                            ongDados.phone
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Email:</strong> {isEditing ? (
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={ongDados.email}
                                                onChange={(e) => handleInputChange(e, 'email')}
                                            />
                                        ) : (
                                            ongDados.email
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        {!isEditing ? (
                                            <div className="d-flex align-items-center">
                                                <a href={ongDados.instagram} target="_blank" rel="noopener noreferrer" className="me-3">
                                                    <FaInstagram size={35} color="#E1306C" />
                                                </a>
                                                <a href={ongDados.facebook} target="_blank" rel="noopener noreferrer">
                                                    <FaFacebook size={35} color="#3b5998" />
                                                </a>
                                            </div>
                                        ) : (
                                            <>
                                                <input
                                                    type="text"
                                                    className="form-control mb-2"
                                                    value={ongDados.instagram}
                                                    onChange={(e) => handleInputChange(e, 'instagram')}
                                                    placeholder="Instagram"
                                                />
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={ongDados.facebook}
                                                    onChange={(e) => handleInputChange(e, 'facebook')}
                                                    placeholder="Facebook"
                                                />
                                            </>
                                        )}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <strong>Site:</strong> {isEditing ? (
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={ongDados.website}
                                                onChange={(e) => handleInputChange(e, 'website')}
                                            />
                                        ) : (
                                            <a href={`https://${ongDados.website}`} target="_blank" rel="noopener noreferrer">
                                                {ongDados.website}
                                            </a>
                                        )}
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

export default OngPerfil;
