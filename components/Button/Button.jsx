import React from 'react'
import { string, node, func, oneOfType, bool } from 'prop-types'
import Link from 'next/link'
import { yellowButtonStyle, pinkButtonStyle, buttonStyle } from './Button.style'

function Button(props) {
  const { href, children, onClick, pink } = props
  const { className: buttonClassName, styles: buttonStyles } = buttonStyle
  const { className: yellowButtonClassName, styles: yellowButtonStyles } = yellowButtonStyle
  const { className: pinkButtonClassName, styles: pinkButtonStyles } = pinkButtonStyle

  const [className, styles] = pink ? [pinkButtonClassName, pinkButtonStyles] : [yellowButtonClassName, yellowButtonStyles]

  if (href) {
    return (
      <Link prefetch href={href}>
        <a className={`${buttonClassName} ${className}`}>
          {children}
          {styles}
          {buttonStyles}
        </a>
      </Link>
    )
  }

  return (
    <button className={`${buttonClassName} ${className}`} onCLick={onClick}>
      {children}
      {styles}
      {buttonStyles}
    </button>
  )
}

Button.propTypes = {
  href: string,
  children: oneOfType([string, node]).isRequired,
  onClick: func,
  pink: bool
}

Button.defaultProps = {
  href: null,
  onClick: () => {}
}

export default Button
