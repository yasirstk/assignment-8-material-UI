import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState([]);

  const { postId } = useParams();
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  });
  const { body, title, id, userId } = post;

  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  const comments = comment.filter((cmnt) => cmnt.postId === userId);
  const image = `https://randomuser.me/api/portraits/men/${id}.jpg`;

  return (
    <Grid
      item
      container
      spacing={5}
      alignItems="center"
      justify="center"
      style={{ backgroundColor: "lightgray" }}
    >
      <Grid item xs={1} />
      <Grid item xs={2}>
        <img src={image} alt={title}></img>
      </Grid>
      <Grid item xs={3}>
        <h3>Title: {title}</h3>
        <p>
          <strong>ID : {id}</strong>
        </p>
        <p>
          <strong>User ID : {userId}</strong>
        </p>
      </Grid>
      <Grid item xs={5}>
        <h3> Body : </h3>
        <p>{body} </p>
      </Grid>
      <Grid item xs={1} />
      <Grid item container xs={12}>
        {comments.map((cmnt) => (
          <Comment comment={cmnt}></Comment>
        ))}
      </Grid>
    </Grid>
  );
};

export default PostDetails;
