import { useState } from "react"
import Song from "../components/Song"
import SongsList from "../components/SongsList";
import SearchContainer from "../components/SearchContainer";


const user_id = "josuecota";


export default function PlaylistContainer({playlist, accessToken, setPlaylist, setSongs}){

    const [playlistName, setPlaylistName] = useState("")

    function onClickRemove(song) {
        setPlaylist(prev => prev.filter(s => {
            return song.id !== s.id
        }))

        setSongs(prev => [song, ...prev])
    }

    async function makePlaylist(e) {
        e.preventDefault();
        try {
            const res = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
                method: "POST",
            headers: {
                "Authorization": "Bearer " + accessToken,
                "Content-Type" : "application/json"
            },
            data: {
                "name": playlistName,
                "description": "",
                "public": false
            }})
            
            const data = await res.json();

            if (!data.id) {
                throw("Error")
            }
            
            console.log("successfully created")
            await addSongs(data.id);
            
            resetPlaylist();
            
        } catch (error) {
                console.log(error)
            }
    }

    async function resetPlaylist(){
        setPlaylist([]);
        setPlaylistName("");
    }
    async function addSongs(playlistID){
        const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, { 
            method: "POST", 
            headers: {
                "Authorization": "Bearer " + accessToken,
                "Content-Type" : "application/json",
            },
            data: {
                "uris" : [playlist[0].uri, playlist[1].uri]
            },
        })
        const data = await res.json();
        console.log("Made songs: " + data)

    }
    return (
        <>
            <SearchContainer onClick={makePlaylist} inp={playlistName} setInp={setPlaylistName} placeholder="Create Playlist" btnText="Create"/>
            <SongsList onClick={onClickRemove} formatTime={null} addBtn={false} songs={playlist} />
        </>
           
        )
}