import React, { useState } from "react";
import InserirHomens from "./InserirHomens";
import ExcluirHomens from "./ExcluirHomens";
import InserirMulher from "./InserirMulher";
import ExcluirMulher from "./ExcluirMulher";
import Titulo from "./Titulo";
import Total from "./Total";
import ImgHomens from "./ImgHomens";
import ImgMulher from "./ImgMulher";
import TotalHomens from "./TotalHomens";
import TotalMulheres from "./TotalMulheres";

const Contador = () => {
    const [total, setTotal] = useState(0);
    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);

    const inserirHomens = () => {
        setHomens((prevHomens) => prevHomens + 1);
        setTotal((prevTotal) => prevTotal + 1);
    };

    const excluirHomens = () => {
        if (homens > 0) {
            setHomens((prevHomens) => prevHomens - 1);
            setTotal((prevTotal) => prevTotal - 1);
        }
    };

    const inserirMulheres = () => {
        setMulheres((prevMulheres) => prevMulheres + 1);
        setTotal((prevTotal) => prevTotal + 1);
    };

    const excluirMulheres = () => {
        if (mulheres > 0) {
            setMulheres((prevMulheres) => prevMulheres - 1);
            setTotal((prevTotal) => prevTotal - 1);
        }
    };

    return (
        <div id="container">
            <Titulo />
            <Total total={total} />

            <div className="d-flex justify-content-center">
                <div>
                    <ImgHomens />
                    <TotalHomens homens={homens} />
                    <div className="d-flex justify-content-center">
                        <InserirHomens onClick={inserirHomens} />
                        <ExcluirHomens onClick={excluirHomens} />
                    </div>
                </div>
                <div>
                    <ImgMulher />
                    <TotalMulheres mulheres={mulheres} />
                    <div className="d-flex justify-content-center">
                        <InserirMulher onClick={inserirMulheres} />
                        <ExcluirMulher onClick={excluirMulheres} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contador;
