import css from 'styled-jsx/css'

const buttonStyle = css.resolve`
  box-sizing: content-box;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 18px 30px;
  transition: background-color .2s ease-in-out;
  
  :hover,:visited,:active {
    text-decoration: none;
  }

  :disabled, :disabled:hover, :disabled:focus {
    cursor: not-allowed;
  }
`

const yellowButtonStyle = css.resolve`
  background: #f8f576;
  border: none;
  
  [data-color=dark] {
    color: #3B333E;
  }

  :hover {
    background-color: #fdc228;
    color: inherit;
  }
`

const pinkButtonStyle = css.resolve`
  background: #e2006b;
  border: 1px solid #e0006a;
  color: #fff;

  :hover {
    background-color: #ff3e99;
  }
`

export {
  buttonStyle,
  yellowButtonStyle,
  pinkButtonStyle
}
