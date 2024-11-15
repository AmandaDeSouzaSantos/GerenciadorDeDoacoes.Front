import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import './cadDoador.css';

const FormDoador = () => {
  const [formData, setFormData] = useState({
    cpf: '',
    nomeCompleto: '',
    email: '',
    telefone: '',
    endereco: '',
    cep: '',
    senha: '',
  });

  const [errors, setErrors] = useState({});

 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const validarEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

   
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'Este campo é obrigatório';
      }
    });

   
    if (formData.email && !validarEmail(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido com "@" e ".com"';
    }

  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Cadastro realizado com sucesso!');
  
    setFormData({
      cpf: '',
      nomeCompleto: '',
      email: '',
      telefone: '',
      endereco: '',
      cep: '',
      senha: '',
    });
    setErrors({});
  };

  return (
    <Container className="form-cad p-4 ">
      <div className="text-center mb-4">
        <img src="/logo.png" alt="ONG Pipipi" style={{ width: '100px' }} />
        <h3 className="tituloCad mt-2">Cadastro Doador</h3>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="cpf">
              <Form.Control
                className="entradaCadastro"
                type="text"
                placeholder="CPF"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                isInvalid={!!errors.cpf}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cpf}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="nomeCompleto">
              <Form.Control
                className="entradaCadastro"
                type="text"
                placeholder="Nome Completo"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
                isInvalid={!!errors.nomeCompleto}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nomeCompleto}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                className="entradaCadastro"
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="telefone">
              <Form.Control
                className="entradaCadastro"
                type="text"
                placeholder="Telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                isInvalid={!!errors.telefone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefone}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="endereco">
              <Form.Control
                className="entradaCadastro"
                type="text"
                placeholder="Endereço"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                isInvalid={!!errors.endereco}
              />
              <Form.Control.Feedback type="invalid">
                {errors.endereco}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="cep">
              <Form.Control
                className="entradaCadastro"
                type="text"
                placeholder="CEP"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                isInvalid={!!errors.cep}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cep}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Group className="mb-3" controlId="senha">
              <Form.Control
                className="entradaCadastro"
                type="password"
                placeholder="Senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                isInvalid={!!errors.senha}
              />
              <Form.Control.Feedback type="invalid">
                {errors.senha}
              </Form.Control.Feedback>
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
