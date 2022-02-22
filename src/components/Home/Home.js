import useFetch from "../customHooks/useFetch";
// import ClassList from '..Classlist/classList/Classlist';
import ClassList from "../classList/Classlist";

function Home() {
    let {data} = useFetch('http://localhost:3006/todos')

    return (
        <div>
            {data && <ClassList todos={data}/>}
        </div>
    )
}

export default Home;