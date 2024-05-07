import React from "react";

const TotalHomens = ({ homens }) => {
    return (
        <div id="total" className="total card border-2 border-black"
             style={{margin: "0 auto", fontSize: "30px", width: "120px", textAlign: "center"}}>
            <h2>{homens}</h2>
        </div>
    );
};

export default TotalHomens;
