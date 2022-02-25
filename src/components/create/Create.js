import {useState} from 'react'
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');

    const [more, setMore] = useState('');

    const [author, setAuthor] = useState('');

    const [counter, setCounter] = useState([0]);

    const [todos, setTodos] = useState([]);

    const history = useHistory();

    const createTodo = () => {

        let todoss = document.querySelectorAll('.input__todo')

        todoss.forEach(e => {
            setTodos([...todos, todos.push(e.value)])
        })

        const todo = {title, more, author, todos}

        fetch('data.json.todo', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo)
        }).then(() => {
            console.log('New todo created!')
            setAuthor('')
            setMore('')
            setTitle('')
            history.push("/")
        })
    }


    return (
        <div className="create__container">
            <h3>Create Todo!</h3>
            <div className="inputs">
                <h6>Title of Todo</h6>
                <input type="text" onChange={value => setTitle(value.target.value)}/>
                <h6>Description</h6>
                <input type="text" onChange={value => setMore(value.target.value)}/>
                <h6>Author</h6>
                <input type="text" onChange={value => setAuthor(value.target.value)}/>
            </div>
            <div className='inputs__two'>
                <h6>Write your todos!</h6>
                {counter.map((e) => {
                    return (
                        <input className='input__todo' type="text" key={e}/>
                    )
                })}
            </div>
            <div className='buttons'>
                <button onClick={() => setCounter([...counter, counter.push(0)])}>Add Input</button>
                <button onClick={createTodo}>Create</button>
            </div>
        </div>
    )
}

export default Create;