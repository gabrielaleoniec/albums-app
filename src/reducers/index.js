import { combineReducers } from "redux";

const albumsAndSongsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_ALBUMS_AND_SONGS":
      return action.payload;
    default:
      return state;
  }
};

const displayAlbumsReducer = (state = false, action) => {
  switch (action.type) {
    case "DISPLAY_ALBUMS":
      return action.payload;
    default:
      return state;
  }
};

const displaySongsReducer = (state = {}, action) => {
  switch (action.type) {
    case "DISPLAY_SONGS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  albums: albumsAndSongsReducer,
  displayAlbums: displayAlbumsReducer,
  displaySongs: displaySongsReducer
});
