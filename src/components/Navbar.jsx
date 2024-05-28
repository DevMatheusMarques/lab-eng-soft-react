import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border border-info-subtle bg-info-subtle mb-5">
            <div className="container-fluid">
                <Link to="" className="navbar-brand">Projeto React</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0" style={{marginLeft: 20 + "rem"}}>
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/semana1/selecao-exercicios" className="nav-link">Semana 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/semana2/exercicio3" className="nav-link">Semana 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/semana3/exercicio4" className="nav-link">Semana 3</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Semana 4
                            </Link>
                            <ul className="dropdown-menu border border-info-subtle bg-info-subtle">
                                <li><Link className="dropdown-item" to="/semana4/bucketlist">Bucket List</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/counter">Contador</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/counterlist">Lista de Contadores</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/form">Formulário</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/form2">Formulário 2</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/form3">Formulário 3</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/gallery">Galeria</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/list">Lista</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/list2">Lista 2</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/list3">Lista 3</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/list4">Lista 4</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/movingdot">Ponto em Movimento</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/shapeeditor">Editor de Formas</Link></li>
                                <hr className="dropdown-divider"/>
                                <li><Link className="dropdown-item" to="/semana4/toolbar">Barra de Ferramentas</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;