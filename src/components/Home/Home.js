import useFetch from "../customHooks/useFetch";
// import ClassList from '..Classlist/classList/Classlist';
import ClassList from "../classList/Classlist";

function Home() {
    let {data} = useFetch('/todos')

    return (
        <div>
            {data && <ClassList todos={data}/>}
        </div>
    )
}

export default Home;