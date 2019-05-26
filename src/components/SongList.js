import React from 'react';

import './SongList.scss';

const SongList = ({songs, display}) => {
    if(!songs || !display) {
        return null;
    }
    return (<ul className="songs">
        {songs.map(song => <li className="songs__song" key={song}>{song}</li>)}
    </ul>);
}

export default SongList;