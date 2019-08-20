import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Title from '../Title'

function WhoWeAreSection () {
  return (
    <div style={{ paddingTop: 96, paddingBottom: 96 }} id='quem-somos'>
      <Container>
        <Row>
          <Col>
            <Title arrows as='h2'>Quem somos</Title>
          </Col>
        </Row>
        <Row>
          <Col lg={4} sm={6} className='mt-4'>
            <Row bsPrefix='row align-items-center'>
              <Col xs={4}>
                <img src='http://i.pravatar.cc/80' className='img-fluid rounded-circle mx-auto d-block' />
              </Col>
              <Col xs={8}>
                <p className='h5 mb-0'>Cristiano Landa</p>
                <em>Sócio e Coordenador de Brand Design na Méliuz</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className='mt-4'>
            <Row bsPrefix='row align-items-center'>
              <Col xs={4}>
                <img src='http://i.pravatar.cc/80' className='img-fluid rounded-circle mx-auto d-block' />
              </Col>
              <Col xs={8}>
                <p className='h5 mb-0'>Fernanda Passos</p>
                <em>Designer de Produtos na Méliuz</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className='mt-4'>
            <Row bsPrefix='row align-items-center'>
              <Col xs={4}>
                <img src='http://i.pravatar.cc/80' className='img-fluid rounded-circle mx-auto d-block' />
              </Col>
              <Col xs={8}>
                <p className='h5 mb-0'>Lucas Marques</p>
                <em>Diretor de Operações, Sócio e Gerente de Operações na Méliuz</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className='mt-4'>
            <Row bsPrefix='row align-items-center'>
              <Col xs={4}>
                <img src='http://i.pravatar.cc/80' className='img-fluid rounded-circle mx-auto d-block' />
              </Col>
              <Col xs={8}>
                <p className='h5 mb-0'>Lúcia Aparecida Marques</p>
                <em>Pedagoga</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className='mt-4'>
            <Row bsPrefix='row align-items-center'>
              <Col xs={4}>
                <img src='http://i.pravatar.cc/80' className='img-fluid rounded-circle mx-auto d-block' />
              </Col>
              <Col xs={8}>
                <p className='h5 mb-0'>Luísa Souza</p>
                <em>Analista de Dados na Secretaria de Estado de Educação de Minas Gerais</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className='mt-4'>
            <Row bsPrefix='row align-items-center'>
              <Col xs={4}>
                <img src='http://i.pravatar.cc/80' className='img-fluid rounded-circle mx-auto d-block' />
              </Col>
              <Col xs={8}>
                <p className='h5 mb-0'>Marcelo Brenner</p>
                <em>Cofundador da Gamefik</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className='mt-4'>
            <Row bsPrefix='row align-items-center'>
              <Col xs={4}>
                <img src='http://i.pravatar.cc/80' className='img-fluid rounded-circle mx-auto d-block' />
              </Col>
              <Col xs={8}>
                <p className='h5 mb-0'>Pedro Dias</p>
                <em>Sócio e Coordenador de Desenvolvimento na Méliuz</em>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={6} className='mt-4'>
            <Row bsPrefix='row align-items-center'>
              <Col xs={4}>
                <img src='http://i.pravatar.cc/80' className='img-fluid rounded-circle mx-auto d-block' />
              </Col>
              <Col xs={8}>
                <p className='h5 mb-0'>Rosilaine de Oliveira</p>
                <em>Professora de Inglês</em>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

WhoWeAreSection.propTypes = {}

export default WhoWeAreSection
