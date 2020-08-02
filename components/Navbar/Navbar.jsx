import React, { useState } from 'react'
import Link from 'next/link'
import Container from '../Contatiner'

function Navbar () {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <Container>

      <nav className='flex items-center justify-between flex-wrap py-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <img src='/static/logo.png' alt='Programadores do amanhã' />
        </div>
        <div className='block lg:hidden'>
          <button
            onClick={toggleMenu}
            className='flex items-center px-3 py-2 border-2 rounded text-white border-white hover:border-white'
          >
            <svg
              className='fill-current h-4 w-4'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div
          className={`${!open ? 'hidden' : ''} w-full block flex-grow lg:flex lg:items-center lg:w-auto text-left lg:text-right`}
        >
          <div className='text-sm lg:flex-grow'>
            <Link href='#sobre-o-projeto'>
              <a className='block hover:text-pa-pink hover:font-bold mt-4 lg:inline-block lg:mt-0 text-base text-white mr-4'>
                O PROJETO
              </a>
            </Link>
            <Link href='#como-funciona'>
              <a className='block hover:text-pa-pink hover:font-bold mt-4 lg:inline-block lg:mt-0 text-base text-white mr-4'>
                COMO FUNCIONA
              </a>
            </Link>
            <Link href='#quem-somos'>
              <a className='block hover:text-pa-pink hover:font-bold mt-4 lg:inline-block lg:mt-0 text-base text-white mr-4'>
                QUEM SOMOS
              </a>
            </Link>
            <Link href='/redirecionar?utm_source=navbar'>
              <a className='block hover:text-pa-pink hover:font-bold mt-4 lg:inline-block lg:mt-0 text-base text-white'>
                COLABORAR
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default Navbar
