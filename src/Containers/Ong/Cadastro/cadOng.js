import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import './cadOng.css';
import { LuImagePlus } from "react-icons/lu";

const FormOng = () => {
  const [formData, setFormData] = useState({
    cnpj: '',
    nomeONG: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    instagram: '',
    facebook: '',
    site: '', // Site continua no estado, mas será tratado como opcional
    logo: null,
    senha: '',
  });

  const [errors, setErrors] = useState({});

  // Função para lidar com mudanças nos inputs
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  // Função de validação de email
  const validarEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Verificar campos obrigatórios (exceto 'logo' e 'site')
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'logo' && key !== 'site') {
        newErrors[key] = 'Este campo é obrigatório';
      }
    });

    // Validação específica de email
    if (formData.email && !validarEmail(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido com "@" e ".com"';
    }

    // Verificar se há erros
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Se não houver erros, prosseguir com o envio (ou outra lógica necessária)
    alert('Cadastro realizado com sucesso!');
    // Limpar o formulário (opcional)
    setFormData({
      cnpj: '',
      nomeONG: '',
      email: '',
      telefone: '',
      cep: '',
      endereco: '',
      instagram: '',
      facebook: '',
      site: '',
      logo: null,
      senha: '',
    });
    setErrors({});
  };

  return (
    <Container className="form-cad p-4">
      <div className="text-center mb-4">
        <img src="/logo.png" alt="ONG Pipipi" style={{ width: '100px' }} />
        <h3 className="tituloCad">Cadastro Ong</h3>
      </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="cnpj">
              <Form.Control
                className="entradaCadastro"
                type="text"
                placeholder="CNPJ"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                isInvalid={!!errors.cnpj}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cnpj}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="nomeONG">
              <Form.Control
                className="entradaCadastro"
                type="text"
                placeholder="Nome da ONG"
                name="nomeONG"
                value={formData.nomeONG}
                onChange={handleChange}
                isInvalid={!!errors.nomeONG}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nomeONG}
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
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="instagram">
              <Form.Control
                className="entradaCadastro"
                type="text"
                placeholder="Instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                isInvalid={!!errors.instagram}
              />
              <Form.Control.Feedback type="invalid">
                {errors.instagram}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="facebook">
              <Form.Control
                className="entradaCadastro"
                type="text"
                placeholder="Facebook"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                isInvalid={!!errors.facebook}
              />
              <Form.Control.Feedback type="invalid">
                {errors.facebook}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="site">
              <Form.Control
                className="entradaCadastro"
                type="text"
                placeholder="Site (opcional)"
                name="site"
                value={formData.site}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="logo">
              <div className="d-flex align-items-center">
                <LuImagePlus className="iconelogo me-2" size={24} color='#EC2A2A' />
                <Form.Control
                  className="entradaCadastro"
                  type="file"
                  name="logo"
                  onChange={handleChange}
                />
              </div>
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
          <Button className="cadBotao" type="submit">
            Cadastrar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormOng;
