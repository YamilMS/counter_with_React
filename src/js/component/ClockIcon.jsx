import React from "react";

const ClockIcon= ()=>{
    const styleClock={
        width: "80px",
        height: "100px",
        border: "1px solid white"
    }
    const styleSeconds={
        fontSize: "50px"
    }
    return <div>
        <div className="card text-white bg-dark mb-3 p-2 mx-3" style={styleClock}>
            <div className="card-body d-flex justify-content-center align-items-center p-0" >
            <h2 style={styleSeconds}>⏰</h2>
            </div>
        </div>
    </div>
}
export default ClockIcon;