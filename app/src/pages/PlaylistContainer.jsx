import { useState } from "react"
import Song from "../components/Song"


const user_id = "josuecota";


export default function PlaylistContainer({playlist, accessToken}){

    const [playlistName, setPlaylistName] = useState("")

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
            addSongs(data.id);

            } catch (error) {
                console.log(error)
            }
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
    return (<>
                <form className="w-3/4 mx-auto">
                    <input type="text" className="p-1 text-black" placeholder="Playlist Name" value={playlistName} onChange={e => setPlaylistName(e.target.value)}/>
                    <button className="p-1 bg-white text-black" onClick={makePlaylist}>Create</button>
                </form>
                {playlist.map(song => (
                    <Song song={song} onClick={null} format={null} onSong={false}/>
                ))}
            </>
        )
}