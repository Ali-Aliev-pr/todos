import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState();


    useEffect(() => {
        fetch(url, {
            headers: {'Accept': 'application/json'}
        })
        .then(res => res.json())
        .then(e => {
            // console.log(typeof(e.todos))
            setData(e.todos[0])
        })
      }, [])

    return (
        {data}
    )
}

export default useFetch;