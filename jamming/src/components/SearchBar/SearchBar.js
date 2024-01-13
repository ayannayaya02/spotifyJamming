import React from "react";
import styled from "styled-components";

function bar(props) {
  const [input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
  };

  return (
    <Wrapper>
      <Label>
      <form>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={onSearchSubmit}></button>
      </form>
      </Label>
      <SearchButton>
        <a href="/">Search</a>
      </SearchButton>
      <SpotifyButton>
        <a href="/">Save To Spotify</a>
      </SpotifyButton>
    </Wrapper>
  );
}

export default bar;

const SpotifyButton=styled.div `
display:flex;
padding:10px;

a:hover{
text-decoration:underline;
}
`;

const SearchButton =styled.div `
display:flex;
padding:10px;
`;

const Label =styled.div`
text-align:center;
`;