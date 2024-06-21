import SearchContainer from "./SearchContainer";
import { useState } from "react";

const searchEP = "https://api.spotify.com/v1/search"

export default function FormContainer({accessToken, setSongs}) {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("track");

    const searchParams = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer `+ accessToken
            }
    };
    
    async function onSearchClick(){
        if (search) {
            let data = await searchRequest();
            filter === "artist" ? getArtistSongs(data): getSongs(data);
        } else {
            throw ("Empty Search Field")
        }
    }

    async function searchRequest() {
        return await fetch(searchEP + `?q=${search}&type=${filter}`, searchParams)
            .then(response => response.json())
    }

    async function getSongs(data){
        setSongs(prev => data.tracks.items)        
    }

    async function getArtistSongs(searchData){
        const artistID = searchData.artists.items[0].id;

        let resp = await fetch(`https://api.spotify.com/v1/artists/${artistID}/top-tracks`, searchParams);
        const data = await resp.json();
        setSongs(prev => data.tracks);
    }

    function onChangeFilter(e){
        setFilter(e.target.value)
    }

    return (
        <div className="w-full flex flex-col mx-auto">
            <SearchContainer inp={search} setInp={setSearch} onClick={onSearchClick} onChangeFilter={onChangeFilter} placeholder={"Search Song"} btnText="Search"/>
        </div>
    )
}