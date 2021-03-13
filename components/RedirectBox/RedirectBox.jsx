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
                <div className="text-center" style={{padding: "32px 32px 64px"}}>
                    <div className="grid grid-cols-2 gap-4 items-center mb-5">
                        <div className="text-center">
                            <img src="/static/logo-laranja.png" classNam="m-auto" alt="Logomarca Programadores do Futuro" />
                        </div>
                        <div className="text-center">
                            <img src="/static/logo-risu.png" classNam="m-auto" alt="Logomarca Programadores do Futuro" />
                        </div>
                    </div>
                    <div className="mt-10">
                        Estamos te redirecionando para a página da Risu,
                        onde você poderá concluir sua colaboração com o Programadores do Amanhã. 
                    </div>
                </div>
            </div>
            <div className="text-center mt-4 text-sm">
                <p className="text-white mb-0">Não foi redirecionado automaticamente?</p>
                <a style={{color: '#F5DE67'}} href="http://risu.com.br/doar/programadores-do-futuro">Clique e conclua a sua colaboração</a>
            </div>
            {cardCSS}
            {progressCSS}
            {progressInnerCSS}
            {rootCSS}
        </div>
    );
}

export default RedirectBox;
