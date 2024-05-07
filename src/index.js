import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import SelecaoExercicios from "./components/Semana1/SelecaoExercicios";
import Exercicio1 from "./components/Semana1/Exercicio1";
import Exercicio2 from "./components/Semana1/Exercicio2";
import Exercicio3 from "./components/Semana2/Exercicio3";

// Caminhos
const router = (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/selecao-exercicios/semana1" element={<SelecaoExercicios/>} />
        <Route path="/exercicio1" element={<Exercicio1/>} />
        <Route path="/exercicio2" element={<Exercicio2/>} />
        <Route path="/semana2/exercicio3" element={<Exercicio3/>} />
    </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>{router}</BrowserRouter> {/* Envolver o roteador em <BrowserRouter> */}
    </React.StrictMode>
);

