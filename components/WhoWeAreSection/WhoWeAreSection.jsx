import Link from 'next/link'
import React from 'react'
import Container from '../Contatiner'
import Title from '../Title'

function WhoWeAreSection () {
  return (
    <Container className='py-8 md:py-16'>
      <Title as='h2' arrows>Quem apoia o projeto</Title>
      <div>
        <Title as='h3' className='mt-12'>Parceiros</Title>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 text-center'>
          <li>
            <Link href='https://www.instagram.com/casabaanko/' prefetch={false}>
              <a target='blank'>
                <img src='/static/casa-banko.png' alt='Casa Banko' className='inline-block' />
                <p className='mt-4'>Casa Baanko</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.dito.com.br/' prefetch={false}>
              <a target='blank'>
                <img src='/static/dito.png' alt='Dito' className='inline-block' />
                <p className='mt-4'>Dito</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://gamefik.com/' prefetch={false}>
              <a target='blank'>
                <img src='/static/gamefik.png' alt='Gamefik' className='inline-block' />
                <p className='mt-4'>Gamefik</p>
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
            <Link href='https://www.meliuz.com.br' prefetch={false}>
              <a target='blank'>
                <img src='/static/meliuz.png' alt='Méliuz' className='inline-block' />
                <p className='mt-4'>Méliuz</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.opinionbox.com/' prefetch={false}>
              <a target='blank'>
                <img src='/static/opinion-box.png' alt='Opinion Box' className='inline-block' />
                <p className='mt-4'>Opinion Box</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.psicologiaviva.com.br/' prefetch={false}>
              <a target='blank'>
                <img src='/static/psicologia-viva.png' alt='Psicologia viva' className='inline-block' />
                <p className='mt-4'>Psicologia viva</p>
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://rockcontent.com/' prefetch={false}>
              <a target='blank'>
                <img src='/static/rock-content.png' alt='Rock Content' className='inline-block' />
                <p className='mt-4'>Rock Content</p>
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
      <div className='mt-20'>
        <Title as='h3'>Colaboradoes e voluntários</Title>
        <ul className='mt-12 py-8 px-6 bg-pa-silver grid sm:grid-cols-2 gap-4 rounded'>
          <li className='flex items-center'>
            <img
              src='https://api.adorable.io/avatars/80/andre-menezes.png'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              André Menezes <br />
              <em className='uppercase'>Presidente do Um pé de Biblioteca</em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='https://api.adorable.io/avatars/80/barbara-alves.png'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Bárbara Alves <br />
              <em className='uppercase'>Coordenadora de proojetos no Um pé de Biblioteca</em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='/static/Marques.jpeg'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Lucas Marques <br />
              <em className='uppercase'>Idealizador</em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='https://api.adorable.io/avatars/80/juliana-tavares.png'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Juliana Tavares <br />
              <em className='uppercase'>Voluntária | Mentora</em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='/static/Fernanda.jpeg'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Fernanda Passos <br />
              <em className='uppercase'>Voluntária | Comunicação</em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='https://api.adorable.io/avatars/80/ana-cristina.png'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Ana Cristina Teixeira <br />
              <em className='uppercase'>Voluntária | Mentora</em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='https://api.adorable.io/avatars/80/aurelio-favarin.png'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Aurélio Favarin <br />
              <em className='uppercase'>Voluntário | Comunicação</em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='/static/Cris.jpeg'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Cristiano Landa <br />
              <em className='uppercase'>Voluntário | Comunicação</em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='/static/Lucia.jpeg'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Lúcia Aparecida Marques <br />
              <em className='uppercase'>Pedagoga</em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='/static/Luisa.jpeg'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Luísa Souza <br />
              <em className='uppercase'> </em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='/static/Marcelo.jpeg'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Marcelo Brenner <br />
              <em className='uppercase'> </em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='/static/Pedro.jpeg'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Pedro Dias <br />
              <em className='uppercase'>Voluntário | Comunicação</em>
            </p>
          </li>
          <li className='flex items-center'>
            <img
              src='/static/Rosilaine.jpeg'
              className='rounded-full w-16 h-16'
            />
            <p className='ml-4 text-sm'>
              Rosilaine de Oliveira <br />
              <em className='uppercase'>Professora de inglês</em>
            </p>
          </li>
        </ul>
        <p className='text-center mt-6'>Quer ser um voluntário? <a href='#'>Clique aqui</a></p>
      </div>
    </Container>
  )
}

export default WhoWeAreSection
