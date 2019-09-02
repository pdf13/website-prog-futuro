import React from 'react';

import { rootStyle, cardStyle, progressStyle, progressInnerStyle } from './RedirectBox.style';

function RedirectBox() {
    const { className: cardClassName, styles: cardCSS } = cardStyle;
    const { className: rootClassName, styles: rootCSS } = rootStyle;
    const { className: progressClassName, styles: progressCSS } = progressStyle;
    const { className: progressInnerClassName, styles: progressInnerCSS } = progressInnerStyle;

    return (
        <div className={rootClassName}>
            <div className={cardClassName}>
                <div className={progressClassName}>
                    <span className={progressInnerClassName} />
                </div>
                <div className="container-fluid text-center" style={{padding: '32px 32px 64px'}}>
                    <div className="row align-items-center logos">
                        <div className="col-sm">
                            <img src='/static/logo-laranja.png' alt='Logomarca Programadores do Futuro' />
                        </div>
                        <div className="col-sm">
                            <img src='/static/logo-risu.png' alt='Logomarca Programadores do Futuro' />
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5 info'>
                        <div className="col-sm-10">
                            Estamos te redirecionando para a página da Um Pé de Biblioteca,
                            onde você poderá concluir sua colaboração com o Programadores do Futuro. 
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-4'>
                <p className='text-white mb-0'>Não foi redirecionado automaticamente?</p>
                <a style={{color: '#F5DE67'}} href='http://risu.com.br/doar/programadores-do-futuro'>Clique e conclua a sua colaboração</a>
            </div>
            {cardCSS}
            {progressCSS}
            {progressInnerCSS}
            {rootCSS}
        </div>
    );
}

export default RedirectBox;
