import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Tabs, Tab, Alert, Card } from 'react-bootstrap';
import NavOng from '../../../Components/Ong/Nav/navOng';

function Doacao() {
    const [tipo, setTipo] = useState('');
    const [formData, setFormData] = useState({});
    const [estoque, setEstoque] = useState([]);
    const [filtro, setFiltro] = useState('todos');
    const [erro, setErro] = useState('');

    const handleTipoChange = (e) => {
        setTipo(e.target.value);
        setFormData({});
        setErro('');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validarFormulario = () => {
        const camposRequeridos = {
            alimento: ['nome', 'validade', 'quantidade'],
            higiene: ['nome', 'quantidade'],
            vestimenta: ['descricao', 'tamanho', 'quantidade']
        };
        
        return camposRequeridos[tipo]?.every((campo) => formData[campo]);
    };

    const salvarDoacao = () => {
        if (!validarFormulario()) {
            setErro('Preencha todos os campos obrigatórios.');
            return;
        }

        setEstoque([...estoque, { tipo, ...formData }]);
        setFormData({});
        setTipo('');
        setErro('');
    };

    const filtrarEstoque = (categoria) => {
        setFiltro(categoria);
    };

    const doacoesFiltradas = filtro === 'todos' ? estoque : estoque.filter((item) => item.tipo === filtro);

    return (
        <>
            <header>
                <NavOng />
            </header>
            <Container className="my-4 col-md-8">

                <Card className='cardt p-4 mb-3'>
                    <Row>
                    <Col md='6'>
                    <h3 className='tituloCad'>Cadastrar Doação</h3>
                    </Col>  
             
                    <Col md='6'>
                    <Form.Group className="mb-3">
                        <Form.Select value={tipo} onChange={handleTipoChange}>
                            <option value="">Tipo Doação</option>
                            <option value="alimento">Alimentos</option>
                            <option value="higiene">Higiene</option>
                            <option value="vestimenta">Vestes</option>
                        </Form.Select>
                    </Form.Group>
                    </Col>
                    </Row>

                {erro && <Alert variant="danger">{erro}</Alert>}

                <Form>
                    <Row>
                    {tipo === 'alimento' && (
                        <>
                        <Col md='6'>
                            <Form.Group className="mb-3">
                                <Form.Control className="entradaCadastro" placeholder='Nome' type="text" name="nome" value={formData.nome || ''} onChange={handleInputChange} required />
                            </Form.Group>
                            </Col>
                            <Col md='6'>
                            <Form.Group className="mb-3">
                                <Form.Control className="entradaCadastro" placeholder='Data Validade' type="date" name="validade" value={formData.validade || ''} onChange={handleInputChange} required />
                            </Form.Group>
                            </Col>
                            <Col md='6'>
                            <Form.Group className="mb-3">
                                <Form.Control className="entradaCadastro" placeholder='Quantidade' type="number" name="quantidade" value={formData.quantidade || ''} onChange={handleInputChange} required />
                            </Form.Group>
                            </Col>
                        </>
                    )}

                    {tipo === 'higiene' && (
                        <>
                          <Col md='6'>
                            <Form.Group className="mb-3">
                                <Form.Control className="entradaCadastro" placeholder='Nome' type="text" name="nome" value={formData.nome || ''} onChange={handleInputChange} required />
                            </Form.Group>
                            </Col>
                            <Col md='6'>
                            <Form.Group className="mb-3">
                                <Form.Control className="entradaCadastro" placeholder='Quantidade' type="number" name="quantidade" value={formData.quantidade || ''} onChange={handleInputChange} required />
                            </Form.Group>
                            </Col>
                        </>
                    )}

                    {tipo === 'vestimenta' && (
                        <>
                          <Col md='6'>
                            <Form.Group className="mb-3">
                                <Form.Control className="entradaCadastro" placeholder='Descrição' type="text" name="descricao" value={formData.descricao || ''} onChange={handleInputChange} required />
                            </Form.Group>
                            </Col>
                            <Col md='6'>
                            <Form.Group className="mb-3">
                                <Form.Control className="entradaCadastro" placeholder='Tamanho' type="text" name="tamanho" value={formData.tamanho || ''} onChange={handleInputChange} required />
                            </Form.Group>
                            </Col>
                            <Col md='6'>
                            <Form.Group className="mb-3">
                                <Form.Control className="entradaCadastro" placeholder='Quantidade' type="number" name="quantidade" value={formData.quantidade || ''} onChange={handleInputChange} required />
                            </Form.Group>
                            </Col>
                        </>
                    )}
                    <Col md='6' className='d-flex align-items-center justify-content-center'>
                    <Button variant="primary" onClick={salvarDoacao}>Salvar</Button>
                    <Button variant="secondary" className="ms-2" onClick={() => setFormData({})}>Limpar</Button>
                    </Col>
                    </Row>
                </Form>

             
                </Card>
                <Card className='cardt1 p-4 mb-3'>
                <h3 className='tituloCad' >Estoque</h3>
                <div className="mb-3">
                    <Button variant="outline-primary" onClick={() => filtrarEstoque('alimento')}>Alimentos</Button>
                    <Button variant="outline-primary" onClick={() => filtrarEstoque('higiene')} className="ms-2">Higiene</Button>
                    <Button variant="outline-primary" onClick={() => filtrarEstoque('vestimenta')} className="ms-2">Vestes</Button>
                    <Button variant="outline-secondary" onClick={() => filtrarEstoque('todos')} className="ms-2">Todos</Button>
                </div>

                <div>
                    {doacoesFiltradas.length > 0 ? (
                        doacoesFiltradas.map((item, index) => (
                            <Alert key={index} variant="info">
                                <strong>{item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}:</strong> {JSON.stringify(item)}
                            </Alert>
                        ))
                    ) : (
                        <Alert variant="warning">Nenhuma doação cadastrada.</Alert>
                    )}
                </div>
                </Card>
            </Container>
        </>
    );
}

export default Doacao;
