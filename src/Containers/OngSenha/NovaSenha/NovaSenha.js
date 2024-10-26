import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';


export const NovaSenha = () => {
  return (
    <Container className="form-cad p-4">
      <div className="text-center mb-4">
        <h3 className="tituloCad">Nova Senha Ong</h3>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="novaSenha">
          <Form.Control className="entradaCadastro" type="password" placeholder="Digite sua nova senha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmaSenha">
          <Form.Control className="entradaCadastro" type="password" placeholder="Confirme a senha" />
        </Form.Group>
        <div className="text-center">
          <Button className="cadBotao" type="submit">
            Salvar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default NovaSenha;
