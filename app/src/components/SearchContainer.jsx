

export default function SearchContainer({search, setSearch}){
    return (
        <>
            <div className="flex w-3/4 mx-auto">
                <input className="bg-white text-black mx-auto rounded p-1" type="text" id="searchbar" value={search} onChange={e=>setSearch(e.target.value)}/>
                <button className="bg-white text-black rounded p-1">Search</button>
            </div>
            <h3 className="text-center mt-2">Search By</h3>
        </>
    )

}