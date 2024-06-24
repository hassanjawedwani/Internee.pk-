import Emoji from "react-emoji-render";
import Card from "./Card";
import image from {}

const InternshipCarousal = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h3><Emoji text="👇" style={{fontSize: 30}}/> Click Below and grab your internship now <Emoji text="👇" style={{fontSize: 30}}/></h3>
      <Card data={{heading: "fucking heading", paragraph: "fucking paragraph"}}/>
    </div>
  )
}

export default InternshipCarousal;