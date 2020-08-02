import React from 'react'
import { node, string, oneOf, bool } from 'prop-types'

import { decoratedTitleStyle } from './Title.style'

const h1Classes = 'text-5xl sm:text-6xl font-black break-all leading-tight'
const H1 = ({ children, className, arrows }) => (
  <h1 className={`${className} ${h1Classes}`}>{children}</h1>
)

const h2Classes = 'text-2xl sm:text-3xl font-bold'
const H2 = ({ children, className, as, arrows }) => (
  <h2 className={`${className} ${h2Classes}`}>{children}</h2>
)

const h3Classes = 'text-xl font-semibold'
const H3 = ({ children, className, as, arrows }) => (
  <h3 className={`${className} ${h3Classes}`}>{children}</h3>
)

function Title (props) {
  const { children, arrows, as, className, light } = props

  let Component = H1

  switch (as) {
    case 'h1':
      Component = H1
      break

    case 'h2':
      Component = H2
      break

    case 'h3':
      Component = H3
      break

    default:
      break
  }

  return (
    <Component
      className={
        `
         flex items-center
         ${className}
         ${light ? 'text-white' : 'text-black'}
         ${arrows ? decoratedTitleStyle.className : ''}
        `
      }
      arrows={arrows}
    >
      {children}
      {decoratedTitleStyle.styles}
    </Component>
  )
}

Title.propTypes = {
  children: node.isRequired,
  as: oneOf(['h1', 'h2', 'h3']).isRequired,
  className: string,
  light: bool
}

Title.defaultProps = {
  className: '',
  light: false
}

export default Title
