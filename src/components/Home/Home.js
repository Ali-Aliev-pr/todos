import useFetch from "../customHooks/useFetch";
// import ClassList from '..Classlist/classList/Classlist';
import ClassList from "../classList/Classlist";

function Home() {
    let {data} = useFetch('data.json')
    console.log(data && typeof(data))

    return (
        <div>
            {data && <ClassList todos={data}/>}
        </div>
    )
}

export default Home;