import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      <img
        className="post__image"
        src="https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/10/1414676226react-logo.png"
        alt="reactLogo"
      />
      <h4 className="post__text">
        <strong>photodude:</strong> My first photo of a React Logo
      </h4>
    </div>
  );
}

export default Post;
