import React from 'react'
import Container from '../Contatiner'
import Title from '../Title'
import Button from '../Button'
import Carousel from '../Carousel'

function HowWorksSection () {
  return (
    <div className='bg-pa-silver'>
      <Container className='py-8 md:py-16' id='como-funciona'>
        <Title arrows as='h2'>Como funciona?</Title>
        <p className='mt-6 md:mt-10 mb-3'>
           O Programa dura dois anos e é dedicado para jovens a partir de 15 anos que estejam
           cursando o ensino médio. Durante a formação, as alunas e alunos terão acesso à:
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
              Formação técnica que vai do ensino de lógica à desenvolvimento web e app.
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
              <Title as='h3' className='mb-4'>Inglês</Title>
              Formação completa em inglês com metodologia que possibilita a compreensão avançada da
              língua até o fim do curso.
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
              <Title as='h3' className='mb-4'>Preparação para o mercado de Trabalho</Title>
              Ao longo de toda a formação os jovens recebem apoio de mentoras (es) e participam de
              de atividades que desenvolvem as habilidades comportamentais demandadas pelo mercado
              de trabalho.
            </p>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default HowWorksSection
