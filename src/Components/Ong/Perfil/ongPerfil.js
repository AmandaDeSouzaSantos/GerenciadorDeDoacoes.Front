import React, { useState } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';

function OngPerfil() {
    const [isEditing, setIsEditing] = useState(false);

    const [ongDados, setongDados] = useState({
        logo: "URL_DO_LOGO_AQUI", // substitua pela URL real ou deixe vazio
        name: "Nome da ONG",
        cnpj: "00.000.000/0001-00",
        address: "Endereço da ONG",
        cep: "00000-000",
        phone: "(00) 0000-0000",
        email: "contato@ong.com",
        instagram: "@ong",
        facebook: "/ong",
        website: "www.ong.com"
    });

    const handleEditClick = () => setIsEditing(!isEditing);

    return (
        <div className="ngo-profile">
            <h3>Perfil da ONG</h3>
            <Card>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            {ongDados.logo && (
                                <img
                                    src={ongDados.logo}
                                    alt="Logo da ONG"
                                    style={{ width: "100px", marginRight: "20px" }}
                                />
                            )}
                            <div>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={ongDados.name}
                                        onChange={(e) => setongDados({ ...ongDados, name: e.target.value })}
                                    />
                                ) : (
                                    <Card.Title>{ongDados.name}</Card.Title>
                                )}
                                <Card.Text>CNPJ: {ongDados.cnpj}</Card.Text>
                            </div>
                        </div>
                        <Button variant="link" onClick={handleEditClick}>
                            <FaEdit size={20} color="gray" />
                        </Button>
                    </div>
                    <ListGroup variant="flush" className="mt-3">
                        <ListGroup.Item>
                            <strong>Endereço:</strong> {isEditing ? (
                                <input
                                    type="text"
                                    value={ongDados.address}
                                    onChange={(e) => setongDados({ ...ongDados, address: e.target.value })}
                                />
                            ) : (
                                ongDados.address
                            )}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>CEP:</strong> {isEditing ? (
                                <input
                                    type="text"
                                    value={ongDados.cep}
                                    onChange={(e) => setongDados({ ...ongDados, cep: e.target.value })}
                                />
                            ) : (
                                ongDados.cep
                            )}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Telefone:</strong> {isEditing ? (
                                <input
                                    type="text"
                                    value={ongDados.phone}
                                    onChange={(e) => setongDados({ ...ongDados, phone: e.target.value })}
                                />
                            ) : (
                                ongDados.phone
                            )}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Email:</strong> {isEditing ? (
                                <input
                                    type="email"
                                    value={ongDados.email}
                                    onChange={(e) => setongDados({ ...ongDados, email: e.target.value })}
                                />
                            ) : (
                                ongDados.email
                            )}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Instagram:</strong> {isEditing ? (
                                <input
                                    type="text"
                                    value={ongDados.instagram}
                                    onChange={(e) => setongDados({ ...ongDados, instagram: e.target.value })}
                                />
                            ) : (
                                ongDados.instagram
                            )}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Facebook:</strong> {isEditing ? (
                                <input
                                    type="text"
                                    value={ongDados.facebook}
                                    onChange={(e) => setongDados({ ...ongDados, facebook: e.target.value })}
                                />
                            ) : (
                                ongDados.facebook
                            )}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Site:</strong> {isEditing ? (
                                <input
                                    type="text"
                                    value={ongDados.website}
                                    onChange={(e) => setongDados({ ...ongDados, website: e.target.value })}
                                />
                            ) : (
                                <a href={`https://${ongDados.website}`} target="_blank" rel="noopener noreferrer">{ongDados.website}</a>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
}

export default OngPerfil;
