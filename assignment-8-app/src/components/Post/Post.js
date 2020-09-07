import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

const Post = (props) => {
  const postStyle = {
    border: '2px solid orange',
    borderRadius:'20px',
    //margin: '20px',
    padding: '20px'
  }
  const { title, body, id } = props.post;
  const image = `https://randomuser.me/api/portraits/men/${id}.jpg`;
  return (
    <Grid item container xs={4} spacing={5} alignItems='center' justify='center' style= {postStyle}>
      <Grid item xs={4}>
        <img src={image} alt={title}></img>
      </Grid>
      <Grid item xs={8}>
        <h5> Title: {title}</h5>
        <p>
          <small>Id : {id}</small>{" "}
        </p>
        <p> Body : {body}</p>
        <Button variant= 'contained' color='primary'>
          <Link to={`/postDetails/${id}`} style= {{textDecoration: 'none', color: 'white'}} >See more</Link>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Post;
