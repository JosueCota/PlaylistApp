import { useState } from "react";
import search from "../assets/images/search.svg"


export default function FormContainer({search, setSearch, filter, setFilter}) {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(search + " " + filter);
    }
    
    return (
        <form className="w-full flex flex-col mt-4 mx-auto" onSubmit={handleSubmit}>
            <div className="flex w-3/4">
                <input className="bg-white text-black mx-auto rounded-l-sm p-1" type="text" id="searchbar" value={search} onChange={e=>setSearch(e.target.value)}/>
                <button className="bg-white text-black rounded-r-sm p-1">Search</button>
            </div>

            <h3 className="text-center mt-2">Search By</h3>

            <div className="flex justify-evenly text-center mt-1" onChange={e=>setFilter(e.target.event)}>
                <div>
                    <label htmlFor="artist" className=" peer-checked:bg-blue">
                        <input className="appearance-none peer hidden" type="radio" value="artist" id="artist" name="filter" defaultChecked/>
                        <p className="peer-checked:bg-blue peer-checked:text-white p-1 bg-white text-black rounded w-40">Artist</p>
                    </label>
                </div>
                <div>
                    <label htmlFor="song" className="">
                        <input type="radio" value="song" id="song" name="filter" className="peer appearance-none hidden"/>
                        <p className="peer-checked:bg-blue peer-checked:text-white p-1 bg-white text-black rounded w-40">Song</p>
                    </label>
                </div>
            </div>
        </form>
    )
}