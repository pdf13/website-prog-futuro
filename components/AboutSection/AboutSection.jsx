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
            O nosso sonho é oferecer a jovens negros e negras em situação de vulnerabilidade
            a oportunidade de inserção no mercado por meio de atividades de formação profissional
            na área de programação. E metade das vagas é destinada a garotas! Dessa forma
            ampliamos a empregabiliadde dos alunos selecionados, transformando suas vidas,
            o mercado e a sociedade.
          </p>
        </Col>
        <Col sm={5} className='text-center'>
          <img src='/static/garota-programadora.png' alt='Garota programadora' />
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col xs={12}>
          <Title as='h3' className='mb-5'> Já estamos na segunda turma! </Title>
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
                src='/static/sobre-o-programa-4.png'
                alt='Ingrid e Maxuel aprendendo as primeiras lições de programação' />
            </Item>
          </Carousel>
        </Col>
        <Col md={7}>
          <p className='text-justify mt-4 mt-md-0'>
            Em 2020, o Programadores do Amanhã está atendendo 7 alunos, escolhidos ao longo
            de processos seletivos criteriosos, feito com alunos de escolas públicas e a
            realização de etapas presenciais com os candidatos.
          </p>

          <blockquote>
            "Eu nunca imaginei que fosse fazer programação. Hoje em dia, já tenho
            em mente que quero me profissionalizar nessa área, <strong>porque
            acredito que vai me proporcionar um conhecimento que vai garantir
            o meu futuro</strong>"
            <br/>
            <small>-- INGRID PAULINO, ALUNA DA PRIMEIRA TURMA DO PROGRAMADORES DO AMANHÃ</small>
          </blockquote>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutSection
