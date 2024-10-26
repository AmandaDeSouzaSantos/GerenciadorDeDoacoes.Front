import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';


export const RecuperarSenha = () => {
  return (
    <Container className="form-cad p-4">
      <div className="text-center mb-2">
        <h3 className="tituloCad">Recuperar Senha Ong</h3>
        <p>Digite o CNPJ da conta que você deseja recuperar a senha</p>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="cnpj">
          <Form.Control className="entradaCadastro" type="text" placeholder="CNPJ" />
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