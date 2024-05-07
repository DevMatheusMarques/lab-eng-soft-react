import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Home.css';
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="container" style={{paddingTop: '10%'}}>
            <div className="card ms-5 me-5 border border-info-subtle card-style">
                <div className="card-header border border-info-subtle bg-info-subtle">
                    <h1>Trabalho de Laboratório de Engenharia</h1>
                </div>
                <div className="card-body">
                    <p className="card-text text-home">Este é um projeto que estou desenvolvendo durante as aulas de Laboratório
                        de Engenharia de Software (Os exercícios estão sendo atualizados por semana). Sinta-se à vontade
                        para me acompanhar os próximos capítulos desta saga de aprendizado 😄🚀 <br/><br/>❌ Por favor,
                        respeite os direitos autorais deste trabalho e evite qualquer forma de cópia não autorizada.❌
                    </p>
                </div>
            </div>
            <div className="card ms-5 me-5 border border-info-subtle card-style" style={{marginTop: '50px'}}>
                <div className="card-header border border-info-subtle bg-info-subtle">
                    <h1>Manual</h1>
                </div>
                <div className="card-body">
                    <p className="card-text text-home">Este projeto conta com um painel de navegação que você pode utilizar para
                        acessar os exercícios feitos por mim até o momento e testa-los da melhor maneira possível
                        😄🚀 <br/><br/>⚠️ Todos os exercícios possuem botões para voltar a tela anterior, use-os sempre
                        que quiser retornar a pagina anterior ⚠️</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;