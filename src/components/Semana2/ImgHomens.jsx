import React from "react";
import imghomem from "../../assets/homem.jpg"

function ImgHomens() {
    return (
        <div className="div-img-homens">
            <img id="img-homens" className="img-homens" src={imghomem}
                 style={{width: "250px", justifyContent: "center", justifyItems: "center"}} alt="Homem"/>
        </div>
    );
}

export default ImgHomens;