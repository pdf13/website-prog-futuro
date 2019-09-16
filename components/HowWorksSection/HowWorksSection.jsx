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
              Ao longo de dois anos, ofereceremos às turmas a capacitação profissional por meio
              do ensino de inglês, aulas de programação e mentorias personalizadas para ajudar
              os jovens alunos a se prepararem para o mercado de trabalho de tecnologia.
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
              Idioma mais que oficial em toda a comunidade de tecnologia, o inglês hoje já
              é requisito básico para grande parte das vagas de trabalho no mercado de
              computação. Por isso, nossos alunos receberão aulas de inglês ao longo de todo o projeto.
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
              Muitos desenvolvedores aprenderam a programar muito antes das aulas da faculdade, e
              com o Programadores do Futuro queremos fazer o mesmo. Nossos alunos terão aulas de programação
              ainda no ensino básico, e ao final do projeto a turma ainda vai participar de um
              bootcamp de programação para aplicar seus aprendizados na área.
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
              Segundo o Bureau of Labor Statistics do EUA, profissões ligadas à tecnologia estão entre as
              que mais crescem. Aprender a programar, além de desenvolver habilidades importante no presente,
              como lógica e resolução de problemas, abre portas para o futuro. Num mercado carente de bons
              profissionais de TI, a tendência é que essa busca se intensifique cada vez mais. Uma outra porta
              que se abre é a do empreendedorismo, que é extremante facilitado a partir do momento que o
              jovem aprende a programar.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='text-center mt-4'>
              <Button pink href='/redirecionar?utm_source=how-works-button'>
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
