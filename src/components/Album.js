import React from 'react';
import { connect } from 'react-redux';

import "./Album.scss";

import Button from "./Button";
import SongList from "./SongList";
import { displaySongs } from '../actions';

const Album = (props) => {
    return <li key={props.k} className="album">
        <div onClick={() => props.displaySongs(props.songs, props.k)}>
            <Button opened={props.songs[props.k]}>
                <h2 className="h2 album__band">{props.album.band}</h2>
                <h3 className="h3 album__album">{props.album.album}</h3>
            </Button>
        </div>
        <div>
            <SongList songs={props.album.songs} display={props.songs[props.k]} />
        </div>
    </li>
}

const mapStateToProps = state => {
    return {
        songs: state.displaySongs
    };
};

export default connect(mapStateToProps, { displaySongs })(Album);