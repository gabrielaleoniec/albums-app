import React from "react";

import AlbumList from "./AlbumList";
import "./App.scss";


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AlbumList className="albums"/>
        <a href="https://www.freepik.com/free-photos-vectors/background" className="footer__bottom">Background vector created by starline - www.freepik.com</a>
      </div>
    );
  }
}

export default App;
