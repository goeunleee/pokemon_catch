import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const WeakState = ({ first, setFirst, second, setSecond, types, color }) => {

    const style = {
        button_radius: "10px", margin: "3px", width: "100px", height: "50px"
    }
    const clearFeature = (event) => {
        if (event.target.id === "1") {
            setFirst(18);
        } else {
            setSecond(18);
        }
    }

    return (
        <div class="row mx-auto justify-content-center">
            <button onClick={clearFeature} class="col border" style={{button_radius: "10px", margin: "3px", width: "100px", height: "50px", background: color[first]}} id="1">{types[first]}</button>
            <button onClick={clearFeature} class="col border" style={{button_radius: "10px", margin: "3px", width: "100px", height: "50px", background: color[second]}} id="2">{types[second]}</button>
        </div>
    )
};
export default WeakState;