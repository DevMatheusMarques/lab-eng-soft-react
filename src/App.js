import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Data from './components/Data';
import Exercicio1 from "./components/Exercicio1";
import React from "react";

function App() {
    const router = (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/exercicio1" element={<Exercicio1/>} />
        </Routes>
    );
  );
}


export default App;
