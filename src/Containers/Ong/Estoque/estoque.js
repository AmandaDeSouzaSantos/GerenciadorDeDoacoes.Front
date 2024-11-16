import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import NavOng from '../../../Components/Ong/Nav/navOng';
import './estoque.css';

function Doacao() {
    const [tipoDoacao, setTipoDoacao] = useState('');
    const [dadosFormulario, setDadosFormulario] = useState({});
    const [estoque, setEstoque] = useState([]); 
    const [filtroEstoque, setFiltroEstoque] = useState('todos');
    const [erroValidacao, setErroValidacao] = useState('');

   
    const alterarTipoDoacao = (e) => {
        setTipoDoacao(e.target.value);
        setDadosFormulario({});
        setErroValidacao('');
    };

    const atualizarDadosFormulario = (e) => {
        const { name, value } = e.target;
        setDadosFormulario({ ...dadosFormulario, [name]: value });
    };

    const validarFormulario = () => {
        const camposRequeridos = {
            alimento: ['nome', 'validade', 'quantidade'],
            higiene: ['nome', 'quantidade'],
            vestimenta: ['descricao', 'tamanho', 'quantidade']
        };

        return camposRequeridos[tipoDoacao]?.every((campo) => dadosFormulario[campo]);
    };

    const salvarDoacao = () => {
        if (!validarFormulario()) {
            setErroValidacao('Preencha todos os campos obrigatórios.');
            return;
        }

        setEstoque([...estoque, { tipoDoacao, ...dadosFormulario, id: Date.now() }]);

        setDadosFormulario({});
        setTipoDoacao('');
        setErroValidacao('');
    };

    const alterarFiltroEstoque = (categoria) => {
        setFiltroEstoque(categoria);
    };

    const doacoesFiltradas =
        filtroEstoque === 'todos' ? estoque : estoque.filter((item) => item.tipoDoacao === filtroEstoque);

    const atualizarQuantidadeItem = (id, novaQuantidade) => {
        setEstoque((estoqueAtual) =>
            estoqueAtual
                .map((item) => (item.id === id ? { ...item, quantidade: novaQuantidade } : item))
                .filter((item) => item.quantidade > 0)
        );
    };

    return (
        <>
            <header>
                <NavOng />
            </header>
            <Container className="contaiTa my-4 col-md-9">
             
                <Card className="cardt p-4 mb-4">
                    <Row>
                        <Col md={6}>
                            <h3 className="tituloCad">Cadastrar Doação</h3>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="pesquisaDonatario mb-3">
                                <Form.Select
                                    className="botaoVisualizar"
                                    value={tipoDoacao}
                                    onChange={alterarTipoDoacao}
                                >
                                    <option value="">Tipo Doação</option>
                                    <option value="alimento">Alimentos</option>
                                    <option value="higiene">Higiene</option>
                                    <option value="vestimenta">Vestes</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    {erroValidacao && <Alert variant="danger">{erroValidacao}</Alert>}

                    <Form>
                        <Row>
                            {tipoDoacao === 'alimento' && (
                                <>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className="entradaCadastro"
                                                type="text"
                                                name="nome"
                                                placeholder="Nome"
                                                value={dadosFormulario.nome || ''}
                                                onChange={atualizarDadosFormulario}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className="entradaCadastro"
                                                type="date"
                                                name="validade"
                                                placeholder="Data Validade"
                                                value={dadosFormulario.validade || ''}
                                                onChange={atualizarDadosFormulario}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className="entradaCadastro"
                                                type="number"
                                                name="quantidade"
                                                placeholder="Quantidade"
                                                value={dadosFormulario.quantidade || ''}
                                                onChange={atualizarDadosFormulario}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </>
                            )}

                            {tipoDoacao === 'higiene' && (
                                <>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className="entradaCadastro"
                                                type="text"
                                                name="nome"
                                                placeholder="Nome"
                                                value={dadosFormulario.nome || ''}
                                                onChange={atualizarDadosFormulario}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className="entradaCadastro"
                                                type="number"
                                                name="quantidade"
                                                placeholder="Quantidade"
                                                value={dadosFormulario.quantidade || ''}
                                                onChange={atualizarDadosFormulario}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </>
                            )}

                            {tipoDoacao === 'vestimenta' && (
                                <>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className="entradaCadastro"
                                                type="text"
                                                name="descricao"
                                                placeholder="Descrição"
                                                value={dadosFormulario.descricao || ''}
                                                onChange={atualizarDadosFormulario}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className="entradaCadastro"
                                                type="text"
                                                name="tamanho"
                                                placeholder="Tamanho"
                                                value={dadosFormulario.tamanho || ''}
                                                onChange={atualizarDadosFormulario}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                className="entradaCadastro"
                                                type="number"
                                                name="quantidade"
                                                placeholder="Quantidade"
                                                value={dadosFormulario.quantidade || ''}
                                                onChange={atualizarDadosFormulario}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </>
                            )}
                            <Col md={6}>
                                <Button className="cadBotao me-2" onClick={salvarDoacao}>
                                    Cadastrar
                                </Button>
                                <Button
                                    className="limCanBotao"
                                    onClick={() => setDadosFormulario({})}
                                >
                                    Limpar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>

                <Card className="cardt1 p-4">
                    <Row>
                        <Col md={6}>
                            <h3 className="tituloCad">Estoque</h3>
                        </Col>
                        <Col md={6}>
                            <div className="mb-3">
                                <Button
                                    className={`limCanBotao ${filtroEstoque === 'alimento' ? 'cadBotao' : ''}`}
                                    onClick={() => alterarFiltroEstoque('alimento')}
                                >
                                    Alimentos
                                </Button>
                                <Button
                                    className={`limCanBotao ms-2 ${filtroEstoque === 'higiene' ? 'cadBotao' : ''}`}
                                    onClick={() => alterarFiltroEstoque('higiene')}
                                >
                                    Higiene
                                </Button>
                                <Button
                                    className={`limCanBotao ms-2 ${filtroEstoque === 'vestimenta' ? 'cadBotao' : ''}`}
                                    onClick={() => alterarFiltroEstoque('vestimenta')}
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
                                    <Card className="entradaCadastro">
                                        <Card.Body>
                                            <Card.Text>
                                                <strong>Nome:</strong> {item.nome || item.descricao}
                                                <br />
                                                {item.validade && <><strong>Validade:</strong> {item.validade}<br /></>}
                                                {item.tamanho && <><strong>Tamanho:</strong> {item.tamanho}<br /></>}
                                                <strong>Quantidade:</strong>{' '}
                                                <Form.Control
                                                    type="number"
                                                    value={item.quantidade}
                                                    onChange={(e) =>
                                                        atualizarQuantidadeItem(item.id, parseInt(e.target.value))
                                                    }
                                                />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p>Nenhuma doação encontrada para o filtro selecionado.</p>
                        )}
                    </Row>
                </Card>
            </Container>
        </>
    );
}

export default Doacao;
