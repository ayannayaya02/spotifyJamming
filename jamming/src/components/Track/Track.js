import React, { useCallback,useEffect } from "react";
import api from "../api/api";
import "./Track.css"; 

const Track = (props) => {
    const addTrack = useCallback (
        (e) =>{
props.onAdd(props.track);
        }, [props.onAdd, props.track]
    );


const removeTrack = useCallback (
    (e) => {
        props.onRemove(props.track);
    }, [props.onRemove, props.track]
);

const removal = () => {
    if (props.isRemoval){
        return (
            <button className = "Track-action" onClick={removeTrack}>
                -
            </button>
        );
    }
    return (
        <button className = "Track-action" onClick={addTrack}>
            +
        </button>
    );
};

reuturn (
    <div className="Track">
        <div className="Track-info">
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album} </p>
        </div>
        {removal()}
    </div>
)
};

export default Track;

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
  };

  return (
    <Wrapper>
      <label />
      <form>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={onSearchSubmit}></button>
      </form>
      <SearchButton>
        <a href="/">Search</a>
      </SearchButton>
      <SpotifyButton>
        <a href="/">Save To Spotify</a>
      </SpotifyButton>
    </Wrapper>
  );


//^^^You were able to operate "cd" then "cd jamming" then "npm run start"  or "npm run build" in terminal
///Which file controls the way the page looks where it doesn't say "Edit"
//after u run "build" and open project in browser ...keep following instructions!n



let music = [];

(music = () => {
  (song = "Happier Than Ever"),
    (artist = "Billie Ellish"),
    (album = "Happier Than Ever"),
    (id = "");
}),
  {
    song: "All In",
    artist: "Lil Babby",
    album: "My Turn (Delux)",
    id: "",
  },
  {
    song: "Tummy Hurts",
    artist: "Renee Rap",
    album: "Snow Angel",
    id: "",
  },
  {
    song: "My Oh My",
    artist: "Camilia Cebello ft. Dababy",
    album: "Romance",
    id: "",
  },
  {
    song: "The Sweet Escape",
    artist: "Gwen Stefani ft. Akon",
    album: "The Sweet Escape",
    id: "",
  },
  {
    song: "Demente",
    artist: "CHUNG HA ft. Guaynaa",
    album: "Querencia",
    id: "",
  };

console.log(music.map());
console.log(music.filter());

useEffect(() => {
  return this.music.map();
}, []);
