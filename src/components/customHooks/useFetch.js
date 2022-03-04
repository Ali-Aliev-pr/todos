import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState();

    // useEffect(() => {
    //     fetch(url, {
    //         method: 'Get',
    //         headers: {'Accept': 'application/json'}
    //     })
    //     .then(res => res.json())
    //     .then(e => {
    //         // console.log(typeof(e.todos))
    //         setData(e.todos)
    //     })
    //   }, [])

    // return (
    //     {data}
    // )


    useEffect( () => {
        let storages = []
        for (let i = 0; i<localStorage.length; i++) {
            let object = {
                title: localStorage.getItem(i),
                data: JSON.parse(localStorage.getItem(localStorage.key(i)))
            }
            storages.push(object)
        }
        setData(storages)
    }, [])

    return {data}
}

export default useFetch;