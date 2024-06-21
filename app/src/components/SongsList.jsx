import Song from "./Song";
export default function SongsList({songs, onClick, formatTime, addBtn}){

    
    return (<ul className="mx-1">
        {songs.map((song) => (<Song key={song.id+"song"} song={song} format={formatTime} onClick={onClick} addBtn={addBtn}/>))}
    </ul>)
}