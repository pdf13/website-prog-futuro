import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Carousel, { Item } from 'react-bootstrap/Carousel'
import Title from '../Title'

function AboutSection () {

  return (
    <Container style={{ paddingTop: 96, paddingBottom: 96 }} id='sobre-o-projeto'>
      <Row>
        <Col sm={7}>
          <Title arrows as='h2'> Sobre o projeto</Title>
          <p className='mt-4 text-justify'>
            O maior sonho do Programadores do Futuro é ajudar a transformar a realidade do mercado de tecnologia,
            em que apenas cerca de 10% dos profissionais são pessoas negras. O objetivo do projeto é oferecer a
            jovens negros e negras em situação de vulnerabilidade socioeconômica, desde já, a oportunidade de
            capacitação profissional que os prepare para ingressar no mercado de trabalho de computação.
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
            No início de 2019, demos início à primeira turma do Programadores, com a Ingrid
            e o Maxuell! Os dois foram escolhidos ao longo de um processo seletivo em que
            recebemos indicações de escolas estaduais e realizamos entrevistas com os candidatos
            para conhecê-los melhor. Em fevereiro, os dois já começaram animados a frequentar
            suas aulas de inglês e de programação.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutSection
