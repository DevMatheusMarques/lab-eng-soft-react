import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Exercicio1 from "./components/Exercicio1";

// Caminhos
const router = (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/exercicio1" element={<Exercicio1/>} />
    </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>{router}</BrowserRouter> {/* Envolver o roteador em <BrowserRouter> */}
    </React.StrictMode>
);

