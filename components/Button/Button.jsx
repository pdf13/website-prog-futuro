import React from 'react'
import { string, node, func, oneOfType, bool } from 'prop-types'
import Link from 'next/link'
import { yellowButtonStyle, pinkButtonStyle, buttonStyle } from './Button.style'

function Button (props) {
  const { href, children, onClick, pink, dark, className } = props
  const { className: buttonClassName, styles: buttonStyles } = buttonStyle
  const { className: yellowButtonClassName, styles: yellowButtonStyles } = yellowButtonStyle
  const { className: pinkButtonClassName, styles: pinkButtonStyles } = pinkButtonStyle

  const [colorClassName, colorStyles] = pink ? [pinkButtonClassName, pinkButtonStyles] : [yellowButtonClassName, yellowButtonStyles]

  if (href) {
    return (
      <Link href={href}>
        <a className={`${buttonClassName} ${colorClassName} ${className}`} data-color={dark ? 'dark' : 'light'}>
          {children}
          {colorStyles}
          {buttonStyles}
        </a>
      </Link>
    )
  }

  return (
    <button className={`${buttonClassName} ${colorClassName} ${className}`} onCLick={onClick} data-color={dark ? 'dark' : 'light'}>
      {children}
      {colorStyles}
      {buttonStyles}
    </button>
  )
}

Button.propTypes = {
  href: string,
  children: oneOfType([string, node]).isRequired,
  onClick: func,
  pink: bool,
  dark: bool,
  className: string
}

Button.defaultProps = {
  href: null,
  onClick: () => {},
  dark: false,
  className: ''
}

export default Button
