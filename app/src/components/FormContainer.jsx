import SearchContainer from "./SearchContainer";
import FilterBtnContainer from "./FilterBtnContainer";


export default function FormContainer({search, setSearch, filter, setFilter}) {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(search + " " + filter);
        setSearch("")

        getSongs()    
    }
    
    async function getSongs(){
        try {
            const data = await fetch(`https://api.spotify.com/v1/search?q=${search}&type=${filter}`, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            });
            const resp = await data.json();
            console.log(resp);

        } catch(error) {
            console.log(error)
        }
    }

    function onChangeFilter(e){
        setFilter(e.target.value)
    }
    return (
        <form className="w-full flex flex-col mt-4 mx-auto" onSubmit={handleSubmit}>
            <SearchContainer search={search} setSearch={setSearch}/>
            
            <FilterBtnContainer onChange={onChangeFilter}/>
        </form>
    )
}