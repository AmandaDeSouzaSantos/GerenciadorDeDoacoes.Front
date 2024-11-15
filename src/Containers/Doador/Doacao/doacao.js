import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import NavDoador from '../../../Components/Doador/Nav/navDoador';

function Doacao() {
  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Assunto: ${assunto}\nDescrição: ${descricao}`);
  };

  return (
    <>
      <header>
        <NavDoador />
      </header>
      <Container className="col-md-9">
        <Card className="cardt p-4 mb-4">
          <h3 className="tituloCad">Doação</h3>
          <p>
            Se a ONG aceitar sua doação, você poderá encaminhá-la à sede da ONG mais próxima de você. Todas as propostas feitas por você para ONGs ficam em sua caixa de entrada. Esta plataforma é focada na doação de itens básicos: <strong>Alimentos, Higiene, Vestes.</strong>
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="assunto" className="mb-3">
              <Form.Control
                className="entradaCadastro"
                type="text"
                placeholder="Escreva aqui o que é a doação"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="descricao" className="mb-4">
              <Form.Control
                className="entradaCadastro"
                as="textarea"
                placeholder="Descreva características do que vai ser doado"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </Form.Group>
            <Button className="cadBotao" type="submit" disabled={!assunto || !descricao}>
              Enviar
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default Doacao;
