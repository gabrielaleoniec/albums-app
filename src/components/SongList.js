import React from 'react';

import './SongList.scss';

const SongList = (props) => {
    if(!props.songs || !props.display) {
        return null;
    }
    return (<ul className="songs">
        {props.songs.map(song => <li className="songs__song" key={song}>{song}</li>)}
    </ul>);
}

export default SongList;