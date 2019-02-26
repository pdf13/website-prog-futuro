import css from 'styled-jsx/css'

const navbarStyle = css.resolve`
  nav {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .navbar-light :global(.navbar-nav .nav-link) {
    font-size: 13px;
    line-height: 25px;
    color: #fff;
  }

  .navbar-light :global(.navbar-toggler) {
    color: #fff;
    border-color: #fff;
  }

  .navbar-light :global(.navbar-toggler-icon) {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.75)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
  }
`

export { navbarStyle }
