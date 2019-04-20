import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Title from '../Title'
import Button from '../Button'
import {
  bgStyle,
  boxDollarSignStyle,
  boxValueStyle,
  boxCaptionStyle,
  boxStyle
} from './HowToDonate.style'

function HowToDonate () {
  const { className: bgClassName, styles: bgCSS } = bgStyle
  const { className: boxClassName, styles: boxCSS } = boxStyle
  const { className: boxValueClassName, styles: boxValueCSS } = boxValueStyle
  const { className: boxCaptionClassName, styles: boxCaptionCSS } = boxCaptionStyle
  const { className: boxDollarSignClassName, styles: boxDollarSignCSS } = boxDollarSignStyle

  return (
    <div className={bgClassName} style={{ paddingTop: 96, paddingBottom: 96 }}>
      <Container>
        <Row>
          <Col>
            <Title arrows as='h2'>Como Colaborar?</Title>
            <p className='mt-4 text-justify'>
              Para colaborar com o Programadores, basta escolher o valor da sua colaboração mensal, por meio do
              PayPal(?), e você já estará contribuindo para as próximas turmas do projeto.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className='mx-1 mr-sm-1 mt-3 text-center'>
              <div className={`${boxClassName} py-4 px-3 pb-4 pb-sm-5 card--green`}>
                <span className={boxDollarSignClassName}>R$</span>
                <span className={boxValueClassName}>10</span>
                <p className={boxCaptionClassName}>por mês</p>
                <Button dark>Colaborar</Button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className='mx-1 mx-sm-1 mt-3 text-center'>
              <div className={`${boxClassName} py-4 px-3 pb-4 pb-sm-5 card--blue`}>
                <span className={boxDollarSignClassName}>R$</span>
                <span className={boxValueClassName}>20</span>
                <p className={boxCaptionClassName}>por mês</p>
                <Button dark>Colaborar</Button>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className='mx-1 ml-sm-1 mt-3 text-center'>
              <div className={`${boxClassName} py-4 px-3 pb-4 pb-sm-5 card--orange`}>
                <span className={boxDollarSignClassName}>R$</span>
                <span className={boxValueClassName}>30</span>
                <p className={boxCaptionClassName}>por mês</p>
                <Button dark>Colaborar</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='text-center mt-4'>
            <Button pink className='mt-4'>Escolher outro valor</Button>
          </Col>
        </Row>
      </Container>
      { bgCSS }
      { boxCSS }
      { boxValueCSS }
      { boxCaptionCSS }
      { boxDollarSignCSS }
    </div>
  )

}

export default HowToDonate
