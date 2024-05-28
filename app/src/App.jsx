import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './pages/Nav';
import SongsContainer from './pages/SongsContainer';

function App() {
  const [playlist, setPlaylist] = useState([]);

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<SongsContainer/>}/>
        <Route path="/playlist" element={<h1>Hello</h1>}/>
      </Routes>
    </>
  )
};

export default App;
