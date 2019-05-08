import React from "react";
import { connect } from "react-redux";

import SongList from "./SongList";
//import Button from './Button';
import { fetchAlbumsAndSongs, displayAlbums, displaySongs } from "../actions";

class AlbumList extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsAndSongs();
  }

  renderAlbums = () => {
    if (!this.props.albums) {
      return null;
    }
    return Object.entries(this.props.albums).map(([key, album]) => (
      <li key={key}>
        {album.band} {album.album}
        <button onClick={() => this.props.displaySongs(this.props.songs, key)}>
          Open, Close
        </button>
        <SongList key={key} songs={album.songs} display={this.props.songs[key]} />
      </li>
    ));
  };

  render() {
    let header = <h1>Albums:</h1>;
    let button = (
      <button onClick={() => this.props.displayAlbums(this.props.display)}>
        Open
      </button>
    );
    if (!this.props.display) {
      return (
        <div>
          {header}
          {button}
          <span>Please unfold the list</span>
        </div>
      );
    }
    return (
      <div>
        {header}
        {button}
        <ul>{this.renderAlbums(this.props.albums)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums,
    display: state.displayAlbums,
    songs: state.displaySongs
  };
};

export default connect(
  mapStateToProps,
  { fetchAlbumsAndSongs, displayAlbums, displaySongs }
)(AlbumList);
