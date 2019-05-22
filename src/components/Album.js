import React from 'react';
import { connect } from 'react-redux';

import "./Album.scss";

import Button from "./Button";
import SongList from "./SongList";
import { displaySongs } from '../actions';

class Album extends React.Component {
    render() {
        return <li key={this.props.k} className="album">
            <div onClick={() => this.props.displaySongs(this.props.songs, this.props.k)}>
                <Button opened={this.props.songs[this.props.k]}>
                    <h2 className="h2 album__band">{this.props.album.band}</h2>
                    <h3 className="h3 album__album">{this.props.album.album}</h3>
                </Button>
            </div>
            <div>
                <SongList songs={this.props.album.songs} display={this.props.songs[this.props.k]} />
            </div>
        </li>
    }
}

const mapStateToProps = state => {
    return {
        songs: state.displaySongs
    };
};

export default connect(mapStateToProps, { displaySongs })(Album);