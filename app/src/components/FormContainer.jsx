import { useState } from "react";
import search from "../assets/images/search.svg"

const searchBtn = {
    
}


export default function FormContainer({search, setSearch, filter}) {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(search);
    }
    return (
        <form className="w-full flex flex-col mt-4 mx-auto" onSubmit={handleSubmit}>
            <div>

            <input className="rounded bg-white text-blue w-3/4 mx-auto" type="text" id="searchbar" value={search} onChange={e=>setSearch(e.target.value)}/>
            <button className="bg-white rounded text-blue">Search</button>
            </div>
            <div className="align-items-center">
                <label htmlFor="filter">Search By:</label>
                <input type="radio" value="Artist Name" id="filter" name="filter"/>
                <input type="radio" value="Song Name" id="filter" name="filter" />

            </div>
        </form>
    )
}