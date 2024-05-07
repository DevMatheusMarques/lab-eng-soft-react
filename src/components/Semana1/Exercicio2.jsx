import {Link} from 'react-router-dom';
import React from 'react';
import Letreiro from "./Letreiro";
import Navbar from "../Navbar";

function Exercicio2() {
    return (
        <>
            <Navbar/>
            <div className="card ms-5 me-5 mt-5 border border-info-subtle">
                <div className="card-header border border-info-subtle bg-info-subtle">
                    Semana 1
                </div>
                <div className="card-body">
                    <h5 className="card-title">Exercício 2</h5>
                    <p className="card-text">
                        Implemente um componente react com um letreiro que simule a digitação do texto Conheça a Fatec de forma
                        que a digitação fique em looping.
                    </p><br/>
                    <Letreiro className="mt-5"/>
                    <Link to="/semana1/selecao-exercicios" className="btn bg-info-subtle mt-5">Voltar</Link>
                </div>
            </div>
        </>
    );
}

export default Exercicio2;