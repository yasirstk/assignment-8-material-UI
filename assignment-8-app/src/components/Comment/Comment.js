import React from "react";
import { Grid } from "@material-ui/core";

const Comment = (props) => {
  const { name, body, email, id } = props.comment;
  const image = `https://randomuser.me/api/portraits/men/${id}.jpg`;
  return (
    <Grid container spacing={3} alignItem= "center" justify="center">
        <Grid item xs={1}/>
        <Grid item xs={2}>
          <img src={image} alt="user" style={{borderRadius:'50%'}}/>

        </Grid>
        <Grid item xs={8}>
         <p><strong>{name}:</strong> {body}</p>

        </Grid>
        <Grid item xs={1}/>
    </Grid>
    // <div>
    //   <h1>Name: {name}</h1>
    // </div>
  );
};

export default Comment;
