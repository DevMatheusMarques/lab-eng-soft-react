import {Link} from 'react-router-dom';
import React from 'react';
import Contador from "./Contador";

function Exercicio3() {
    return (
        <>
            <div className="card ms-5 me-5 mt-3 mb-3 border border-info-subtle">
                <div className="card-header border border-info-subtle bg-info-subtle">
                    Semana 2
                </div>
                <div className="card-body">
                    <h5 className="card-title">Exercício 3</h5>
                    <p className="card-text">
                        Implemente um App contador de pessoas.
                    </p><br/>
                    <Contador className="mt-5"/>
                    <Link to="/home" className="btn bg-info-subtle mt-5">Voltar</Link>
                </div>
            </div>
        </>
    );
}

export default Exercicio3;