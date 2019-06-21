import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { wrapperStyle } from './Footer.style'

function Footer () {
  const { className: wrapperClassName, styles: wrapperStyles } = wrapperStyle

  return (
    <div className={wrapperClassName}>
      <Container>
        <Row className='align-items-center'>
          <Col xs={4} className='text-left pt-2 d-none d-md-block'>
            <img src='/static/ch-header-left.svg' alt='setas coloridas apontando para a direita' />
          </Col>
          <Col md={4} className='text-center'>
            <img src='/static/logo.png' alt='Programadores do futuro' />
          </Col>
          <Col xs={4} className='text-right pt-2 d-none d-md-block'>
            <img src='/static/ch-header-right.svg' alt='setas coloridas apontando para a direita' />
          </Col>
        </Row>
      </Container>
      { wrapperStyles }
    </div>
  )
}

export default Footer
