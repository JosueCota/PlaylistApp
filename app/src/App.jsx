import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './pages/Nav';
import SongsContainer from './pages/SongsContainer';
import PlaylistContainer from "./pages/PlaylistContainer"

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [songs, setSongs] = useState([])
  const [authCode, setAuthCode] = useState("");
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

    useEffect(() => {
      console.log(playlist);
    }, [playlist])

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<SongsContainer songs={songs} setSongs={setSongs} setPlaylist={setPlaylist}  accessToken={accessToken}/>}/>
        <Route path="/playlist" element={<PlaylistContainer playlist={playlist} accessToken={accessToken} setPlaylist={setPlaylist} setSongs={setSongs}/>}/>
      </Routes>
    </>
  )
};

export default App;
