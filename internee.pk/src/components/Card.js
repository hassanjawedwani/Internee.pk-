import { useNavigate } from "react-router";

const Card = (props) => {
  const {heading, paragraph} = props.data;
  const navigate = useNavigate();
  return (
    <div style={{border: "3px solid darkGrey", maxWidth: 250}}>
      <div>
        {/* <img src={} alt=""/> */}
        <p>Image</p>
      </div>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      {/* <button onClick={()=>navigate({})} type="button">Apply Now</button> */}
    </div>
  )
}

export default Card;