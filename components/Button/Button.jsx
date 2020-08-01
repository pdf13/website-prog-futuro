import React from 'react'
import { string, node, func, oneOfType } from 'prop-types'
import Link from 'next/link'

function Button (props) {
  const { href, children, onClick, color, className } = props

  const commonClasses = 'p-5 font-bold text-lg'
  const styles = {
    yelllow: 'bg-pa-yellow',
    pink: 'bg-pa-pink text-white'
  }

  const colorClasses = `${commonClasses} ${styles[color]}`

  if (href) {
    return (
      <Link href={href}>
        <a className={`${colorClasses} ${className}`}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button className={`${colorClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  href: string,
  children: oneOfType([string, node]).isRequired,
  onClick: func,
  color: string,
  className: string
}

Button.defaultProps = {
  href: null,
  onClick: () => {},
  className: '',
  color: 'yellow'
}

export default Button
