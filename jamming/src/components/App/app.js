import { useState, useCallback } from "react";
import "./app.css";
import "../Playlist/Playlist";
import "../SearchBar/SearchBar";
import "../SearchResults/SearchResults";
import "..Track/Track";
import "../Tracklist/Tracklist";
import "../api/api";

//step 1 import && declare each folder in components project as a const variable
// also use useState && useCallback ^^
//note to be sure to import them in the beginning of file before getting started with code

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylist] = useState("Create Playlist");
  const [tracks, setTracks] = useState([]);

  //Work on api page where info/data will be retreived from!
  //useCallback to retrieve data from other file!

  const search = useCallback((term) => {
    api.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (tracks.some((savedTrack) => savedTrack.id === track.id)) return;
      setTracks((prevTracks) => [...prevTracks, track]);
    },
    [tracks]
  );

  //declare const variable for when user removes track from playlost :)

  const removeTrack = useCallback((track) => {
    setTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  // REMINDER: Name Id's (terms in orange) and classes on index file??

  //declare const varibale for update PLaylist name!
  const updatePlaylistName = useCallback((name) => {
    setPlaylist(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackapi = tracks.map((track) => track.api);
    api.savePlaylist(playlistName, trackapi).then(() => {
      //.savePlaylist is the function itself being called HERE^
      setPlaylistName("Create Playlist");
      setTracks([]);
    });
  }, [playlistName, tracks]);

  return(
  <div>
    <h1>
      Ja<span className="highlight">mm</span>ing
    </h1>
    <div className="App">
      <SearchBar onSearch={search} />
      <div className="playlist-App">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          tracks={tracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  </div>
  )
};
export default App;
