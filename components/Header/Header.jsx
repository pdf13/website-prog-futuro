import React from 'react'
import Navbar from '../Navbar'
import Title from '../Title'
import Button from '../Button'
import css from 'styled-jsx/css'

const bgStyle = css.resolve`
  @media (max-width: 992px) {
    background-position-x: 70%;
  }
`

function Header (props) {
  const { className: bgClassName, styles: bgStyles } = bgStyle
  const backgroundImage = { backgroundImage: 'url("/static/bg.png")' }

  return (
    <div className={`bg-cover bg-right h-screen flex flex-col ${bgClassName}`} style={backgroundImage}>
      <Navbar />
      <div className='container mx-auto px-4 flex flex-col text-left justify-center flex-grow'>
        <Title as='h1' className='max-w-sm sm:max-w-lg'>
          Programadores do amanhã
        </Title>
        <p className='text-lg sm:text-xl text-white leading-snug mt-2 mb-6'>
          Colabore com o projeto que vai multiplicar as oportunidades para
          jovens no mercado de tecnologia. Colabore com o projeto que vai
          multiplicar as oportunidades para jovens no mercado de
          tecnologia.
        </p>
        <div>
          <Button href='/redirecionar?utm_source=banner-button' className='p-5 bg-pa-yellow font-bold text-lg'>
            Quero colaborar!
          </Button>
        </div>
      </div>
      <div className='p-8'>
        <img src='/static/logo-pe-de-bibllioteca-header.png' alt='Logo da ONG Pé de Biblioteca' />
      </div>
      {bgStyles}
    </div>
  )
}

export default Header
