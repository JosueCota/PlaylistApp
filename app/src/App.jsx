import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './pages/Nav';
import SongsContainer from './pages/SongsContainer';
import PlaylistContainer from "./pages/PlaylistContainer"

const authParams = {
    method: "POST",
    headers: {
        "Content-Type": `application/x-www-form-urlencoded`
    },
    body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
}

function App() {
  //Holds playlist items
  const [playlist, setPlaylist] = useState([]);
  //Holds search result songs
  const [songs, setSongs] = useState([])
  //Passed to Nav where login button is, return will set authCode? Used in create playlist page
  //Required for requests for UserInfo in SpotifyAPI
  const [authCode, setAuthCode] = useState("");
  //Required for requests to SpotifyAPI
  const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        try {
          fetch(`https://accounts.spotify.com/api/token`, authParams)
              .then(result => result.json())
              .then(data => setAccessToken(data.access_token))
        } catch (error){
          console.log("Error was caught fetching API Token: " + error)
        }
    }, [])

  return (
    <>
      <Nav setAuthCode={setAuthCode}/>
      <Routes>
        <Route path="/" element={<SongsContainer songs={songs} setSongs={setSongs} setPlaylist={setPlaylist}  accessToken={accessToken}/>}/>
        <Route path="/playlist" element={<PlaylistContainer playlist={playlist} accessToken={accessToken} setPlaylist={setPlaylist} setSongs={setSongs}/>}/>
      </Routes>
    </>
  )
};

export default App;
