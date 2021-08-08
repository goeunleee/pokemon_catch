import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const CatchStatus = ({ setStatus }) => {
    const [now, setNow] = useState("")
    const status = [
        { "status": "독", "value": 1.5, "color": "btn btn-success" },
        { "status": "맹독", "value": 1.5, "color": "btn btn-dark" },
        { "status": "화상", "value": 1.5, "color": "btn btn-danger" },
        { "status": "마비", "value": 1.5, "color": "btn btn-warning" },
        { "status": "얼음", "value": 2.5, "color": "btn btn-info" },
        { "status": "잠듦", "value": 2.5, "color": "btn btn-secondary" }
    ]
    const onClick = (event) => {
        if (event.target.id === now){
            console.log(event.target.id)
            setNow("")
            setStatus(1)
        } else {
            setNow(event.target.id)
            setStatus(event.target.value)
        }
    };

    return (
        <div class="col-md-5 mx-auto">
                <div class="col mb-1">
                    상태이상
                </div>
                <div class="col">
                {status.map((stat, index) => (
                    <button type="button" class={stat["color"]} value={stat["value"]} onClick={onClick} id={stat["status"]}
                        style={{ button_radius: "5px", margin: "3px", width: "90px" }}>
                        {stat["status"]}
                    </button>
                ))}
                </div>
        </div>
    )
};
export default CatchStatus;