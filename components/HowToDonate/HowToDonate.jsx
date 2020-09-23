import React from 'react'
import Title from '../Title'
import Button from '../Button'
import Container from '../Contatiner'

function HowToDonate () {
  return (
    <div className='bg-pa-silver'>
      <Container className='py-8 md:py-16'>
        <Title arrows as='h2'>Como Colaborar?</Title>
        <p className='mt-12'>
          Para colaborar com o Programadores, basta escolher o valor da sua colaboração mensal, por meio da plataforma
          Risü, e você já estará contribuindo para as próximas turmas do projeto.
        </p>
        <Button color='pink' className='mt-12' href='/redirecionar?utm_source=how-to-donate-button'>Quero colaborar!</Button>
      </Container>
    </div>
  )
}

export default HowToDonate
