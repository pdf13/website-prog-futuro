import React, { useEffect } from 'react'

import RedirectBox from '../components/RedirectBox'

function Redirecionar() {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = 'https://programadoresdoamanha.apoiar.co/'
        }, 3000)
    }, [])

    return (
        <div style={{
            backgroundColor: '#3B333E',
            padding: '48px 32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
        }}>
            <RedirectBox></RedirectBox>
        </div>
    )
}

export default Redirecionar
