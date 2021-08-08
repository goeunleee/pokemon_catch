import React from "react";
import CatchCss from "./catch.css";
import 'bootstrap/dist/css/bootstrap.css';

const CatchStatus = ({ hp, setHp }) => {
    const onChange = (event) => {
        setHp(event.target.value)
    }

    return (
        <div class="col mx-auto">
            <div class="row mx-auto">
                현재 체력(%) : {hp}
            </div>
            <div class="row mx-auto mt-2 form-group">
                <input
                    type="range" value={hp} class="form-range"
                    min="1" max="100" onChange={onChange} />
            </div>
        </div>
    )
};
export default CatchStatus;