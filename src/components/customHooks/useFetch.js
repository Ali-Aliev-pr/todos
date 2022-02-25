import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState();


    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(e => setData(e))
      }, [])

    return (
        { url }
    )
}

export default useFetch;