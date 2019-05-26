import albumsConnection from "../apis/albums";

export const fetchAlbumsAndSongs = (query) => async dispatch => {
  const response = await albumsConnection.get(query);
  const albumsComplete = response.data.reduce((albumsHelper, {band, album, song}) => {
    let key = (band+album).replace(/[^a-z0-9]/ig, "");

    if (albumsHelper[key]  && Array.isArray(albumsHelper[key].songs)) {
      if (albumsHelper[key].songs.indexOf(song) === -1) {
        const songs = [...albumsHelper[key].songs, song];
        albumsHelper[key] = { band, album, songs };
      }
    } else {
      albumsHelper[key] = { band, album, songs: [song] };   
    }
    return albumsHelper;
  }, {});

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
