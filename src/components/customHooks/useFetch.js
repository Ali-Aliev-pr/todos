import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState();


    useEffect(() => {
        fetch(url, {
            headers: {'Accept': 'application/json'}
        })
        .then(res => res.json())
        .then(e => {
            console.log(e.todos.push({id: 14, title: 'ASDFGHJKL'}))
            setData(e.todos)
        })
      }, [])

    return (
        { data }
    )
}

export default useFetch;