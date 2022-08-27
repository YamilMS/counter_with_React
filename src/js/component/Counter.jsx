import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


const Counter= ({seconds})=>{

    const styleCounter={
        width: "80px",
        height: "100px",
        border: "1px solid white"
    }

    const styleSeconds={
        fontSize: "60px"
    }
   

    return <div>
        <div className="card text-white bg-dark mb-3 p-2 mx-3" style={styleCounter}>
            <div className="card-body d-flex justify-content-center align-items-center p-0" >
                <h2 style={styleSeconds}>{seconds}</h2>
            </div>
        </div>
    </div>
}

export default Counter 