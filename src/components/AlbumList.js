import React from 'react';
import {connect} from 'react-redux';

import SongList from './SongList';
import {fetchAlbumsAndSongs} from '../actions';

class AlbumList extends React.Component {
    componentDidMount() {
        this.props.fetchAlbumsAndSongs();
    }
    renderAlbums = (albums) => {
        if (!albums) {
            return null;
        }
        console.log(Object.entries(albums));
        return Object.entries(albums).map(([key, album]) => <li key={key}>
        {album.band} {album.album}
        <SongList songs={album.songs} display={true} />
         </li>);
    }

    render() {
        console.log(this.props);
        return (
            <ul>
                {this.renderAlbums(this.props.albums)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps, {fetchAlbumsAndSongs})(AlbumList);