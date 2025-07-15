import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row className="mb-4">
        <h1>Bem-vindo ao sistema PIB</h1>
        <p className="lead">Use esse sistema para gerenciar o sistema PIB</p>
      </Row>

      <Row className="gy-4">
        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Membros</Card.Title>
              <Card.Text>
                Gerencie aqui os membros que fazem parte da Primeira Igreja
                Batista de Osvaldo Cruz (PIB).
              </Card.Text>
              <Link to="/membros" className="btn btn-primary">
                Ir para membros
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
