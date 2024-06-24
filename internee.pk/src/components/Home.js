import Emoji from "react-emoji-render";
import Header from "./Header";
import Hero from "./Hero";
import Intro from "./Intro";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div style={{width: "80%", maxWidth: 1440, margin: "0 auto"}}>
      <Header />
      <Hero />
      <Intro />
      <h3 style={{marginBottom: 50, textAlign: "center"}}><Emoji text="👇" style={{fontSize: 30}}/> Click Below and grab your internship now <Emoji text="👇" style={{fontSize: 30}}/></h3>
      <Carousel />
     
    </div>
  );
};

export default Home;
