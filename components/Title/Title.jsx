import React from 'react'
import createComponentFromTag from 'react-create-component-from-tag-prop'
import { node, oneOf } from 'prop-types'

import { titleStyle, decoratedTitleStyle, H1Style, H2Style, H3Style, H4Style } from './Title.style'

function Title (props) {
  const { children, as, arrows, ...otherProps } = props
  const { className: titleClassName, styles: titleCSS } = titleStyle

  const Component = createComponentFromTag({
    tag: as,
    prop: 'as',
    propsToOmit: [ 'tag' ]
  })

  const stylesMap = {
    h1: H1Style,
    h2: H2Style,
    h3: H3Style,
    h4: H4Style
  }

  return (
    <Component className={`${titleClassName} ${stylesMap[as].className} ${arrows ? decoratedTitleStyle.className : ''}`} {...otherProps}>
      { children }
      { titleCSS }
      { stylesMap[as].styles }
      { decoratedTitleStyle.styles }
    </Component>
  )
}

Title.propTypes = {
  children: node,
  as: oneOf(['h1', 'h2', 'h3', 'h4']).isRequired
}

export default Title
