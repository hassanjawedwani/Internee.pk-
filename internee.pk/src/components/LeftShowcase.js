const LeftShowcase = ({image, subheading, heading, description, data}) => {
  
  return (
    <div style={{display: "flex", margin: "200px 0"}}>
      <div style={{width: "40%", display: "flex", alignItems: "center"}}>
        <img src={image} alt="task image" style={{width: "100%", display: "block"}} />
      </div>
      <div style={{width: "60%", padding: "0 40px 40px"}}>
        <h3 style={{fontSize: "1.4rem"}}>{subheading}</h3>
        <h2 style={{fontSize: "3rem", padding: "10px 200px 20px 0"}}>{heading}</h2>
        <p style={{fontSize: 18, color: "grey", lineHeight: 1.6, paddingBottom: "20px"}}>{description}</p>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {
            data.map((part, index) => (
              <div style={{display: "flex", width: "50%"}}>
                <div>
                  <img src={part.icon} style={{padding: "2px 20px 0"}} />
                </div>
                <div>
                  <h3 style={{color: "#555555"}}>{part.heading}</h3>
                  <p style={{fontSize: 18, color: "grey", lineHeight: 1.6, paddingBottom: "20px"}}>{part.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default LeftShowcase;