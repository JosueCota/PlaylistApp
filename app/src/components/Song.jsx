import {motion} from "framer-motion"

export default function Song({song, format, onClick}){

    return (
        <motion.li  key={song.id} className="flex h-20 my-5 overflow-hidden bg-black bg-opacity-20 px-3 py-1 rounded-lg">
            <img key={song.id} className="rounded" src={song.album.images[0].url} />
            <div className="ml-3 w-3/4">
                {song.name} <br /> {song.artists.map(artist => (
                    <span id={artist.id}>{artist.name} </span>
                    ))}
            </div>
            <span className="mr-4 content-center" id={song.id}>{format(song.duration_ms)}</span>
            <button onClick={onClick} className="bg-white rounded p-1 hover:bg-blue hover:text-white bg-center bg-fixed plusImg self-center text-black font-bold" title="Add to Playlist?" >Add</button>
        </motion.li>
    )
}