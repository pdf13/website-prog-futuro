import React from 'react'
import { node } from 'prop-types'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { bgStyle, ctaStyle, navBarStyle, heroStyle } from './Header.style'
import Navbar from '../Navbar'
import Title from '../Title'
import Button from '../Button';

function Header (props) {
  const { className: bgClassName, styles: bgStyles } = bgStyle
  const { className: navbarClassName, styles: navbarStyles } = navBarStyle
  const { className: heroClassName, styles: heroStyles } = heroStyle
  const { className: ctaClassName, styles: ctaStyles } = ctaStyle
  const { children } = props

  return (
    <div className={bgClassName}>
      <div className={navbarClassName}>
        <Navbar />
      </div>
      <div className={heroClassName}>
        <Container>
          <Row className='align-items-center'>
            <Col sm={3} className='text-center pt-2 d-none d-sm-block'>
              <img src='/static/ch-header-left.svg' alt='setas coloridas apontando para a direita'/>
            </Col>
            <Col sm={4}>
              <Title color='light' as='h1'>
                Programadores<br />do futuro
              </Title>
            </Col>
            <Col xs={4} sm={5} className='text-center pt-2 d-none d-sm-block'>
              <img src='/static/ch-header-right.svg' alt='setas coloridas apontando para a direita'/>
            </Col>
          </Row>
          <Row>
            <Col sm={{span: 4, offset: 3}}>
              <Title color='light' as='h3'>
                Colabore com o projeto que vai
                capacitar jovens negros para o
                mercado de tecnologia.
              </Title>
              <Button href="/redirecionar?utm_source=banner-button">
                <span className={ctaClassName}>
                  Quero colaborar!
                </span>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      {bgStyles}
      {navbarStyles}
      {heroStyles}
      {ctaStyles}
      {children}
    </div>
  )
}

Header.propTypes = {
  children: node
}

Header.defaultProps = {
  children: null
}

export default Header
