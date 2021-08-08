import React, { useState } from "react";
import CatchSearch from '../components/catch/CatchSearch';
import CatchHp from '../components/catch/CatchHp';
import CatchBall from '../components/catch/CatchBall';
import CatchStatus from '../components/catch/CatchStatus';
import CatchResult from '../components/catch/CatchResult';
import 'bootstrap/dist/css/bootstrap.css';

const Catch = () => {
    const [catchPer, setCatchPer] = useState(255)
    const [hp, setHp] = useState(100)
    const [ball, setBall] = useState(1)
    const [status, setStatus] = useState(1)
    return (
        <>
            <div className="jumbotron">
                <h1>포켓몬 포획률 계산기</h1>
                <hr />
                <CatchSearch setCatchPer={setCatchPer} />
                <hr />
                <div class="row">
                    <div class="col-md-3" >
                        <CatchHp hp={hp} setHp={setHp} />
                        <CatchBall ball={ball} setBall={setBall} />
                    </div>
                    <CatchStatus setStatus={setStatus}/>
                </div>
            </div>
            <CatchResult catchPer={catchPer} hp={hp} ball={ball} status={status} />
        </>
    )
};
export default Catch;