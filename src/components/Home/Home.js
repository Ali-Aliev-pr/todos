import useFetch from "../customHooks/useFetch";
// import ClassList from '..Classlist/classList/Classlist';
import ClassList from "../classList/Classlist";

function Home() {
    let {data} = useFetch('angry-mcnulty-a3d36f.netlify.app/todos')

    return (
        <div>
            {data && <ClassList todos={data}/>}
        </div>
    )
}

export default Home;