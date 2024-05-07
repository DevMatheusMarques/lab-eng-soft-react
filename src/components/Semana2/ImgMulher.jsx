import React from "react";
import imgmulher from "../../assets/mulher.jpg"

function ImgMulher() {
    return (
        <div className="div-img-mulher">
            <img id="img-mulheres" className="img-mulheres mx-auto text-center" src={imgmulher}
                 style={{width: "250px", justifyContent: "center"}} alt="Mulher"/>
        </div>
    );
}

export default ImgMulher;