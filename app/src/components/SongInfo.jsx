

export default function SongInfo({name, artists, songID}){

    return (
        <div className="ml-3 w-3/4 lg:w-full" key={songID + "name"}>
            <span className="font-bold">{name}</span> <br /> {artists.map((artist, i) => (
                <span key={songID + "artist" + i}>{artist.name} </span>
            ))}
        </div>
    )
}