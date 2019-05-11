import albumsConnection from "../apis/albums";

export const fetchAlbumsAndSongs = () => async dispatch => {
  const response = await albumsConnection.get("/data.json");
  let albumsComplete = {};
  for (const { band, album, song } of response.data) {
    let key = (band+album).replace(/[^a-z0-9]/ig, "");

    if (albumsComplete[key]  && Array.isArray(albumsComplete[key].songs)) {
      if (albumsComplete[key].songs.indexOf(song) === -1) {
        const songs = [...albumsComplete[key].songs, song];
        albumsComplete[key] = { band, album, songs };
      }
    } else {
      albumsComplete[key] = { band, album, songs: [song] };
    }
  }
  return dispatch({ type: "FETCH_ALBUMS_AND_SONGS", payload: albumsComplete });
};

export const displayAlbums = display => dispatch => {
  return dispatch({
    type: "DISPLAY_ALBUMS",
    payload: !display
  });
};

export const displaySongs = (displaySongs = {}, albumId = 0) => dispatch => {
  return dispatch({
    type: "DISPLAY_SONGS",
    payload: {
      ...displaySongs,
      [albumId]: !displaySongs[albumId]
    }
  });
};
