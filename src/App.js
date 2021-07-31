import { Container, createTheme, Grid, ThemeProvider } from "@material-ui/core";
import "./App.css";
import FeaturedPost from "./components/featured-post";
import Header from "./components/header";
import PostCard from "./components/post-card";
import { featuredPosts } from "./data.json";

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
