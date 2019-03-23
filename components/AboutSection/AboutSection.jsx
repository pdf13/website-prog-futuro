import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Carousel, { Item } from 'react-bootstrap/Carousel'
import Title from '../Title'

function AboutSection () {

  return (
    <Container style={{ paddingTop: 96, paddingBottom: 96 }}>
      <Row>
        <Col sm={7}>
          <Title arrows as='h2'> Sobre o projeto</Title>
          <p className='mt-4 text-justify'>
            It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default.
          </p>
        </Col>
        <Col sm={5} className='text-center'>
          <img src='/static/garota-programadora.png' alt='Garota programadora' />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col xs={12}>
          <Title as='h3' className='mb-5'> Nossa primeira turma já começou</Title>
        </Col>
        <Col md={5}>
          <Carousel controls={false}>
            <Item className='text-center'>
              <img
                className='img-fluid'
                src='/static/sobre-o-programa-1.png'
                alt='Selecionados para a primera turma Ingrid e Maxuel exibem seus nootebooks que ganharam de presente' />
            </Item>
            <Item className='text-center'>
              <img
                className='img-fluid'
                src='/static/sobre-o-programa-2.png'
                alt='Primeira aula de programação na escola Codebuddy' />
            </Item>
            <Item className='text-center'>
              <img
                className='img-fluid'
                src='/static/sobre-o-programa-3.png'
                alt='Ingrid e Maxuel conhecem os primeiros professores de programação' />
            </Item>
            <Item className='text-center'>
              <img
                className='img-fluid'
                src='/static/sobre-o-programa-4.png'
                alt='Ingrid e Maxuel aprendendo as primeiras lições de programação' />
            </Item>
          </Carousel>
        </Col>
        <Col md={7}>
          <p className='text-justify mt-4 mt-md-0'>
            It is a long established fact that a readerwill be distracted by the readable content of a page when looking at its layout. The point of 
            using Lorem Ipsum is that it has a more-or-less normal distribution of It is a long established fact that a readerwill be distracted by the 
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutSection
