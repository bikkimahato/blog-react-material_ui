import React from "react";

import { makeStyles, Container, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer({ description, title }) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Copyright ©{" "}
          <Link color="inherit" href="https://www.linkedin.com/in/bikkimahato/">
            Bikki Mahato
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  );
}
