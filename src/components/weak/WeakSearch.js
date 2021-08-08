import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import pokemon_list from '../../pokemon_list'

const WeakSearch = ({setFirst, setSecond, types}) => {
    const [search, setSearch] = useState("");
    
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setSearch(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setFirst(18);
        setSecond(18);
        const pokemon = pokemon_list[search]
        if(pokemon){
            setFirst(pokemon["f_type"])
            if(pokemon["s_type"]){
                setSecond(pokemon["s_type"])
            }
        }
    };

    return (
        <div class="row">
            <div class="col-md-4 form-group">
                <form onSubmit={onSubmit}>
                    <div class="input-group">
                        <input type="search" class="form-control rounded" placeholder="포켓몬 이름" aria-label="Search"
                            aria-describedby="search-addon" onChange={onChange} required />
                        <button type="button" type="submit" class="btn btn-outline-primary">search</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default WeakSearch;