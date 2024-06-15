import FormContainer from "../components/FormContainer";
import SongsList from "../components/SongsList"

export default function SongsContainer({ songs, setSongs, setPlaylist, accessToken}) {

    function onAddClick(song) {
        setPlaylist(prev => (
            [...prev, song]       
        ))

        console.log("Added " + song.name)
    }

    return (
    <div>
        <FormContainer accessToken={accessToken} setSongs={setSongs}/>

        <SongsList songs={songs} onClick={onAddClick}/>
    </div>)
}