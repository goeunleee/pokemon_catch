import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const CatchResult = ({ catchPer, hp, ball, status }) => {
    var test = 300 - (2 * hp)
    test = test * catchPer * ball
    test = test / 300
    test = test * status

    return (
        <>
            <h3>{catchPer}</h3>
            <h3>{hp}</h3>
            <h3>{ball}</h3>
            <h3>{status}</h3>
            {test}
        </>
    )
};
export default CatchResult;