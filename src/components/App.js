import React from "react";

import AlbumList from "./AlbumList";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <AlbumList className="albums" query="/data.json" />
    </div>
  );
}

export default App;
