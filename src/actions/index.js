import albumsConnection from "../apis/albums";
import _ from 'lodash';

export const fetchAlbumsAndSongs = () => async dispatch => {
  const response = await albumsConnection.get("/data.json");
  let albumsComplete = {};
  for (const { band, album, song } of response.data) {
      let key = _.kebabCase(band+album);
    
      if(albumsComplete[key]) {
          let songs = albumsComplete[key].songs;
          if(Array.isArray(songs) && songs.indexOf(song) === -1) {
              songs.push(song);
              albumsComplete[key] = {band, album, songs}
          }
      } else {
        albumsComplete[key] = {band, album, songs: [song]};
      }
  }
  console.log(albumsComplete);
  return dispatch({ type: "FETCH_ALBUMS_AND_SONGS", payload: albumsComplete });
};

export const displayAlbums = display => dispatch => {
  return dispatch({
    type: "DISPLAY_ALBUMS",
    payload: !display
  });
};

export const displaySongs = album => dispatch => {
  return dispatch({
    type: "DISPLAY_SONGS",
    payload: !album.display
  });
};
