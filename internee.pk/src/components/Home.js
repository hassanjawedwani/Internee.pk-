import Header from "./Header";
import Hero from "./Hero";
import InternshipCarousal from "./InternshipCarousal";
import Intro from "./Intro";
const Home = () => {
  return (
    <div style={{width: "80%", maxWidth: 1440, margin: "0 auto"}}>
      <Header />
      <Hero />
      <Intro />
      <InternshipCarousal />
    </div>
  );
};

export default Home;
