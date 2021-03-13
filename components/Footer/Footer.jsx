import React from 'react'
import Container from '../Contatiner'
import Link from 'next/link'

function Footer () {
  return (
    <div className='bg-pa-purple'>
      <Container id="colaborar">
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-full sm:w-1/2 py-4 sm:py-12'>
            <div className='flex'>
              <img src='/static/logo.png' alt='Programadores do futuro' />
            </div>
          </div>
          <div className='w-full sm:w-1/2 py-4 sm:py-12'>
            <div className='flex items-center justify-evenly sm:justify-end'>
              <div>
                <Link href='https://www.linkedin.com/company/programadores-do-futuro/' prefetch={false}>
                  <a target='_blank'>
                    <img className='p-4' src='/static/linkedin.png' alt='Linkedin do Programadores do Amanhã' />
                  </a>
                </Link>
              </div>
              <div>
                <Link href='https://www.instagram.com/umpedebiblioteca/' prefetch={false}>
                  <a target='_blank'>
                    <img className='p-4' src='/static/instagram.png' alt='Linkedin do Programadores do Amanhã' />
                  </a>
                </Link>
              </div>
              <div>
                <Link href='mailto:contato@programadoresdoamanha.org' prefetch={false}>
                  <a target='_blank'>
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
