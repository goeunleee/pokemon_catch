import React, { useState } from "react";
import WeakTypes from "../components/weak/WeakTypes";
import WeakResults from "../components/weak/WeakResults";
import WeakSearch from "../components/weak/WeakSearch"
import WeakState from "../components/weak/WeakState";
import 'bootstrap/dist/css/bootstrap.css'

const Weak = () => {
    const [first, setFirst] = useState(18);
    const [second, setSecond] = useState(18);
    const types = ["노말", "격투", "독", "땅", "비행", "벌레", "바위", "고스트", "강철", "불꽃", "물", "전기", "풀", "얼음", "에스퍼", "드래곤", "악", "페어리"];
    const color = [
        "RGB(168,168,120,0.5)", "RGB(192,48,40,0.5)", "RGB(160,64,160,0.5)", "RGB(224,192,104,0.5)", "RGB(168,144,240,0.5)", "RGB(156,184,32,0.5)",
        "RGB(184,160,56,0.5)", "RGB(112,88,152,0.5)", "RGB(109,143,156,0.5)", "RGB(240,128,48,0.5)", "RGB(104,144,240,0.5)", "RGB(237,169,0,0.5)",
        "RGB(34,192,42,0.5)", "RGB(101,165,165,0.5)", "RGB(248,88,136,0.5)", "RGB(112,56,248,0.5)", "RGB(112,88,72,0.5)", "RGB(240,154,217,0.5)", "#FFFFFF"
    ]
    return (
        <>
            <div className="jumbotron">
                <h1>포켓몬 약점 판별기</h1>
                <hr />
                <WeakSearch setFirst={setFirst} setSecond={setSecond} types={types} />
                <hr />
                <WeakTypes first={first} setFirst={setFirst} second={second} setSecond={setSecond} types={types} color={color} />
                <hr />
                <WeakState first={first} setFirst={setFirst} second={second} setSecond={setSecond} types={types} color={color} />
            </div>
            <WeakResults first={first} second={second} types={types} />
        </>
    )
};
export default Weak;