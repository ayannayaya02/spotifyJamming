import axios from "axios";
const clientId='';
const redirectUri = "http://localhost:3002/";
let accessToken;

const api = {
    if (accessToken){
        return accessToken;
    } 

}

accessUrl = `https://spotify23.p.rapidapi.com/search/v1/${clientId}/${redirectUri}`;

search = (term) => {
    const accessToken = api.getAcessToken();
    return fetch (`https://spotify23.p.rapidapi.com/search/?type=track&q=${term}`, {
        headers:{
            Authorization: `Provider ${accessToken}`
        }
    }).then(response => {
        return response.json();
    }).then (jsonResponse => {
        if (!jsonResponse.tracks){
            return [];
        }
        return jsonResoponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist:track.artists[0].name,
            album: track.album.name,
            uri:track.uri
        }));
    });
},
 savePlaylist = (name, trackUris) => {
    if ( !name || !trackUris.length){
        return; 
    }
    accessToken = api.getAccessToken();
    headers = {Authoriztion: `Provider ${accessToken}`};
    let userId;
    return fetch(`https://spotify23.p.rapidapi.com/search/v1/me`, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        return fetch(`https://spotify23.p.rapidapi.com/search/v1/users/${userId}/playlists`, {
          header: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        })
          .then(response.json())
          .then((jsonResponse) => {
            const playlistId = jsonResponse.id;
            return fetch(`https://spotify23.p.rapidapi.com/search/v1/users/${userId}/playlists/${playlistsId}/tracks`, {
              headers: headers,
              method: "POST",
              body: JSON.stringify({ uris: trackUris }),
            });
          });
      });
}




export default api;


const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '37cdbfaa3emsh9eef7424aeb5fbdp18608bjsnf0585313c8a0',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

