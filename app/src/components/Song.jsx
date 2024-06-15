import {motion} from "framer-motion"

export default function Song({song, format, onClick, onSong}){

    return (
        <motion.li  key={song.id} className="flex h-20 my-5 overflow-hidden bg-black bg-opacity-20 px-3 py-1 rounded-lg">
            <img key={song.id + "image"} className="rounded" src={song.album.images[0].url} />
            <div className="ml-3 w-3/4" key={song.id + "name"}>
                {song.name} <br /> {song.artists.map((artist, i) => (
                    <span key={song.id + "artist" + i}>{artist.name} </span>
                    ))}
            </div>
            {onSong ? <>
                <span className="mr-4 content-center" key={song.id + "format"}>{format(song.duration_ms)}</span>
                <button onClick={e => onClick(song)} className="bg-white rounded p-1 hover:bg-blue hover:text-white bg-center bg-fixed plusImg self-center text-black font-bold" title="Add to Playlist" key={song.id + "button"}>Add</button> </> 
             : ""}
        </motion.li>
    )
}