import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border border-info-subtle bg-info-subtle">
            <div className="container-fluid">
                <Link to="" className="navbar-brand">Projeto React</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/semana1/selecao-exercicios" className="nav-link">Semana 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/semana2/exercicio3" className="nav-link">Semana 2</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;