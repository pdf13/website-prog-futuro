import React from 'react'
import Container from '../Contatiner'
import Title from '../Title'
import Button from '../Button'
import Carousel from '../Carousel'

function HowWorksSection () {
  return (
    <div className='bg-pa-silver'>
      <Container className='py-8 md:py-16'>
        <Title arrows as='h2'>Como funciona?</Title>
        <p className='mt-6 md:mt-10 mb-3'>
           Os alunos recebem capacitação profissional por meio do ensino de programação, inglês
           e acompanhamento para ajudá-los a se prepararem para o mercado de tecnologia.
        </p>
        <ul>
          <li className='flex flex-col md:flex-row items-center mt-10'>
            <div style={{ minWidth: 152 }} className='md:mr-3'>
              <img
                src='/static/icone-pc.png'
                alt='computador simbolizando as aulas de programação'
              />
            </div>
            <p className='text-justify'>
              <Title as='h3' className='mb-4'>Programação</Title>
              Muitos desenvolvedores aprenderam a programar muito antes das aulas da faculdade, e
              no "Programadores do Amanhã" nós fazemos o mesmo. Os alunos tem aulas de programação
              já no ensino básico, e ao final do curso, poderão se inserir no mercado de trabalho
              como programadores.
            </p>
          </li>
          <li className='flex flex-col md:flex-row items-center mt-10'>
            <div style={{ minWidth: 152 }} className='md:mr-3'>
              <img
                src='/static/icone-livro.png'
                alt='livro simbolizando as aulas de inglês'
              />
            </div>
            <p className='text-justify'>
              <Title as='h3' className='mb-4'>Porque aprender Inglês?</Title>
              Inglês é o idioma mais que oficial de toda a comunidade de tecnologia, sendo um
              requisito básico para grande parte das vagas de trabalho no mercado de computação.
              Por isso, nossos alunos recebem aulas de inglês ao longo de todo o projeto.
            </p>
          </li>
          <li className='flex flex-col md:flex-row items-center mt-10'>
            <div style={{ minWidth: 152 }} className='md:mr-3'>
              <img
                src='/static/icone-engrenagem.png'
                alt='engrenagens simbolizando o mercado de trabalho'
              />
            </div>
            <p className='text-justify'>
              <Title as='h3' className='mb-4'>O Mercado de Trabalho</Title>
              Aprender a programar, além de desenvolver habilidades importantes, como lógica e
              resolução de problemas, abre as portas para o futuuro, afinal profissões ligadas a
              tecnologia estão entre as que mais ganham espaço no mercado. No Programadores do
              Amanhã os alunos participam de atividades preparatórias para o mercado de trabalho,
              visitam empresas do setor de tecnologia e recebem mentorias.
            </p>
          </li>
        </ul>
        <div className='bg-white rounded p-10 mt-8'>
          <div className='flex flex-col items-center md:flex-row-reverse'>
            <div className='w-full md:w-3/4 mb-10 md:mb-0'>
              <Carousel />
            </div>
            <div className='w-full'>
              <Title as='h3' className='mb-4'>E durante a quarentena?</Title>
              <p className='text-justify md:pr-6'>
                Distantes sim, mas sempre conectados! Os desafios trazidos pela
                quarentena foram muitos, mas não paramos. Como não podemos nos
                reunir presencialmente, as atividades agora são virtuais. No momento,
                as visitas às empresas de tecnologia estão suspensas, mas todo mês
                acontece um bate-papo com profissionais da área de tecnologia.
              </p>
              <Button color='pink' href='/redirecionar?utm_source=how-works-button' className='mt-4'>
                Quero colaborar!
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HowWorksSection
