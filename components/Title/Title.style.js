import css from 'styled-jsx/css'

const titleStyle = css.resolve`
  font-family: "Work Sans", sans-serif;
  display: flex;

  [color=light] {
    color: #fff;
  }

  [color=dark] {
    color: #3B333E;
  }
`

const decoratedTitleStyle = css.resolve`
  ::before,
  ::after {
    color: #D77538;
    content: ' ';
    display: inline-flex;
  }

  ::before {
    background-image: url('/static/ch-left.svg');
    background-size: 20px 25px;
    height: 25px;
    width: 20px;
    margin-right: 8px;
  }

  ::after {
    background-image: url('/static/ch-right.svg');
    background-size: 40px 25px;
    height: 25px;
    width: 40px;
    margin-left: 16px;
  }

  h1::before,
  h1::after {
    margin-top: 8px;
  }
`

const H1Style = css.resolve`
  font-size: 42px;
  line-height: 41px;
  font-weight: 900;
`

const H2Style = css.resolve`
  font-size: 27px;
  line-height: 27px;
  font-weight: 700;
`

const H3Style = css.resolve`
  font-size: 21px;
  line-height: 25px;
  font-weight: 400;
`

const H4Style = css.resolve`
  font-size: 19px;
  line-height: 25px;
  font-weight: 700;
`

export { titleStyle, decoratedTitleStyle, H1Style, H2Style, H3Style, H4Style }
