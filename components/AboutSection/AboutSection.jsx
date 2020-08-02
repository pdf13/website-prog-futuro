import React from 'react'
import Title from '../Title'
import Button from '../Button'
import Container from '../Contatiner'
import Carousel from '../Carousel'
import YouTube from 'react-youtube'

function AboutSection () {
  return (
    <Container className='my-8 md:my-16'>
      <div className='flex flex-wrap justify-start md:flex-row-reverse'>
        <div className='w-full md:w-1/2'>
          <div className=''>
            <Carousel />
          </div>
        </div>
        <div className='w-full md:w-1/2 pt-6 md:pt-0'>
          <Title arrows as='h2'> Sobre o projeto</Title>
          <p className='mt-6 md:mt-10 mb-6 md:mb-4'>
            O nosso sonho é oferecer a jovens negros e negras em situação de vulnerabilidade
            a oportunidade de inserção no mercado por meio de atividades de formação profissional
            na área de programação. E metade das vagas é destinada a garotas! Dessa forma
            ampliamos a empregabilidade dos alunos selecionados, transformando suas vidas,
            o mercado e a sociedade.
          </p>
          <Button color='pink' href='/redirecionar?utm_source=about-button'>
            Quero colaborar!
          </Button>
        </div>
      </div>
      <div className='flex flex-wrap justify-start'>
        <div className='w-full my-6 md:mb-12'>
          <Title as='h3'>
            Já estamos na segunda turma
          </Title>
        </div>
        <div className='w-full md:w-1/2 md:pr-8'>
          <div className='youtube-wrapper'>
            <YouTube videoId='KWJbf_a0TMk' />
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <p className='text-justify mt-4 md:mt-0'>
            Em 2020, o Programadores do Amanhã está atendendo 7 alunos, escolhidos ao longo
            de processos seletivos criteriosos, feito com alunos de escolas públicas e a
            realização de etapas presenciais com os candidatos.
          </p>

          <blockquote className='rounded-lg bg-gray-200 p-6 mt-4'>
            "Eu nunca imaginei que fosse fazer programação. Hoje em dia, já tenho
            em mente que quero me profissionalizar nessa área,&nbsp;
            <strong>
              porque acredito que vai me proporcionar um conhecimento que vai garantir
              o meu futuro
            </strong>"
            <br />
            <small>-- INGRID PAULINO, ALUNA DA PRIMEIRA TURMA DO PROGRAMADORES DO AMANHÃ</small>
          </blockquote>
        </div>
      </div>
    </Container>
  )
}

export default AboutSection
