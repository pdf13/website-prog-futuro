import React from 'react'
import { string, node, func, oneOfType } from 'prop-types'
import Link from 'next/link'
import { yellowButtonStyle } from './Button.style'

function Button(props) {
  const { href, children, onClick } = props
  const { className: yellowButtonClassName, styles: yellowButtonStyles } = yellowButtonStyle

  if (href) {
    return (
      <Link prefetch href={href}>
        <a className={yellowButtonClassName}>
          {children}
          {yellowButtonStyles}
        </a>
      </Link>
    )
  }

  return (
    <button className={yellowButtonClassName} onCLick={onClick}>
      {children}
      {yellowButtonStyles}
    </button>
  )
}

Button.propTypes = {
  href: string,
  children: oneOfType([string, node]).isRequired,
  onClick: func
}

Button.defaultProps = {
  href: null,
  onClick: () => {}
}

export default Button
