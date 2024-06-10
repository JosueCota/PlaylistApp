

export default function SearchContainer({search, setSearch, onClick}){

    function handleKeyUp(event){
        if (event.key === "Enter"){
            onClick();
        }
    }

    return (
        <>
            <div className="flex w-full mx-auto py-1 justify-center bg-black h-10">
                <input className="bg-white text-black w-3/4 rounded-l p-1" type="text" value={search} onChange={e=>setSearch(e.target.value)} onKeyUp={handleKeyUp}/>
                <button className="bg-white text-black rounded-r p-1 bg-opacity-80" onClick={onClick}>Search</button>
            </div>
            <h3 className="text-center mt-2">Search By</h3>
        </>
    )

}