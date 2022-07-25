import React from 'react';
import { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

import './styles.css'

import database from '../firebase/database'
import NavBar from '../components/Navbar';

export default function Inicio() {

    var [livre, setLivres] = useState([])
    var [ocupados, setOcupados] = useState([])
    var [aLimp, setALimp] = useState([])
    var [aFor, setAFor] = useState([])
    var [ocupacao, setOcupacao] = useState(0)

    const [data, setData] = useState([][4])
    const [options, setOptions] = useState({
        colors: ['green', '#DB4437', 'blue', 'orange'],
        is3D: true,
        backgroundColor: '#dfdfdf',
        fontSize: 12,
    })

    useEffect(() => {
        database.collection("Leito").onSnapshot((querry) => {

            let list = [];
            let listL = [];
            let listO = [];
            let listAl = [];
            let listAf = [];

            querry.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });

            list.forEach((Leito) => {
                if (Leito.status.path == 'estadoDoLeito/livre') {
                    listL.push(Leito)
                }
            })

            list.forEach((Leito) => {
                if (Leito.status.path == 'estadoDoLeito/ocupado' || Leito.status.path == 'estadoDoLeito/em alta') {
                    listO.push(Leito)
                }
            })

            list.forEach((Leito) => {
                if (Leito.status.path == 'estadoDoLeito/aguardando higienizacao' || Leito.status.path == 'estadoDoLeito/em higienizacao') {
                    listAl.push(Leito)
                }
            })

            list.forEach((Leito) => {
                if (Leito.status.path == 'estadoDoLeito/aguardando forragem' || Leito.status.path == 'estadoDoLeito/em processo de forragem') {
                    listAf.push(Leito)
                }
            })

            setLivres(listL)
            setOcupados(listO)
            setALimp(listAl)
            setAFor(listAf)

            let dados = [['Leitos', 'Quantiade'],
            ['Livres', listL.length],
            ['Ocupados', listO.length],
            ['Higienização', listAl.length],
            ['Forragem', listAf.length]]

            setData(dados)

            setOcupacao(() => {
                return listO.length * 100 / list.length
            })

        })
    }, [])



    return (
        <div>
            <NavBar />
            <div>
                <div className="titulo">
                    <h1>Painel administrativo QR Leitos</h1>
                </div>

                <div className="all-box">
                    <div>
                        <div className="box-graph">
                            <a className="title-box">Estados dos Leitos</a>
                            <div>
                                <Chart
                                    width={'100%'}
                                    height={'100%'}
                                    chartType="PieChart"
                                    data={data}
                                    options={options}
                                />
                            </div>
                        </div>
                        <div className="box-graph">
                            <a className="title-box">Usuários Cadastrados</a>
                        </div>
                    </div>
                    <div className="head">
                        <div className="box">
                            <a className="title-box"></a>
                        </div>
                        <div className="box">
                            <a className="title-box"></a>
                        </div>
                        <div>
                            <a>Endereço</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
