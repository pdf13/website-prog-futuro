import Link from 'next/link'
import React from 'react'
import Container from '../Contatiner'
import Title from '../Title'

function WhoWeAreSection () {
  return (
    <Container className='py-8 md:py-16' id='quem-somos'>
      <Title as='h2' arrows>Quem apoia o projeto</Title>
      <div>
        <Title as='h3' className='mt-12'>Mantenedores</Title>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 text-center'>
          <li>
            <Link href='https://www.meliuz.com.br' prefetch={false}>
              <a target='blank'>
                <img src='/static/meliuz.png' alt='Méliuz' className='inline-block' />
                <p className='mt-4'>Méliuz</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Title as='h3' className='mt-12'>Parceiros</Title>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 text-center'>
          <li>
            <Link href='https://www.dito.com.br/' prefetch={false}>
              <a target='blank'>
                <img src='/static/dito.png' alt='Dito' className='inline-block' />
                <p className='mt-4'>Dito</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://goodersofficial.com/' prefetch={false}>
              <a target='blank'>
                <img src='/static/gooders.png' alt='Gooders' className='inline-block' />
                <p className='mt-4'>Gooders</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.smarttbot.com/' prefetch={false}>
              <a target='blank'>
                <img src='/static/smartbot.png' alt='Smarttbot' className='inline-block' />
                <p className='mt-4'>Smarttbot</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Title as='h3' className='mt-12'>Parceiros</Title>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 text-center'>
          <li>
            <Link href='https://www.psicologiaviva.com.br/' prefetch={false}>
              <a target='blank'>
                <img src='/static/psicologia-viva.png' alt='Psicologia viva' className='inline-block' />
                <p className='mt-4'>Psicologia viva</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default WhoWeAreSection
