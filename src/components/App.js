import React from 'react';
import AlbumList from './AlbumList';

const App = () => {


    return (
        <div>
            Albums +/-
            <AlbumList albums={null} display="false" />
        </div>
    );
}

export default App;