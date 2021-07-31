import {
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core";

import FeaturedPost from "./components/featured-post";
import Header from "./components/header";
import PostCard from "./components/post-card";
import Main from "./components/main";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { featuredPosts, sidebar } from "./data.json";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="From the firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;
