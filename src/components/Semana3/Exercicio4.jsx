import React from 'react';
import Gallery from './Gallery';
import Profile2 from './Profile2';
import TodoList1 from './TodoList1';
import TodoList2 from './TodoList2';
import Profile3 from './Profile3';
import PackingList from './PackingList';
import List from './List';
import TeaSet from './TeaSet';
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

export default function Exercicio4() {
    return (
        <>
            <Navbar/>
            <div className="card ms-5 me-5 mt-3 mb-3 border border-info-subtle">
                <div className="card-header border border-info-subtle bg-info-subtle">
                    Semana 3
                </div>
                <div className="card-body">
                    <h5 className="card-title">Exercício 4</h5>
                    <p className="card-text mb-5">
                        Componentes:
                    </p><br/>
                    <Gallery/><br/><br/>
                    <Profile2/><br/><br/>
                    <TodoList1/><br/><br/>
                    <TodoList2/><br/><br/>
                    <Profile3/><br/><br/>
                    <PackingList/><br/><br/>
                    <List/><br/><br/>
                    <TeaSet/><br/><br/>
                    <Link to="/home" className="btn bg-info-subtle mt-5 border border-info-subtle">Voltar</Link>
                </div>
            </div>
        </>
    );
}
