import FormContainer from "../components/FormContainer";
import SongsList from "../components/SongsList"

export default function SongsContainer({ songs, setSongs, setPlaylist, accessToken}) {

    function onAddClick(song) {
        setPlaylist(prev => (
            [...prev, song]       
        ))
        setSongs(prev => prev.filter(s => {
            return s.id !== song.id
        }))
        console.log("Added " + song.name)
    }

    function formatTime(ms) {
        const minutes = Math.floor(ms/1000/60);
        let seconds = (Math.floor(ms/1000)%60).toString()
        if (seconds.length=== 1) {
            seconds = seconds + "0";
        }
        return (`${minutes}:${seconds}`);
    }

    return (
    <div>
        <FormContainer accessToken={accessToken} setSongs={setSongs}/>

        <SongsList songs={songs} onClick={onAddClick} formatTime={formatTime} addBtn={true}/>
    </div>)
}