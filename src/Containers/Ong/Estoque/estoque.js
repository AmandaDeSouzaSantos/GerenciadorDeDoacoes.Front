import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Tabs, Tab, Alert, Card } from 'react-bootstrap';
import { FaSave, FaTrashAlt, FaEdit } from 'react-icons/fa';
import NavOng from '../../../Components/Ong/Nav/navOng';
import './estoque.css';

function Doacao() {
    const [tipo, setTipo] = useState('');
    const [formData, setFormData] = useState({});
    const [estoque, setEstoque] = useState([]);
    const [filtro, setFiltro] = useState('todos');
    const [erro, setErro] = useState('');
    const [editando, setEditando] = useState(null);

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

        setEstoque([...estoque, { tipo, ...formData, id: Date.now() }]);
        setFormData({});
        setTipo('');
        setErro('');
    };

    const filtrarEstoque = (categoria) => {
        setFiltro(categoria);
    };

    const doacoesFiltradas = filtro === 'todos' ? estoque : estoque.filter((item) => item.tipo === filtro);

    const atualizarQuantidadeItem = (id, novaQuantidade) => {
        setEstoque((estoqueAtual) =>
            estoqueAtual.map((item) =>
                item.id === id ? { ...item, quantidade: novaQuantidade } : item
            ).filter((item) => item.quantidade > 0) // Remove itens com quantidade zero
        );
    };

    return (
        <>
            <header>
                <NavOng/>
            </header>
            <Container className="contaiTa my-4 col-md-9">
                
                <Card className='cardt p-4 mb-4'>
                    <Row>
                        <Col md={6}>
                            <h2 className="tituloCad">Cadastrar Doação</h2>
                        </Col>
                        <Col md={6}>
                            <Form.Group className=" pesquisaDonatario mb-3">
                                <Form.Select className="botaoVisualizar" value={tipo} onChange={handleTipoChange}>
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
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control className='entradaCadastro' type="text" name="nome" placeholder='Nome' value={formData.nome || ''} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control className='entradaCadastro' type="date" name="validade" placeholder='Data Validade' value={formData.validade || ''} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control className='entradaCadastro' type="number" name="quantidade" placeholder='Quantidade'value={formData.quantidade || ''} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </Col>
                                </>
                            )}

                            {tipo === 'higiene' && (
                                <>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control className='entradaCadastro' type="text" name="nome" placeholder='Nome' value={formData.nome || ''} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control className='entradaCadastro' type="number" name="quantidade" placeholder='Quantidade'value={formData.quantidade || ''} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </Col>
                                </>
                            )}

                            {tipo === 'vestimenta' && (
                                <>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control className='entradaCadastro' type="text" name="descricao" placeholder='Descrição' value={formData.descricao || ''} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control className='entradaCadastro' type="text" name="tamanho" placeholder='Tamanho'value={formData.tamanho || ''} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control className='entradaCadastro' type="number" name="quantidade" placeholder='Quantidade'value={formData.quantidade || ''} onChange={handleInputChange} required />
                                        </Form.Group>
                                    </Col>
                                </>
                            )}
                            <Col md={6}>
                                <Button className='cadBotao me-2' onClick={salvarDoacao}>
                                    Cadastrar
                                </Button>
                                <Button className="limCanBotao " onClick={() => setFormData({})}>
                                Limpar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>

            
                <Card className='cardt1 p-4 '>
                    <Row>
                        <Col md={6}>
                            <h3 className="tituloCad">Estoque</h3>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <Button
                                    className={`limCanBotao ${filtro === 'alimento' ? 'cadBotao' : ''}`}
                                    onClick={() => filtrarEstoque('alimento')}
                                >
                                    Alimentos
                                </Button>
                                <Button
                                    className={`limCanBotao ms-2 ${filtro === 'higiene' ? 'cadBotao' : ''}`}
                                    onClick={() => filtrarEstoque('higiene')}
                                >
                                    Higiene
                                </Button>
                                <Button
                                    className={`limCanBotao ms-2 ${filtro === 'vestimenta' ? 'cadBotao' : ''}`}
                                    onClick={() => filtrarEstoque('vestimenta')}
                                >
                                    Vestes
                                </Button>
                            </div>

                        </Col>
                    </Row>
                    
                    <Row>
                        {doacoesFiltradas.length > 0 ? (
                            doacoesFiltradas.map((item) => (
                                <Col md={6} key={item.id} className="mb-4">
                                    <Card className='entradaCadastro'>
                                        <Card.Body>
                                        
                                            <Card.Text >
                                                <strong>Nome:</strong> {item.nome || item.descricao}<br />
                                                {item.validade && <><strong>Validade:</strong> {item.validade}<br /></>}
                                                {item.tamanho && <><strong>Tamanho:</strong> {item.tamanho}<br /></>}
                                                <strong>Quantidade:</strong>{' '}
                                                <input
                                                    type="number"
                                                    value={item.quantidade}
                                                    onChange={(e) => atualizarQuantidadeItem(item.id, parseInt(e.target.value))}
                                                    min="0"
                                                    className="form-control w-50 d-inline"
                                                />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <Alert variant="warning">Nenhuma doação cadastrada.</Alert>
                        )}
                    </Row>
                </Card>
            </Container>
        </>
    );
}

export default Doacao;
