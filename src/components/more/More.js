import {Link, useHistory, useParams} from 'react-router-dom';
import useFetch from "../customHooks/useFetch";

const More = () => {
    let {id} = useParams()

    let history = useHistory()

    let {data} = useFetch('http://localhost:3006/todos/'+id)
    console.log(data)

    const handleDelete = () => {
        fetch('http://localhost:3006/todos/'+id, {
            method: "DELETE"
        }).then(() => {
            console.log('Todo Deleted!')
            history.push('/')
        })
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
            <button onClick={handleDelete}>Delete</button>
            <Link to={`todo/change/${id}`}>Change</Link>
        </div>
    )
}

export default More;