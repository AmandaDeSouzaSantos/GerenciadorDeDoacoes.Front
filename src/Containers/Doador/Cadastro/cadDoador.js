import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import './cadDoador.css'; 

const FormDoador = () => {
  return (
    <Container className="form-cad p-4 ">
      <div className="text-center mb-4">
        <img src="/logo.png" alt="ONG Pipipi" style={{ width: '100px' }} />
        <h3 className="tituloCad mt-2">Cadastro Doador</h3>
      </div>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="cpf">
              <Form.Control className="entradaCadastro" type="text" placeholder="CPF" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className=" mb-3" controlId="nomeCompleto">
              <Form.Control className="entradaCadastro" type="text" placeholder="Nome Completo" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control className="entradaCadastro" type="email" placeholder="E-mail" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className=" mb-3" controlId="telefone">
              <Form.Control className="entradaCadastro" type="text" placeholder="Telefone" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="endereco">
              <Form.Control className="entradaCadastro" type="text" placeholder="Endereço" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="cep">
              <Form.Control className="entradaCadastro" type="text" placeholder="CEP" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group className="mb-3" controlId="senha">
              <Form.Control className="entradaCadastro" type="password" placeholder="Senha" />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center">
          <Button className='cadBotao' type="submit">
            Cadastrar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormDoador;
