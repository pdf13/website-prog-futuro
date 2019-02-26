import React from 'react'
import BsNavbar, { Brand, Toggle, Collapse } from 'react-bootstrap/Navbar'
import BsNav, { Link as NavLink } from 'react-bootstrap/Nav'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'

import { navbarStyle } from './Navbar.style'

function Navbar () {
  const navbarId = 'navbar-menu';
  const { className, styles } = navbarStyle

  return (
    <BsNavbar bg='transparent' expand='lg' className={className}>
      <Container>
        <Link href='/' passHref prefetch>
          <Brand>
            <img src='/static/logo.png' alt='Programadores do futuro' />
          </Brand>
        </Link>
        <Toggle aria-controls={`${navbarId}`} />
        <Collapse id={`${navbarId}`}>
          <BsNav className='ml-auto'>
            <Link href='/projeto' passHref prefetch>
              <NavLink>
                O PROJETO
              </NavLink>
            </Link>
            <Link href='/como-funciona' passHref prefetch>
              <NavLink>
                COMO FUNCIONA
              </NavLink>
            </Link>
            <Link href='/quem-somos' passHref prefetch>
              <NavLink>
                QUEM SOMOS
              </NavLink>
            </Link>
            <Link href='/colaborar' passHref prefetch>
              <NavLink>
                COLABORAR
              </NavLink>
            </Link>
          </BsNav>
        </Collapse>
        { styles }
      </Container>
    </BsNavbar>
  )
}

export default Navbar
