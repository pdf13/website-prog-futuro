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
        <Link href='/'>
          <Brand>
            <img src='/static/logo.png' alt='Programadores do futuro' />
          </Brand>
        </Link>
        <Toggle aria-controls={`${navbarId}`} />
        <Collapse id={`${navbarId}`}>
          <BsNav className='ml-auto'>
            <NavLink href='#sobre-o-projeto'>
              O PROJETO
            </NavLink>
            <NavLink href='#como-funciona'>
              COMO FUNCIONA
            </NavLink>
            <NavLink href='#quem-somos'>
              QUEM SOMOS
            </NavLink>
            <Link href='/redirecionar?utm_source=navbar' passHref>
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
