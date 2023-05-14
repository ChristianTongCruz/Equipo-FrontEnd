import React from 'react'
import '../../styles/cabeza.css'
import Escudo from '../../img/Escudo.png'

export default function Header() {
    return (
        <header>
            <div className='escudoCabeza'>
                <img src={Escudo} alt="escudo" />
            </div>
        </header>
    )
}