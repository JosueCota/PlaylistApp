import FilterBtnContainer from "./FilterBtnContainer";


export default function SearchContainer({search, setSearch, onClick, onChangeFilter}){

    function handleKeyUp(event){
        if (event.key === "Enter"){
            onClick();
        }
    }

    return (
        <div className="bg-green  py-2">
            <h1 className="text-black text-center font-bold text-lg">QuickTrack</h1>
            <div className="flex w-full mx-auto py-1 justify-center  ">
                <input className="bg-white pl-10 text-center text-black w-3/4 rounded-l border" type="text" value={search} onChange={e=>setSearch(e.target.value)} onKeyUp={handleKeyUp} placeholder="Song/Artist Name" />
                <button className="bg-white text-black rounded-r p-1 bg-opacity-80 border" onClick={onClick} title="Search for songs">Search</button>
            </div>
            <FilterBtnContainer onChange={onChangeFilter}/>
        </div>
    )

}