import {Link} from 'react-router-dom'

function ClassList({todos}) {

    console.log(todos && todos)
    
    return (
        <div>
            <h2>Todos</h2>
            <div className="todos__father">
                {todos && todos.map((e) => {
                    return (
                        <div className="todo" key={e.id}>
                            <h3>{e.title}</h3>
                            <p>{e.more}</p>
                            <ul>
                                {e.todos.map(todo => {
                                    return (
                                        <li key={todo}>{todo}</li>
                                    )
                                })}
                            </ul>
                            <Link className='linkMore' to={`todo/${e.id}`}>More...</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ClassList;