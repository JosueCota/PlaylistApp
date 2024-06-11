import Song from "./Song";
export default function SongsList({songs}){

    function handleClick({target}){
        
    }

    function formatTime(ms) {
        const minutes = Math.floor(ms/1000/60);
        let seconds = (Math.floor(ms/1000)%60).toString()
        if (seconds.length=== 1) {
            seconds = seconds + "0";
        }
        return (`${minutes}:${seconds}`);
    }
    return (<ul className="mx-1">
        {songs.map(song => (<Song song={song} format={formatTime} onClick={handleClick}/>))}
    </ul>)
}