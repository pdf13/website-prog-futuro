import css from 'styled-jsx/css'

const rootStyle = css.resolve`
    width: 100%;
    max-width: 448px;
`

const cardStyle = css.resolve`
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
    overflow: hidden;
`

const progressStyle = css.resolve`
    height: 20px;  /* Can be anything */
    position: relative;
    background: #555;
    box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
`

const progressInnerStyle = css.resolve`
    display: block;
    height: 20px;
    background-color: #FF3778;
    position: relative;
    overflow: hidden;

    ::after {
        animation: move 2s linear infinite;
        content: "";
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        background-image: linear-gradient(
            -45deg, 
            rgba(255, 255, 255, .2) 25%, 
            transparent 25%, 
            transparent 50%, 
            rgba(255, 255, 255, .2) 50%, 
            rgba(255, 255, 255, .2) 75%, 
            transparent 75%, 
            transparent
        );
        z-index: 1;
        background-size: 50px 50px;
        animation: move 2s linear infinite;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow: hidden;
    }

    @keyframes move {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 50px 50px;
        }
    }
`

export { rootStyle, cardStyle, progressStyle, progressInnerStyle }
