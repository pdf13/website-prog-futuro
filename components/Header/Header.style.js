import css from 'styled-jsx/css'

const bgStyle = css.resolve`
  background-image: url('/static/bg.png');
  background-size: cover;
  background-position: right;
  height: 100vh;
  flex-direction: column;

  @media (max-width: 992px) {
    background-position-x: right 20%;
  }
  `

const navBarStyle = css.resolve``

const heroStyle = css.resolve`
  margin-top: 16vh;

  @media (min-width: 768px) {
    margin-top: 25vh;
  }
`

const ctaStyle = css.resolve`
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
`

export {
  bgStyle,
  ctaStyle,
  navBarStyle,
  heroStyle
}
