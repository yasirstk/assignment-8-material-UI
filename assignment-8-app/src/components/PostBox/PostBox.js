import React from "react";
import { useState, useEffect } from "react";
import Post from "../Post/Post";
import Grid from '@material-ui/core/Grid';

const PostBox = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <Grid container spacing={3}>
        {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </Grid>
    
  );
};

export default PostBox;
