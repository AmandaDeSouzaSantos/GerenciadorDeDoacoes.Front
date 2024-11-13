import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup, InputGroup } from 'react-bootstrap';
import { FaSearch, FaChevronDown, FaChevronUp, FaEdit, FaTrashAlt } from 'react-icons/fa';
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
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const dadosIniciais = [
            { nome: 'Amanda de Souza Santos', cpf: '52238941850', endereco: 'Rua A, 123', email: 'amanda@example.com', cep: '12345-678', telefone: '11 99326 8991' },
        ];
        setDoadores(dadosIniciais);
    }, []);

    const validarEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const validarCampos = (doador) => {
        const newErrors = {};
        Object.keys(doador).forEach((key) => {
            if (!doador[key]) {
                newErrors[key] = 'Este campo é obrigatório';
            }
        });
        if (doador.email && !validarEmail(doador.email)) {
            newErrors.email = 'Por favor, insira um email válido com "@" e ".com"';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAdicionarDoador = () => {
        if (!validarCampos(novoDoador)) return;

        setDoadores([...doadores, novoDoador]);
        setNovoDoador({ nome: '', cpf: '', endereco: '', email: '', cep: '', telefone: '' });
        setErrors({});
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovoDoador({ ...novoDoador, [name]: value });
    };

    const handleSelecionarDoador = (doador) => {
        setDoadorSelecionado(doadorSelecionado === doador ? null : { ...doador });
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
        if (!validarCampos(doadorSelecionado)) return;

        setDoadores(doadores.map((d) => (d.cpf === doadorSelecionado.cpf ? doadorSelecionado : d)));
        setIsEditing(false);
        setErrors({});
    };

    const handleEditarInputChange = (e) => {
        const { name, value } = e.target;
        setDoadorSelecionado({ ...doadorSelecionado, [name]: value });
    };

    const handleExcluirDoador = (doador) => {
        const novosDoadores = doadores.filter((d) => d.cpf !== doador.cpf);
        setDoadores(novosDoadores);
        setDoadorSelecionado(null);
    };

    const handlePesquisar = (e) => {
        setPesquisa(e.target.value);
    };

    const doadoresFiltrados = doadores.filter((doador) =>
        doador.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );

    return (
        <>
            <header>
                <NavOng />
            </header>
            <Container className="contaiTa mt-5 col-md-9">
                <Card className="cardt p-4 mb-4">
                    <h3 className="tituloCad">Cadastro Donatario</h3>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    className='entradaCadastro'
                                    placeholder='CPF'
                                    name="cpf"
                                    value={novoDoador.cpf}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.cpf}
                                />
                                <Form.Control.Feedback type="invalid">{errors.cpf}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    className='entradaCadastro'
                                    placeholder='Nome'
                                    name="nome"
                                    value={novoDoador.nome}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.nome}
                                />
                                <Form.Control.Feedback type="invalid">{errors.nome}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    className='entradaCadastro'
                                    placeholder='Endereço'
                                    name="endereco"
                                    value={novoDoador.endereco}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.endereco}
                                />
                                <Form.Control.Feedback type="invalid">{errors.endereco}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    className='entradaCadastro'
                                    placeholder='CEP'
                                    name="cep"
                                    value={novoDoador.cep}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.cep}
                                />
                                <Form.Control.Feedback type="invalid">{errors.cep}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    className='entradaCadastro'
                                    placeholder='Email'
                                    type="email"
                                    name="email"
                                    value={novoDoador.email}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    className='entradaCadastro'
                                    placeholder='Telefone'
                                    name="telefone"
                                    value={novoDoador.telefone}
                                    onChange={handleInputChange}
                                    isInvalid={!!errors.telefone}
                                />
                                <Form.Control.Feedback type="invalid">{errors.telefone}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center ">
                        <Button className="cadBotao me-2" onClick={handleAdicionarDoador}>Cadastrar</Button>
                        <Button className="limCanBotao " onClick={() => setNovoDoador({ nome: '', cpf: '', endereco: '', email: '', cep: '', telefone: '' })}>Limpar</Button>
                    </div>
                </Card>

                <Card className="cardt1 t-3 p-4">
                    <Row className="align-items-center mb-3">
                        <Col md={6}>
                            <h3 className="tituloCad">Cadastrados na ONG</h3>
                        </Col>
                        <Col md={6}>
                            <InputGroup className='pesquisaDonatario'>
                                <InputGroup.Text className="botaoVisualizar" >< FaSearch /></InputGroup.Text>
                                <Form.Control className="botaoVisualizar" placeholder="Pesquisar Donatario" value={pesquisa} onChange={handlePesquisar} />
                            </InputGroup>
                        </Col>
                    </Row>

                    <ListGroup className="b-0" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        {doadoresFiltrados.map((doador, index) => (
                            <ListGroup.Item key={index} className="m-0 mb-3 b-0 p-0">
                                {doadorSelecionado?.cpf !== doador.cpf && (
                                    <div className="d-flex justify-content-between align-items-center p-3 donatario">
                                        <Row className="w-100">
                                            <Col xs={12} md={7}>
                                                <span className="nomeDonatario">{doador.nome}</span>
                                            </Col>
                                            <Col xs={10} md={3}>
                                                <span><strong>CPF: </strong> {doador.cpf}</span>
                                            </Col>
                                            <Col xs={2} md={2} className="text-end">
                                                <button className="botaoVisualizar p-0 " onClick={() => handleSelecionarDoador(doador)}> <FaChevronDown /></button>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                                {doadorSelecionado?.cpf === doador.cpf && (
                                    <Card className="p-3 donatarioInfor b-0">
                                        {isEditing ? (
                                            <>
                                                <Row>
                                                    <Col md={6}>
                                                        <Form.Group>
                                                            <Form.Label>Nome</Form.Label>
                                                            <Form.Control
                                                                name="nome"
                                                                value={doadorSelecionado.nome}
                                                                onChange={handleEditarInputChange}
                                                                isInvalid={!!errors.nome}
                                                            />
                                                            <Form.Control.Feedback type="invalid">{errors.nome}</Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group>
                                                            <Form.Label>CPF</Form.Label>
                                                            <Form.Control
                                                                name="cpf"
                                                                value={doadorSelecionado.cpf}
                                                                onChange={handleEditarInputChange}
                                                                isInvalid={!!errors.cpf}
                                                            />
                                                            <Form.Control.Feedback type="invalid">{errors.cpf}</Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group>
                                                            <Form.Label>Endereço</Form.Label>
                                                            <Form.Control
                                                                name="endereco"
                                                                value={doadorSelecionado.endereco}
                                                                onChange={handleEditarInputChange}
                                                                isInvalid={!!errors.endereco}
                                                            />
                                                            <Form.Control.Feedback type="invalid">{errors.endereco}</Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group>
                                                            <Form.Label>CEP</Form.Label>
                                                            <Form.Control
                                                                name="cep"
                                                                value={doadorSelecionado.cep}
                                                                onChange={handleEditarInputChange}
                                                                isInvalid={!!errors.cep}
                                                            />
                                                            <Form.Control.Feedback type="invalid">{errors.cep}</Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group>
                                                            <Form.Label>Email</Form.Label>
                                                            <Form.Control
                                                                name="email"
                                                                type="email"
                                                                value={doadorSelecionado.email}
                                                                onChange={handleEditarInputChange}
                                                                isInvalid={!!errors.email}
                                                            />
                                                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group>
                                                            <Form.Label>Telefone</Form.Label>
                                                            <Form.Control
                                                                name="telefone"
                                                                value={doadorSelecionado.telefone}
                                                                onChange={handleEditarInputChange}
                                                                isInvalid={!!errors.telefone}
                                                            />
                                                            <Form.Control.Feedback type="invalid">{errors.telefone}</Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <div className="d-flex justify-content-center mt-3">
                                                    <Button className="cadBotao me-2" onClick={handleSalvarEdicao}>Salvar</Button>
                                                    <Button className="limCanBotao "onClick={() => setIsEditing(false)}>Cancelar</Button>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <Row>
                                                    <Col md={6}>
                                                        <p><strong>Nome:</strong> {doador.nome}</p>
                                                        <p><strong>Endereço:</strong> {doador.endereco}</p>
                                                        <p><strong>Email:</strong> {doador.email}</p>
                                                    </Col>
                                                    <Col md={4}>
                                                        <p><strong>CPF:</strong> {doador.cpf}</p>
                                                        <p><strong>CEP:</strong> {doador.cep}</p>
                                                        <p><strong>Telefone:</strong> {doador.telefone}</p>
                                                    </Col>
                                                    <Col md={2}>
                                                        <div className="d-flex flex-md-column flex-row text-end">
                                                            <button className="botaoVisualizar p-0 mb-2" onClick={handleOcultarDetalhes}><FaChevronUp /></button>
                                                            <button className="botaoVisualizar p-0 mb-2" onClick={handleEditarDoador}><FaEdit /></button>
                                                            <button className="botaoVisualizar p-0 mb-2" onClick={() => handleExcluirDoador(doador)}><FaTrashAlt /></button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                        
                                            </>
                                        )}
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
