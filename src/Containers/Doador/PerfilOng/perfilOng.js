import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function PerfilOng({ ong, onBack }) {
  return (
    <Container className="perfil-ong-container">
      <Card className="p-4">
        <Row>
          <Col md={4}>
            <Card.Img 
              src={ong && ong.imagem ? ong.imagem : "https://www.blogueirosdasaude.org.br/wp-content/uploads/2017/12/simbolo.jpg"} 
              alt={`Imagem da ${ong?.nome || 'ONG'}`}
              className="perfil-ong-imagem" 
            />
          </Col>
          <Col md={8}>
            <h3>{ong?.nome || 'Nome da ONG não disponível'}</h3>
            <p>CNPJ: {ong?.cnpj || 'Não disponível'}</p>
            <p>Endereço: {ong?.endereco || 'Não disponível'}</p>
            <p>CEP: {ong?.cep || 'Não disponível'}</p>
            <p>Telefone: {ong?.telefone || 'Não disponível'}</p>
            <p>Email: {ong?.email || 'Não disponível'}</p>
            <Button onClick={onBack} variant="secondary" className="mt-3">Voltar</Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default PerfilOng;

