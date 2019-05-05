import React from 'react';
import {connect} from 'react-redux';

import AlbumList from './AlbumList';
import {displayAlbums} from '../actions';


class App extends React.Component {
    render() {
        console.log('App render', this);
        return (
            <div>
                <h1>Albums:</h1>
                <button onClick={()=>this.props.displayAlbums(this.props.display)}>Open</button>
                <AlbumList displayAlbums={this.props.display}/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log('Inside mapStateToProps', state);
    return {
        display: state.displayAlbums
    }
}

export default connect(mapStateToProps, {displayAlbums})(App);