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
          Você pode apoiar se tornando mentor e compartilhar parte da sua experiência com aqueles
          que estão começando. Ou pode contribuir financeiramente e garantir que nosso apoio chegue
          a mais jovens pelo Brasil. 
        </p>
        <Button className='mt-12 mr-4' href='/redirecionar?utm_source=how-to-donate-button'>
          Quero ser mentor(a)
        </Button>
        <Button color='pink' className='mt-12' href='/redirecionar?utm_source=how-to-donate-button'>
          Quero doar!
        </Button>
      </Container>
    </div>
  )
}

export default HowToDonate
