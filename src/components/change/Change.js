import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../customHooks/useFetch";

const Change = () => {

    let {id} = useParams()

    const {data} = useFetch('http://localhost:3006/todos/'+id)

    let [todos, setTodos] = useState([])


    const btnChange = () => {

        let todoss = document.querySelectorAll('.input__todo')

        todoss.forEach(e => {
            setTodos([...todos, todos.push(e.value)])
        })

        console.log(todos)

        fetch('http://localhost:3006/todos/'+id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({todos})
        })
    }

    return (
        <div className="change__container">
            {data && (
                <div>
                    <div className="inputs__two">
                        {data.todos.map(e => {
                            return (
                                <input placeholder={e} type="text" key={e} className="input__todo"/>
                            )
                        })}
                    </div>
                    <div>
                        <button className="btnChange" onClick={btnChange}>Change</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Change;