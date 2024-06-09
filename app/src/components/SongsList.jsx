
export default function SongsList({songs}){
    return (<ul>
        {songs.map(song => 
        (<li key={song.id}>
            {song.name} {song.artists.map(artist => (
                <span>|| {artist.name} </span>
            ))}
            <img src={song.album.images[0].url}/>
        </li>
        ))}
    </ul>)
}