import {Link} from 'react-router-dom'
import { useState } from 'react'

function ClassList({todos}) {
    // console.log(todos && todos[0].data)
    console.log(todos)
    return (
        <div>
            <h2>Todos</h2>
            <div className="todos__father">
                {todos && todos.map((e) => {
                    return (
                        <div className="todo" key={e.data.title}>
                            <h3>{e.data.title}</h3>
                            <p>{e.data.more}</p>
                            <ul>
                                {e.data.todos.map(todo => {
                                    return (
                                        <li key={todo}>{todo}</li>
                                    )
                                })}
                            </ul>
                            <Link className='linkMore' to={`todo/${e.data.title}`}>More...</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ClassList;