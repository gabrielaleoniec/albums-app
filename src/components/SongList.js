import React from 'react';

const SongList = (props) => {
    if(!props.songs || !props.display) {
        return null;
    }
    return (<ul>
        {props.songs.map(song => <li key={song}>{song}</li>)}
    </ul>);
}

export default SongList;