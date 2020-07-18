import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Title from '../Title'

function WhoWeAreSection () {
  return (
    <div style={{ paddingTop: 96, paddingBottom: 96 }} id="quem-somos">
      <Container>
        <Row>
          <Col>
            <Title arrows as="h2">
              Quem apoia o projeto
            </Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Title as="h3">Parceiros</Title>
            <ul>
              <li>Casa Baanko</li>
              <li>Méliuz</li>
              <li>Gamefik</li>
              <li>SmartBot</li>
              <li>Dito</li>
              <li>Gooders</li>
              <li>Rock Content</li>
              <li>Psicologia Viva</li>
              <li>Opinion Box</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Title as="h3">Colaboradores e voluntários</Title>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="https://api.adorable.io/avatars/80/andre-menezes.png"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">André Menezes</p>
                <em>Presidente do Um pé de Biblioteca</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="https://api.adorable.io/avatars/80/barbara-alves.png"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Bárbara Alves</p>
                <em>Coordenadora de proojetos no Um pé de Biblioteca</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="https://api.adorable.io/avatars/80/rose-sparta.png"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Rose Sparta</p>
                <em>Professora de inglês</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="/static/Marques.jpeg"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Lucas Marques</p>
                <em>Idealizador</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="https://api.adorable.io/avatars/80/juliana-tavares.png"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Juliana Tavares</p>
                <em>Voluntária | Mentora</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="/static/Fernanda.jpeg"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Fernanda Passos</p>
                <em>Voluntária | Comunicação</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="https://api.adorable.io/avatars/80/ana-cristina.png"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Ana Cristina Teixeira</p>
                <em>Voluntária | Mentora</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="https://api.adorable.io/avatars/80/aurelio-favarin.png"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Aurélio Favarin</p>
                <em>Voluntário | Comunicação</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="/static/Cris.jpeg"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Cristiano Landa</p>
                <em>Sócio e Coordenador de Brand Design na Méliuz</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="/static/Lucia.jpeg"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Lúcia Aparecida Marques</p>
                <em>Pedagoga</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="/static/Luisa.jpeg"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Luísa Souza</p>
                <em>
                  Analista de Dados na Secretaria de Estado de Educação de Minas
                  Gerais
                </em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="/static/Marcelo.jpeg"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Marcelo Brenner</p>
                <em>Cofundador da Gamefik</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="/static/Pedro.jpeg"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Pedro Dias</p>
                <em>Sócio e Coordenador de Desenvolvimento na Méliuz</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className="mt-4">
            <Row bsPrefix="row align-items-center">
              <Col xs={4}>
                <img
                  src="/static/Rosilaine.jpeg"
                  className="img-fluid rounded-circle mx-auto d-block"
                />
              </Col>
              <Col xs={8}>
                <p className="h5 mb-0">Rosilaine de Oliveira</p>
                <em>Professora de Inglês</em>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

WhoWeAreSection.propTypes = {}

export default WhoWeAreSection
