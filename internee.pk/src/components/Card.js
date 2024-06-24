const Card = ({image, title, description}) => {
  return (
    <div style={{width: 300, backgroundColor: "white", padding: "30px 10px", textAlign: "center", borderRadius: "20px", minHeight: "600px"}}>
      <img src={image} alt={title} style={{width: "100%"}}/>
      <h3 style={{margin: "20px 0 10px"}}>{title}</h3>
      <p style={{fontSize: 14, color: "grey", lineHeight: 1.6, padding: "0 20px 20px"}}>{description}</p>
      <button type="button" style={{backgroundColor: "#43A724", color: "white", padding: 10, borderRadius: "12px", border: "none", fontSize: "16px"}}>Apply Now</button>
    </div>
  );
}

export default Card;