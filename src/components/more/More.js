import {Link, useHistory, useParams} from 'react-router-dom';
import useFetch from "../customHooks/useFetch";
import { useState } from 'react';
import Modal from '../modal/Modal';

const More = () => {
    let {id} = useParams()

    let history = useHistory()

    let {data} = useFetch('http://localhost:3006/todos/'+id)
    // console.log(data)

    let [modal, setModal] = useState(false);

    let [add, setAdd] = useState(false)

    const handleDelete = () => {

        setModal(true)

        if (add === true) {
            fetch('http://localhost:3006/todos/'+id, {
            method: "DELETE"
            }).then(() => {
                console.log('Todo Deleted!')
                history.push('/')
            })
        } else {
            console.log('Подтвеждение')
        }
    }

    return (
        <div className='more__container'>
            {data && (
                <article>
                    <h3>{data.title}</h3>
                    <p>Written by {data.author}</p>
                    <ul>
                        {data.todos.map(e => {
                            return (
                                <li key={e}>{e}</li>
                            )
                        })}
                    </ul>
                </article>
            )}
            <div className='buttons'>
                <button onClick={handleDelete}>Delete</button>
                <Link to={`change/${id}`}>Change</Link>
            </div>
            <Modal active={modal} setActive={setModal} setAdd={setAdd}/>
        </div>
    )
}

export default More;