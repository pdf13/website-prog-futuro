import React from 'react'
import Navbar from '../Navbar'
import Title from '../Title'
import Button from '../Button'
import css from 'styled-jsx/css'
import Container from '../Contatiner'

// TODO: Remove styled-jsx dependency
const bgStyle = css.resolve`
  @media (max-width: 992px) {
    background-position-x: 70%;
  }s
`

function Header (props) {
  const { className: bgClassName, styles: bgStyles } = bgStyle
  const backgroundImage = { backgroundImage: 'url("/static/bg.png")' }

  return (
    <div className={`bg-cover bg-right h-screen flex flex-col ${bgClassName}`} style={backgroundImage}>
      <Navbar />
      <Container className='flex flex-col text-left justify-center flex-grow'>
        <Title as='h1' className='max-w-sm sm:max-w-lg' light>
          Programadores do amanhã
        </Title>
        <p className='text-lg sm:text-xl text-white leading-snug mt-2 max-w-xl'>
          Colabore com o projeto que vai multiplicar as oportunidades para
          jovens no mercado de tecnologia. Colabore com o projeto que vai
          multiplicar as oportunidades para jovens no mercado de
          tecnologia.
        </p>
        <div className='mt-6'>
          <Button href='/redirecionar?utm_source=banner-button' color='yellow'>
            Quero colaborar!
          </Button>
        </div>
      </Container>
      <Container className='py-8'>
        <img src='/static/logo-pe-de-bibllioteca-header.png' alt='Logo da ONG Pé de Biblioteca' />
      </Container>
      {bgStyles}
    </div>
  )
}

export default Header
