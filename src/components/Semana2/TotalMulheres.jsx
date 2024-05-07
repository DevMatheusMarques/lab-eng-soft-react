import React from "react";

const TotalMulheres = ({ mulheres }) => {
    return (
        <div id="total" className="total card border-2 border-black"
             style={{margin: "0 auto", fontSize: "30px", width: "120px", textAlign: "center"}}>
            <h2>{mulheres}</h2>
        </div>
    );
};

export default TotalMulheres;
