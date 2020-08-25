import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);
  // useEffect runs a piece of code base on a specific condition
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      // every time a new post is added, this code fires
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://i.pinimg.com/originals/f9/f0/7a/f9f07a203874e68dd521ff8f8b12d0b7.gif"
          alt="instgram header"
        />
      </div>
      <h1>Let's build an Instagram Clone!</h1>
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
