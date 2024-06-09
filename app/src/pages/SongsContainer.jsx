import FormContainer from "../components/FormContainer";
import SongsList from "../components/SongsList"
import { useEffect, useState } from "react";

export default function SongsContainer({ songs, setSongs, setPlaylist}) {

    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        const authParams = {
            method: "POST",
            headers: {
                "Content-Type": `application/x-www-form-urlencoded`
            },
            body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
        }
        fetch(`https://accounts.spotify.com/api/token`, authParams)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, [])

    return (
    <div>
        <FormContainer accessToken={accessToken} setSongs={setSongs}/>

        <SongsList songs={songs}/>
    </div>)
}