import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup, InputGroup } from 'react-bootstrap';
import { FaSearch, FaChevronDown, FaChevronUp, FaEdit, FaTrashAlt, FaEyeSlash } from 'react-icons/fa';
import NavOng from '../../../Components/Ong/Nav/navOng';
import './donatario.css';

function Donatario() {
    const [doadores, setDoadores] = useState([]);
    const [novoDoador, setNovoDoador] = useState({
        nome: '', cpf: '', endereco: '', email: '', cep: '', telefone: ''
    });
    const [pesquisa, setPesquisa] = useState('');
    const [doadorSelecionado, setDoadorSelecionado] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const dadosIniciais = [
            { nome: 'Amanda de Souza Santos ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc', cpf: '52238941850', endereco: 'Rua A, 123 TAboar da serrra JArdim MAria Rona', email: 'amandassssssssssssasasasaa@example.com', cep: '12345-678', telefone: '11 99326 8991' },
        ];
        setDoadores(dadosIniciais);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovoDoador({ ...novoDoador, [name]: value });
    };

    const handleAdicionarDoador = () => {
        setDoadores([...doadores, novoDoador]);
        setNovoDoador({ nome: '', cpf: '', endereco: '', email: '', cep: '', telefone: '' });
    };

    const handlePesquisar = (e) => {
        setPesquisa(e.target.value);
    };

    const handleSelecionarDoador = (doador) => {
        setDoadorSelecionado(doadorSelecionado === doador ? null : doador);
        setIsEditing(false);
    };

    const handleOcultarDetalhes = () => {
        setDoadorSelecionado(null);
        setIsEditing(false);
    };

    const handleEditarDoador = () => {
        setIsEditing(true);
    };

    const handleSalvarEdicao = () => {
        setDoadores(doadores.map((d) => (d === doadorSelecionado ? doadorSelecionado : d)));
        setIsEditing(false);
    };

    const handleEditarInputChange = (e) => {
        const { name, value } = e.target;
        setDoadorSelecionado({ ...doadorSelecionado, [name]: value });
    };

    const handleExcluirDoador = (doador) => {
        const novosDoadores = doadores.filter((d) => d !== doador);
        setDoadores(novosDoadores);
        setDoadorSelecionado(null);
    };

    const doadoresFiltrados = doadores.filter((doador) =>
        doador.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );

    return (
        <>
            <header>
                <NavOng />
            </header>
            <Container className="ongDonatario mt-5 col-md-8">
                <Card className="cardDonatario p-4 mb-4">
                    <h3 className="tituloCad">Cadastro Donatario</h3>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control className='entradaCadastro' placeholder='CPF' name="cpf" value={novoDoador.cpf} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control className='entradaCadastro' placeholder='Nome' name="nome" value={novoDoador.nome} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control className='entradaCadastro' placeholder='Endereço' name="endereco" value={novoDoador.endereco} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control className='entradaCadastro' placeholder='CEP' name="cep" value={novoDoador.cep} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control className='entradaCadastro' placeholder='Email' name="email" value={novoDoador.email} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col md={6}> 
                            <Form.Group className="mb-3">
                                <Form.Control className='entradaCadastro' placeholder='Telefone' name="telefone" value={novoDoador.telefone} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center">
                        <Button className="cadBotao me-2" onClick={handleAdicionarDoador}>Cadastrar</Button>
                        <Button variant="secondary" onClick={() => setNovoDoador({ nome: '', cpf: '', endereco: '', email: '', cep: '', telefone: '' })}>Limpar</Button>
                    </div>
                </Card>

                <Card className="cardDonatario1 t-3 p-4">
                    <Row className="align-items-center mb-3">
                        <Col md={6}>
                            <h3 className="tituloCad" >Cadastrados na ONG</h3>
                        </Col>
                        <Col md={6}>
                            <InputGroup className='campoEntrada'>
                                <InputGroup.Text><FaSearch /></InputGroup.Text>
                                <Form.Control placeholder="Pesquisar Donatario" value={pesquisa} onChange={handlePesquisar} />
                            </InputGroup>
                        </Col>
                    </Row>

                    <ListGroup className="b-0 ">
                        {doadoresFiltrados.map((doador, index) => (
                            <ListGroup.Item key={index} className="m-0 mb-3 b-0 p-0">
                                {doadorSelecionado !== doador && (
                                    <div className="d-flex justify-content-between align-items-center p-2 entradaCadastro" >
                                        <Row className="w-100">
                                            <Col xs={12} md={7}>   {/* Limite a largura do nome */}
                                                <span className="nomeDonatario">{doador.nome}</span>
                                            </Col>
                                            <Col xs={10} md={3}>    {/* Certifique-se de truncar o texto do CPF */}
                                                <span>CPF: {doador.cpf}</span>
                                            </Col>
                                            <Col xs={2} md={2} className="d-flex justify-content-end"> 
                                                <FaChevronDown onClick={() => handleSelecionarDoador(doador)} style={{ cursor: 'pointer' }} />
                                            </Col>
                                        </Row>

                                    </div>
                                )}

                                {doadorSelecionado === doador && (
                                    <Card className="p-3 mt-2" style={{ border: '1px solid red', borderRadius: '10px' }}>
                                        <Row>
                                            <Col md={6}>
                                                {isEditing ? (
                                                    <>
                                                        <label>Nome:</label>
                                                        <Form.Control name="nome" value={doadorSelecionado.nome} onChange={handleEditarInputChange} />
                                                    </>
                                                ) : (
                                                    <p><strong>Nome:</strong> {doador.nome}</p>
                                                )}
                                                {isEditing ? (
                                                    <>
                                                        <label>Endereço:</label>
                                                        <Form.Control name="endereco" value={doadorSelecionado.endereco} onChange={handleEditarInputChange} />
                                                    </>
                                                ) : (
                                                    <p><strong>Endereço:</strong> {doador.endereco}</p>
                                                )}
                                                {isEditing ? (
                                                    <>
                                                        <label>Email:</label>
                                                        <Form.Control name="email" value={doadorSelecionado.email} onChange={handleEditarInputChange} />
                                                    </>
                                                ) : (
                                                    <p><strong>Email:</strong> {doador.email}</p>
                                                )}
                                            </Col>
                                            <Col md={4}>
                                                <p><strong>CPF:</strong> {doador.cpf}</p>
                                                {isEditing ? (
                                                    <>
                                                        <label>CEP:</label>
                                                        <Form.Control name="cep" value={doadorSelecionado.cep} onChange={handleEditarInputChange} />
                                                    </>
                                                ) : (
                                                    <p><strong>CEP:</strong> {doador.cep}</p>
                                                )}
                                                {isEditing ? (
                                                    <>
                                                        <label>Telefone:</label>
                                                        <Form.Control name="telefone" value={doadorSelecionado.telefone} onChange={handleEditarInputChange} />
                                                    </>
                                                ) : (
                                                    <p><strong>Telefone:</strong> {doador.telefone}</p>
                                                )}
                                            </Col>
                                            <Col md={2} className="d-flex flex-column align-items-end">
                                                <FaChevronUp onClick={handleOcultarDetalhes} style={{ cursor: 'pointer' }} />
                                            </Col>
                                        </Row>

                                        <div className="d-flex justify-content-center mt-2 flex-wrap">
                                            {isEditing ? (
                                                <Button variant="primary" className="m-1" onClick={handleSalvarEdicao}>Salvar</Button>
                                            ) : (
                                                <Button variant="warning" className="m-1" onClick={handleEditarDoador}><FaEdit /> Editar</Button>
                                            )}
                                            <Button variant="danger" className="m-1" onClick={() => handleExcluirDoador(doador)}><FaTrashAlt /> Excluir</Button>
                                           
                                        </div>
                                    </Card>
                                )}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            </Container>
        </>
    );
}

export default Donatario;
