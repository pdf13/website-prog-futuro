import React from 'react'
import Container from '../Contatiner'
import Link from 'next/link'

function Footer () {
  return (
    <div className='bg-pa-purple'>
      <Container>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full sm:w-1/2 py-4 sm:py-12'>
            <div className='flex justify-around items-center'>
              <div>
                <img src='/static/logo.png' alt='Programadores do futuro' />
              </div>
              <div>
                <img src='/static/logo-pe-de-bibllioteca-header.png' alt='Logo da ONG Pé de Biblioteca' />
              </div>
            </div>
          </div>
          <div className='w-full sm:w-1/2 py-4 sm:py-12'>
            <div className='flex items-center justify-evenly sm:justify-end'>
              <div>
                <Link href='https://www.linkedin.com/company/programadores-do-futuro/' prefetch={false}>
                  <a>
                    <img className='p-4' src='/static/linkedin.png' alt='Linkedin do Programadores do Amanhã' />
                  </a>
                </Link>
              </div>
              <div>
                <Link href='mailto:' prefetch={false}>
                  <a>
                    <img className='p-4' src='/static/mail.png' alt='Email do Programadores do Amanhã' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
