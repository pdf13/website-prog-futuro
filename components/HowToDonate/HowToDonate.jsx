import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Title from '../Title'
import Button from '../Button'
import {
  bgStyle,
} from './HowToDonate.style'

function HowToDonate () {
  const { className: bgClassName, styles: bgCSS } = bgStyle

  return (
    <div className={bgClassName} style={{ paddingTop: 96, paddingBottom: 96 }} id='como-doar'>
      <Container>
        <Row>
          <Col>
            <Title arrows as='h2'>Como Colaborar?</Title>
            <p className='mt-4 text-justify'>
              Para colaborar com o Programadores, basta escolher o valor da sua colaboração mensal, por meio da plataforma
              Risü, e você já estará contribuindo para as próximas turmas do projeto.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center mt-4'>
            <Button pink className='mt-4' href='/redirecionar?utm_source=how-to-donate-button'>Quero colaborar!</Button>
          </Col>
        </Row>
      </Container>
      { bgCSS }
    </div>
  )

}

export default HowToDonate
