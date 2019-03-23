import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Carousel, { Item } from 'react-bootstrap/Carousel'
import { carouselItemStyle } from './AboutSection.style'
import Title from '../Title'

function AboutSection () {
  const { className: carouselItemClassName, styles: carouselItemCSS } = carouselItemStyle

  return (
    <Container>
      <Row style={{ marginTop: 96 }}>
        <Col sm={7}>
          <Title arrows as='h3'> Sobre o projeto</Title>
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
              <img className="img-fluid" src='/static/sobre-o-programa-1.png' alt=''/>
            </Item>
            <Item className='text-center'>
              <img className="img-fluid" src='/static/sobre-o-programa-2.png' alt=''/>
            </Item>
            <Item className='text-center'>
              <img className="img-fluid" src='/static/sobre-o-programa-3.png' alt=''/>
            </Item>
            <Item className='text-center'>
              <img className="img-fluid" src='/static/sobre-o-programa-4.png' alt=''/>
            </Item>
          </Carousel>
        </Col>
        <Col md={5}>
          <p className='text-justify mt-4 mt-md-0'>
            It is a long established fact that a readerwill be distracted by the 
            readable content of a page when looking at its layout. The point of 
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            It is a long established fact that a readerwill be distracted by the 
            readable content of a page when looking at its layout. The point of 
            using Lorem Ipsum is that it has a more-or-less normal distribution of
          </p>
        </Col>
      </Row>
      {carouselItemCSS}
    </Container>
  )
}

export default AboutSection
