import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { bgStyle } from './HowWorksSection.style'
import Title from '../Title'
import Button from '../Button'

function HowWorksSection () {
  const { className: bgClassName, styles: bgCSS } = bgStyle

  return (
    <div className={bgClassName} style={{ paddingTop: 96, paddingBottom: 96 }}>
      <Container>
        <Row>
          <Col xs={12}>
            <Title arrows as='h2'>Como funciona?</Title>
            <p className='mt-4 text-justify'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that 
              it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col md={4} lg={3} className='text-center'>
            <img src='/static/icone-livro.png' alt='livro simbolizando as aulas de inglês' />
          </Col>
          <Col md={8} lg={9}>
            <strong>O Inglês</strong>
            <p className='mt-3 text-justify'>
              It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. The point of 
              using Lorem Ipsum is that it has a more-or-less normal distribution of
            </p>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col md={4} lg={3} className='text-center'>
            <img src='/static/icone-pc.png' alt='computador simbolizando as aulas de programação' />
          </Col>
          <Col md={8} lg={9}>
            <strong>A Programação</strong>
            <p className='mt-3 text-justify'>
              It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. The point of 
              using Lorem Ipsum is that it has a more-or-less normal distribution of
            </p>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col md={4} lg={3} className='text-center'>
            <img src='/static/icone-engrenagem.png' alt='engrenagens simbolizando o mercado de trabalho' />
          </Col>
          <Col md={8} lg={9}>
            <strong>O Mercado de Trabalho</strong>
            <p className='mt-3 text-justify'>
              It is a long established fact that a reader will be distracted by the 
              readable content of a page when looking at its layout. The point of 
              using Lorem Ipsum is that it has a more-or-less normal distribution of
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-justify'>
              It is a long established fact that a reader will be distracted by the readable con-
              tent of a page when looking at its layout. The point of using Lorem Ipsum.
            </p>
            <div className='text-center mt-4'>
              <Button pink>
                Quero colaborar!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      {bgCSS}
    </div>
  )
}

export default HowWorksSection
