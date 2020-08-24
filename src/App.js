import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://i.pinimg.com/originals/f9/f0/7a/f9f07a203874e68dd521ff8f8b12d0b7.gif"
          alt="instgram header"
        />
        <h1>Let's build and Instagram Clone!</h1>
        <Post />
      </div>
    </div>
  );
}

export default App;
