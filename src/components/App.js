import React from "react";

import AlbumList from "./AlbumList";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AlbumList className="albums"/>
      </div>
    );
  }
}

export default App;
