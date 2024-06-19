import { useState } from "react"
import Song from "../components/Song"


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
    return (<>
                <form className=" flex w-full mx-auto py-11 justify-center bg-green">
                    <div className="w-3/4 flex justify-center">
                        <input type="text" className="bg-white pl-10 text-center text-black w-3/4 rounded-l p-1 border" placeholder="Playlist Name" value={playlistName} onChange={e => setPlaylistName(e.target.value)}/>
                        <button className="bg-white text-black rounded-r p-1 bg-opacity-90 border" onClick={makePlaylist} title="Create playlist">Create</button>
                    </div>
                </form>
                <ul className="mx-1">
                    {playlist.map((song,ind) => (
                        <>
                            <Song song={song} onClick={onClickRemove} format={null} onSong={false} ind={ind}/>
                        </>
                    ))}
                </ul>
            </>
        )
}