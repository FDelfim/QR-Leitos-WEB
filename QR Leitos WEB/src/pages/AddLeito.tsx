import React from 'react';
import { useEffect, useState } from 'react';

import NavBar from '../components/Navbar';

import './styles.css'

export default function AddLeito() {
    return (

        <div>
            <NavBar />
            <div className='titulo'>
                <h1>Adionar novo leito</h1>
            </div>

            <div className='campo'>
                <a className='description'>Nome do Leito</a>
                <input className="input"
                    placeholder='Ex.: Pediatria 1'>
                </input>
            </div>

            <div className='campo'>
                <a className='description'>Endereço</a>
                <div className='div-sub-description'>
                    <a className='sub-description'>Ala</a>
                    <input className="sub-input"
                        placeholder='Ex.: Ala Norte'>
                    </input>

                    <a className='sub-description'>Convênio</a>
                    <input className="sub-input"
                        placeholder='Ex.: Particular'>
                    </input>

                    <a className='sub-description'>Tipo</a>
                    <input className="sub-input"
                        placeholder='Ex.: Adulto'>
                    </input>
                </div>
            </div>

            <div className='button-div'>
                <button className='button-add-new'>
                    Adicionar Leito
                </button>
                <button className='button-cancel'>
                    Voltar
                </button>
            </div>
        </div>
    );
}