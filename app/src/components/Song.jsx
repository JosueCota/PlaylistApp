import {motion} from "framer-motion"
import SongImg from "./SongImg"
import SongInfo from "./SongInfo"

export default function Song({song, format, onClick, addBtn}){

    return (
            <motion.li  key={song.id} className="flex h-20 my-5 overflow-hidden bg-black bg-opacity-20 px-3 py-1 rounded-lg md:mx-24 mx-1 lg:mx-32 lg:justify-center">
                <SongImg key={song.id + "image"} src={song.album.images[0].url} />
                <SongInfo name={song.name} artists={song.artists} songID={song.id}/>
                
                {addBtn ? <span className="mr-4 content-center" key={song.id + "format"}>{format(song.duration_ms)}</span>: ""}

                <button onClick={e => onClick(song)} className="bg-white rounded p-1 hover:bg-blue hover:text-white bg-center bg-fixed plusImg self-center text-black font-bold" title={addBtn? "Add to Playlist" : "Remove from Playlist"} key={song.id + "button" + addBtn}>{addBtn? "Add": "Remove"}</button>
            </motion.li>
    )
}