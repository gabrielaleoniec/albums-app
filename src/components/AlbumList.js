import React from "react";
import { connect } from "react-redux";

import "./AlbumList.scss";

import SongList from "./SongList";
//import Button from './Button';
import { fetchAlbumsAndSongs, displayAlbums, displaySongs } from "../actions";

class AlbumList extends React.Component {
  handleClick = (el) => {
    console.log(el.classList);
    el.classList.toggle('button--opened');
  }

  componentDidMount() {
    this.props.fetchAlbumsAndSongs();
  }

  renderAlbums = () => {
    if (!this.props.albums) {
      return null;
    }
    return Object.entries(this.props.albums).map(([key, album]) => (
      <div key={key} className="album">
        <div>
          <h2 className="h2 album__band">{album.band}</h2>
          <h3 className="h3 album__album">{album.album}</h3>
        </div>
        <div>
          <SongList key={key} songs={album.songs} display={true} />
        </div>
      </div>
    ));
  };

  render() {
    let header = (<h1 className="h1"><a className="button" href="#" onClick={(e) => {
      console.log('On click',  e, e.target);
      this.props.displayAlbums(this.props.display); this.handleClick(e.target)}}>
      Albums</a></h1>);
    
    if (!this.props.display) {
      return (
        <div className="albums">
          {header}
          <span>Please unfold the list</span>
        </div>
      );
    }
    return (
      <div className="albums">
        {header}
        <ul className="albums__list">{this.renderAlbums(this.props.albums)}</ul>
        <div>{this.renderAlbums(this.props.albums)}</div>
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
