import React from 'react';
import { useEffect, useState } from 'react';
import FlatList from 'flatlist-react';
import { FixedSizeList as List } from 'react-window';

import './styles.css'

import database from '../firebase/database'
import NavBar from '../components/Navbar';

export default function Leitos() {

    const [leitos, setLeitos] = useState([]);

    function formataData(data) {
        var dia = data.getDate().toString().padStart(2, '0'),
            mes = (data.getMonth() + 1).toString().padStart(2, '0'),
            ano = data.getFullYear(),
            hora = data.getHours().toString().padStart(2, '0'),
            minuto = data.getMinutes().toString().padStart(2, '0');

        return dia + "/" + mes + "/" + ano + ' - ' + hora + ':' + minuto;
    }

    function Leito(props) {
        return (
            <div className='content'>
                <div className='head-leitos'>
                    <a>{props.value.codigo.toString()}</a>
                </div>
                <div className='head-estado'>
                    <a>{props.value.status.path.substr(14, props.value.status.path.length)}</a>
                </div>
                <div className='head-lastmod'>
                    <a>{formataData(new Date(props.value.ultimaMod.toDate()))}</a>
                </div>
            </div>
        )
    }

    useEffect(() => {
        database.collection("Leito").onSnapshot((querry) => {
            let list = [];
            querry.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setLeitos(list);
        })
    }, [])

    return (
        <div>
            <NavBar />

            <div>
                <div className="titulo">
                    <h1>Leitos</h1>
                </div>

                <div className='search'>
                    <input className="search-bar"
                        placeholder='Pesquisar Leito'></input>

                    <button className='button'>
                        Pesquisar
                    </button>
                </div>

                <div className='head'>
                    <div className='head-leitos'>
                        <a>Leito</a>
                    </div>
                    <div className='head-estado'>
                        <a>Estado</a>
                    </div>
                    <div className='head-lastmod'>
                        <a>Ultima Modificação</a>
                    </div>
                </div>

                <div>
                    {leitos.map((leito) => (<Leito key={leito.id} value={leito} />))}
                </div>
            </div>
        </div >
    )
}