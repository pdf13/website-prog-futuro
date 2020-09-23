import React from 'react'
import { node, string } from 'prop-types'

const Container = (props) => {
  const { children, className, id } = props
  return (
    <div className={`container mx-auto px-4 xl:px-0 ${className}`} style={{maxWidth: 952}} id={id}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: node.isRequired,
  className: string,
  id: string
}

Container.defaultProps = {
  className: '',
  id: ''
}

export default Container
