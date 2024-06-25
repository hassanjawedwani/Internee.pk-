import Header from "./Header";
import Hero from "./Hero";
import Intro from "./Intro";
import Carousel from "./Carousel";
import Blog from "./Blog";

const Home = () => {
  return (
    <div style={{width: "80%", maxWidth: 1440, margin: "0 auto"}}>
      <Header />
      <Hero />
      <Intro />
      <Carousel />
      <Blog />
    </div>
  );
};

export default Home;