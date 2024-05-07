import React from "react";

function Total({ total }) {
    return (
        <div id="total" className="total card border-2 border-black" style={{ margin: "0 auto", fontSize: "30px", width: "120px", textAlign: "center" }}>
            {total}
        </div>
    );
};

export default Total;
