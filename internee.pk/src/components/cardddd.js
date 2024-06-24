import { useNavigate } from "react-router";

const Card = (props) => {
  const {image, heading, paragraph} = props.data;
  const navigate = useNavigate();
  return (
    <div  className="card" style={{border: "3px solid darkGrey", maxWidth: 250}}>
      <div>
        <img className="card-image" src={image} alt="" style={{width: "100%"}}/>
      </div>
      <div  className="card-content">
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      <button onClick={()=>navigate('#')} type="button">Apply Now</button>
      </div>
    </div>
  )
}

export default Card;