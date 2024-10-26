import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export const RecuperarSenha = () => {
  return (
    <Container className="form-cad p-4">
      <div className="text-center mb-4">
        <h3 className="tituloCad">Recuperar Senha Doador</h3>
        <p>Digite o e-mail da conta que você deseja recuperar a senha</p>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control className="entradaCadastro" type="email" placeholder="E-mail" />
        </Form.Group>
        <div className="text-center">
          <Button className="cadBotao" type="submit">
            Recuperar
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default RecuperarSenha;