import React from "react";

import { Grid, Typography, Divider } from "@material-ui/core/";
import Markdown from "markdown-to-jsx";

import { posts } from "../../data.json";

export default function Main({ title }) {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown key={post.body}>{post.body}</Markdown>
      ))}
    </Grid>
  );
}
