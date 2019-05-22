import React from "react";
import { connect } from "react-redux";

import "./AlbumList.scss";

import Album from "./Album";
import Button from "./Button";
import { fetchAlbumsAndSongs, displayAlbums} from "../actions";

class AlbumList extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsAndSongs(this.props.query);
  }

  renderAlbums = () => {
    if (!this.props.albums) {
      return null;
    }

    return Object.entries(this.props.albums).map(([key, album]) => (
      <Album key={key} k={key} album={album} />
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
    display: state.displayAlbums
  };
};

export default connect(
  mapStateToProps,
  { fetchAlbumsAndSongs, displayAlbums }
)(AlbumList);
