import css from 'styled-jsx/css'

const bgStyle = css.resolve`
  background-color: #f4f4f5;
`

const boxStyle = css.resolve`
  padding: 24px;
  color: white;
  background-color: #6ec69a;
  width: 100%;

  .card--blue {
    background-color: #597fc4;
  }

  .card--green {
    background-color: #6ec69a;
  }

  .card--orange {
    background-color: #e76f18;
  }
`

const boxDollarSignStyle = css.resolve`
  font-size: 21px;
  font-weight: bold;
  line-height: 25px;
  margin-right: 8px;
`

const boxValueStyle = css.resolve`
  font-size: 94px;
  font-weight: bold;
  line-height: 123px;
`

const boxCaptionStyle = css.resolve`
  font-size: 19px;
  line-height: 25px;
  margin-top: -16px;
`

export {
  bgStyle,
  boxDollarSignStyle,
  boxValueStyle,
  boxCaptionStyle,
  boxStyle
}
