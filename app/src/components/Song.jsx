import {motion} from "framer-motion"

export default function Song({song, format, onClick, onSong, ind}){

    return (
        <motion.li  key={song.id} className="flex h-20 my-5 overflow-hidden bg-black bg-opacity-20 px-3 py-1 rounded-lg md:mx-24 mx-1 lg:mx-32 lg:justify-center">
            <img key={song.id + "image"} className="rounded" src={song.album.images[0].url} />
            <div className="ml-3 w-3/4 lg:w-full" key={song.id + "name"}>
                <span className="font-bold">{song.name}</span> <br /> {song.artists.map((artist, i) => (
                    <span key={song.id + "artist" + i}>{artist.name} </span>
                    ))}
            </div>
                {onSong ? <span className="mr-4 content-center" key={song.id + "format"}>{format(song.duration_ms)}</span>: <p className="content-center">{Number(ind) + 1}</p>}
                <button onClick={e => onClick(song)} className="bg-white rounded p-1 hover:bg-blue hover:text-white bg-center bg-fixed plusImg self-center text-black font-bold" title={onSong? "Add to Playlist" : "Remove from Playlist"} key={song.id + "button" + onSong}>{onSong? "Add": "Remove"}</button>
        </motion.li>
    )
}