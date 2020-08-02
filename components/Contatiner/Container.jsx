import React from 'react'
import { node, string } from 'prop-types'

const Container = (props) => {
  const { children, className } = props
  return (
    <div className={`container mx-auto px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: node.isRequired,
  className: string
}

Container.defaultProps = {
  className: ''
}

export default Container
