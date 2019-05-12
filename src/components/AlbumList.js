import React from "react";
import { connect } from "react-redux";

import "./AlbumList.scss";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

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
      <ExpansionPanel key={key} className="album">
        <ExpansionPanelSummary>
          <h2 className="h2 album__band">{album.band}</h2>
          <h3 className="h3 album__album">{album.album}</h3>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SongList key={key} songs={album.songs} display={true} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ));
  };

  render() {
    let header = <h1 className="h1">Albums:</h1>;
    let button = (
      <button onClick={() => this.props.displayAlbums(this.props.display)}>
        Toggle albums
    </button>
    );
    if (!this.props.display) {
      return (
        <div className="albums">
          {header}
          {button}
          <span>Please unfold the list</span>
        </div>
      );
    }
    return (
      <div className="albums">
        {header}
        {button}
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
