


export default function SongsList({songs}){
    return (<ul>
        {songs.map(song => (<li key={song.id}>
            {song.name}
        </li>))}
    </ul>)
}