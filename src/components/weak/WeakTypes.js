import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const WeakTypes = ({ first, setFirst, second, setSecond, types, color }) => {
    
    const onClick = (event) => {
        const value = parseInt(event.target.value);
        if (first === value) {
            setFirst(18);
        } else if (second === value) {
            setSecond(18);
        } else {
            if (first === 18) {
                setFirst(value);
            } else if (second === 18) {
                setSecond(value);
            }
        }
    };

    return (
        <div>
            {types.map((type, index) => (
                <button type="button"
                    style={{ button_radius: "5px", margin: "3px", background: color[index], width: "90px" }}
                    className={first === index ? "btn col-md-2 alert-danger" : second === index ? "btn col-md-2 alert-primary" : "btn col-md-2"}
                    value={index} onClick={onClick}>{type}</button>
            ))}
        </div>
    )
};
export default WeakTypes;