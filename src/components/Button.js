import React from 'react';
import {connect} from 'react-redux';

import {displaySongs} from '../actions';


class Button extends React.Component {
    render() {
        console.log(this.props);
    return (<button onClick={()=>this.props.displaySongs(this.props.albums, this.props.albumId)}>
    Open, Close
    </button>)
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps in Button', state);
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps, {displaySongs})(Button);