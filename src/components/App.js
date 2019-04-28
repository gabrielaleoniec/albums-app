import React from 'react';
import AlbumList from './AlbumList';

const App = () => {
    //const albumsRaw = from axios
    //const albums = props.albums.reduce();
    return (
        <div>
            <h1>Albums +/-:</h1>
            <AlbumList albums={null} display={false}/>
        </div>
    );
}

export default App;