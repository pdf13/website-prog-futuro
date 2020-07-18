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
    <div className={bgClassName} style={{ paddingTop: 96, paddingBottom: 96 }} id='como-funciona'>
      <Container>
        <Row>
          <Col xs={12}>
            <Title arrows as='h2'>Como funciona?</Title>
            <p className='mt-4 text-justify'>
              Os alunos recebem capacitação profissional por meio do ensino de programação, inglês
              e acompanhamento para ajudá-los a se prepararem para o mercado de tecnologia.
            </p>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col md={4} lg={3} className='text-center'>
            <img src='/static/icone-pc.png' alt='computador simbolizando as aulas de programação' />
          </Col>
          <Col md={8} lg={9}>
            <strong>Programação</strong>
            <p className='mt-3 text-justify'>
              Muitos desenvolvedores aprenderam a programar muito antes das aulas da faculdade, e
              no "Programadores do Amanhã" nós fazemos o mesmo. Os alunos tem aulas de programação
              já no ensino básico, e ao final do curso, poderão se inserir no mercado de trabalho
              como programadores.
            </p>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col md={4} lg={3} className='text-center'>
            <img src='/static/icone-livro.png' alt='livro simbolizando as aulas de inglês' />
          </Col>
          <Col md={8} lg={9}>
            <strong>Porque aprender Inglês?</strong>
            <p className='mt-3 text-justify'>
              Inglês é o idioma mais que oficial de toda a comunidade de tecnologia, sendo um
              requisito básico para grande parte das vagas de trabalho no mercado de computação.
              Por isso, nossos alunos recebem aulas de inglês ao longo de todo o projeto.
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
              Aprender a programar, além de desenvolver habilidades importantes, como lógica e 
              resolução de problemas, abre as portas para o futuuro, afinal profissões ligadas a
              tecnologia estão entre as que mais ganham espaço no mercado. No Programadores do
              Amanhã os alunos participam de atividades preparatórias para o mercado de trabalho,
              visitam empresas do setor de tecnologia e recebem mentorias.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Title as="h3">E durante a quarentena?</Title>
            <p>
              Distantes sim, mas sempre conectados! Os desafios trazidos pela
              quarentena foram muitos, mas não paramos. Como não podemos nos
              reunir presencialmente, as atividades agora são virtuais. No momento,
              as visitas às empresas de tecnologia estão suspensas, mas todo mês
              acontece um bate-papo com profissionais da área de tecnologia.
            </p>
            <Button pink href='/redirecionar?utm_source=how-works-button' className='mt-4'>
              Quero colaborar!
            </Button>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
      {bgCSS}
    </div>
  )
}

export default HowWorksSection
