import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const CatchBall = ({ ball, setBall }) => {

    const onChange = (event) => {
        setBall(event.target.value)
    }

    return (
        <div class="col mx-auto">
            <div class="row mx-auto mb-1">
                몬스터볼
            </div>
            <div class="row mx-auto">
                <select class="form-select form-select-sm" value={ball} aria-label=".form-select-sm example" onChange={onChange}>
                    <option value="1">몬스터볼</option>
                    <option value="1.5">슈퍼볼</option>
                    <option value="2">하이퍼볼</option>
                    <option value="5">루어볼</option>
                    <option value="4">문볼</option>
                    <option value="8">러브러브볼</option>
                    <option value="4">스피드볼</option>
                    <option value="1">프레미어볼</option>
                    <option value="3.5">다이브볼</option>
                    <option value="1">럭셔리볼</option>
                    <option value="1">힐볼</option>
                    <option value="3">다크볼</option>
                    <option value="5">퀵볼</option>
                </select>
            </div>
        </div>
    )
};
export default CatchBall;