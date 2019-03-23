import css from 'styled-jsx/css'

const yellowButtonStyle = css.resolve`
  box-sizing: content-box;
  background: #f8f576;
  border: 1px solid #fdc228;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 18px 30px;
  transition: background-color .2s ease-in-out;
  
  :hover {
    background-color: #fdc228;
    color: inherit;
  }
  
  :hover,
  :visited,
  :active {
    text-decoration: none;
  }
  
  :disabled, :disabled:hover, :disabled:focus {
    cursor: not-allowed;
  }
`

export { yellowButtonStyle }
