import plus from "../assets/images/plus.svg"
export default function SongsList({songs}){

    function onClick({target}){
        
    }

    return (<ul className="mx-1">
        {songs.map(song => 
        (<li key={song.id} className="flex h-20 my-5 overflow-hidden bg-black bg-opacity-20 px-3 py-1 rounded-lg">
            <img className="rounded" src={song.album.images[0].url} />
            <div className="ml-3 w-full">
            {song.name} <br /> {song.artists.map(artist => (
                <span>{artist.name} </span>
                ))}
            </div>
            <button onClick={onClick} className="bg-white w-8 h-8 rounded-full hover:bg-opacity-50 bg-center bg-fixed plusImg self-center"></button>
        </li>
        ))}
    </ul>)
}