import { useState } from "react";
import Classlist from "../classList/Classlist"
import useFetch from "../customHooks/useFetch";

function Home() {

    function cleanStorage() {
        localStorage.clear()
    }

    function allStorage() {
        var archive = [];
        for (var i = 0; i<localStorage.length; i++) {
            archive[i] = localStorage.getItem(localStorage.key(i));
        }
        console.log(archive)
    }

    let {data} = useFetch()
    // console.log(data)

    return (
        <div>
            <Classlist todos={data}/>
            <div className="homeGtton">
                <button onClick={cleanStorage}>Press</button>
                <button onClick={allStorage}>AllStorage</button>
            </div>
        </div>
    )
}

export default Home;