import React from 'react'
import Title from '../Title'
import Button from '../Button'
import Container from '../Contatiner'
import Carousel from '../Carousel'
import YouTube from 'react-youtube'

function AboutSection () {
  return (
    <Container className='my-8 md:my-16' id='o-que-fazemos'>
      <div className='flex flex-wrap justify-start md:flex-row-reverse'>
        <div className='w-full md:w-2/5 self-center'>
          <div className='md:px-4'>
            <img
              className='block m-auto'
              src='/static/sobre-o-programa-1.png'
              alt='Selecionados para a primera turma Ingrid e Maxuel exibem seus nootebooks que ganharam de presente'
            />
          </div>
        </div>
        <div className='w-full md:w-3/5 pt-6 md:pt-0'>
          <Title arrows as='h2'>O que fazemos</Title>
          <p className='mt-6 md:mt-10 mb-6 md:mb-4'>
            <span className="font-semibold">
              Nosso foco é despertar e multiplicar o potencial de jovens negros através da tecnologia.
            </span>&nbsp;
            <span>
              Por meio do nosso Programa de formação, meninos e meninas têm a oportunidade de
              desenvolver habilidades técnicas e comportamentais que os (as) preparam para o mercado
              de trabalho. Além do ensino de programação, o Programa também conta com a formação em
              inglês e apoio emocional através da terapia individualizada com profissionais de
              psicologia.
            </span>
          </p>
          <Button color='pink' href='/redirecionar?utm_source=about-button'>
            Quero doar!
          </Button>
        </div>
      </div>
      <div className='flex flex-wrap justify-start mt-16'>
        <div className='w-full md:w-1/5 md:pr-8'>
          <img
            className='block m-auto'
            src='/static/Ingrid.png'
            alt='Ingrid Paulino segurando um notebook nos braços'
          />
        </div>
        <div className='w-full md:w-4/5 self-center'>
          <p className='text-justify mt-4 md:mt-0'>
            50% das vagas são destinadas à meninas<br />
            100% focado em jovens negros<br />
            100% dedicado a estudantes de escolas públicas
          </p>

          <blockquote className='rounded-lg bg-gray-200 p-6 mt-4 text-justify'>
            "Antes do Programadores do Amanhã, meu conhecimento em Programação era a “Tela Azul”
            que dava no meu computador quando travava. Agora tenho desejo de fazer carreira em
            tecnologia e cursar faculdade na área."
            <br />
            <small>-- INGRID PAULINO, ALUNA DA PRIMEIRA TURMA DO PROGRAMADORES DO AMANHÃ</small>
          </blockquote>
        </div>
      </div>
    </Container>
  )
}

export default AboutSection
