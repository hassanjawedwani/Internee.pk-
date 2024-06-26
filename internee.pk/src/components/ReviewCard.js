const ReviewCard = ({comment, writer, location}) => {
  return (
    <div style={{minHeight: 315, backgroundColor: "#21282E", color: "#fff", width: "400px", padding: "30px", borderRadius: "30px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <div>
      <p style={{ fontSize: 20,  lineHeight: 1.4, marginBottom: "20px "}}>{comment}</p>
      </div>
      <div>
        <p style={{ fontSize: 20}}>{location}</p>
        <h3 style={{ fontSize: 23, color: "#FFCF5C", marginBottom: "2px"}}>{writer}</h3>
      </div>
    </div>
  );
}

export default ReviewCard;