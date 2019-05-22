import React from "react";
import { connect } from "react-redux";

import "./AlbumList.scss";

import SongList from "./SongList";
import { fetchAlbumsAndSongs, displayAlbums, displaySongs } from "../actions";
import Button from "./Button";

class AlbumList extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsAndSongs(this.props.query);
  }

  renderAlbums = () => {
    if (!this.props.albums) {
      return null;
    }

    return Object.entries(this.props.albums).map(([key, album]) => (
      <li key={key} className="album">
        <div onClick={() => this.props.displaySongs(this.props.songs, key)}>
          <Button>
            <h2 className="h2 album__band">{album.band}</h2>
            <h3 className="h3 album__album">{album.album}</h3>
          </Button>
        </div>
        <div>
          <SongList key={key} songs={album.songs} display={this.props.songs[key]} />
        </div>
      </li>
    ));
  };

  render() {
    let header = 
      <h1 className="h1" role="button" onClick={(e) => { this.props.displayAlbums(this.props.display); }}>
        <Button>Albums</Button>
      </h1>;

    if (!this.props.display) {
      return (
        <div className="albums">
          {header}
        </div>
      );
    }

    return (
      <div className="albums">
        {header}
        <div className={this.props.display ? 'albums__list--opened' : 'albums__list--closed'}>
          <ul className="albums__list">{this.renderAlbums(this.props.albums)}</ul>
        </div>
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
