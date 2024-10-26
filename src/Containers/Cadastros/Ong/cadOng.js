import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import './cadOng.css';
import { LuImagePlus } from "react-icons/lu";

const FormOng= () => {
  return (
    <Container className="form-cad p-4">
      <div className="text-center mb-4">
        <img src="/logo.png" alt="ONG Pipipi" style={{ width: '100px' }} />
        <h3 className="tituloCad">Cadastro Ong</h3>
      </div>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="cnpj">
              <Form.Control className="entradaCadastro" type="text" placeholder="CNPJ" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="nomeONG">
              <Form.Control className="entradaCadastro" type="text" placeholder="Nome da ONG" />
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
            <Form.Group className="mb-3" controlId="telefone">
              <Form.Control className="entradaCadastro" type="text" placeholder="Telefone" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="cep">
              <Form.Control className="entradaCadastro" type="text" placeholder="CEP" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="endereco">
              <Form.Control className="entradaCadastro" type="text" placeholder="Endereço" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="instagram">
              <Form.Control className="entradaCadastro" type="text" placeholder="Instagram" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="facebook">
              <Form.Control className="entradaCadastro" type="text" placeholder="Facebook" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="site">
              <Form.Control className="entradaCadastro" type="text" placeholder="Site" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="logo">
              <div className="d-flex align-items-center">
                <LuImagePlus className="iconelogo me-2" size={24} />
                <Form.Control className="entradaCadastro" type="file" />
              </div>
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
          <Button className="cadBotao" type="submit">
            Cadastrar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormOng;
