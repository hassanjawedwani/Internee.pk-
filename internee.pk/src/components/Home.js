import Emoji from "react-emoji-render";
import Header from "./Header";
import Hero from "./Hero";
import Intro from "./Intro";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div style={{width: "80%", maxWidth: 1440, margin: "0 auto"}}>
      <Header />
      <Hero />
      <Intro />
      <h3 style={{marginBottom: 50, textAlign: "center"}}><Emoji text="👇" style={{fontSize: 30}}/> Click Below and grab your internship now <Emoji text="👇" style={{fontSize: 30}}/></h3>
      {/*delete InternshipCrousal + Card + card.css*/}
      
    </div>
  );
};

export default Home;
