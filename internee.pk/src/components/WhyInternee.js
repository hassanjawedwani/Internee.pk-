import whyInterneeImage from '../assets/programing.jpg';
import whyInterneeIcon from '../assets/Icon-flow-v2.svg';
const WhyInternee = () => {
  return (
    <div style={{display: "flex", marginBottom: "200px"}}>
      <div style={{width: "50%"}}>
        <h2 style={{fontSize: "3rem"}}>Why internee.pk?</h2>

        <div style={{display: "flex", marginTop: "27px",  }}>
          <div style={{padding : "20px", border: "1px solid green", borderRadius: "10px" }}>
            <img src={whyInterneeIcon} alt="why internee"/>
          </div>
          <div style={{display: "flex", alignItems: "center"}}> 
            <h2 style={{fontSize: "1.4rem", ver: "center", paddingLeft: "30px" ,paddingRight: "120px"}}>5500+ Students already registered</h2>
          </div>
        </div>
        <div style={{display: "flex", marginTop: "27px",  }}>
          <div style={{padding : "20px", border: "1px solid green", borderRadius: "10px" }}>
            <img src={whyInterneeIcon} alt="why internee"/>
          </div>
          <div style={{display: "flex", alignItems: "center"}}> 
            <h2 style={{fontSize: "1.4rem", ver: "center", paddingLeft: "30px" ,paddingRight: "120px"}}>Task based projects that based on hands on experience</h2>
          </div>
        </div>
        <div style={{display: "flex", marginTop: "27px",  }}>
          <div style={{padding : "20px", border: "1px solid green", borderRadius: "10px" }}>
            <img src={whyInterneeIcon} alt="why internee"/>
          </div>
          <div style={{display: "flex", alignItems: "center"}}> 
            <h2 style={{fontSize: "1.4rem", ver: "center", paddingLeft: "30px" ,paddingRight: "120px"}}>Massive Courses with high-quality videos on LMS</h2>
          </div>
        </div>
        <div style={{display: "flex", marginTop: "27px",  }}>
          <div style={{padding : "20px", border: "1px solid green", borderRadius: "10px" }}>
            <img src={whyInterneeIcon} alt="why internee"/>
          </div>
          <div style={{display: "flex", alignItems: "center"}}> 
            <h2 style={{fontSize: "1.4rem", ver: "center", paddingLeft: "30px" ,paddingRight: "120px"}}>Empowering youth towards IT revolution & technology</h2>
          </div>
        </div>
        <div style={{display: "flex", marginTop: "27px",  }}>
          <div style={{padding : "20px", border: "1px solid green", borderRadius: "10px" }}>
            <img src={whyInterneeIcon} alt="why internee"/>
          </div>
          <div style={{display: "flex", alignItems: "center"}}> 
            <h2 style={{fontSize: "1.4rem", ver: "center", paddingLeft: "30px" ,paddingRight: "120px"}}>Hands on Experience via Virtual internship</h2>
          </div>
        </div>
        <div style={{display: "flex", marginTop: "27px",  }}>
          <div style={{padding : "20px", border: "1px solid green", borderRadius: "10px" }}>
            <img src={whyInterneeIcon} alt="why internee"/>
          </div>
          <div style={{display: "flex", alignItems: "center"}}> 
            <h2 style={{fontSize: "1.4rem", ver: "center", paddingLeft: "30px" ,paddingRight: "120px"}}>Complete your task and get market competent job</h2>
          </div>
        </div>
        <div style={{display: "flex", marginTop: "27px",  }}>
          <div style={{padding : "20px", border: "1px solid green", borderRadius: "10px" }}>
            <img src={whyInterneeIcon} alt="why internee"/>
          </div>
          <div style={{display: "flex", alignItems: "center"}}> 
            <h2 style={{fontSize: "1.4rem", ver: "center", paddingLeft: "30px" ,paddingRight: "120px"}}>Direct Collaboration with companies for direct hiring</h2>
          </div>
        </div>
      </div>
      <div style={{width: "50%", verticalAlign: "center", display: "flex", alignItems: "center"}}>
        <img src={whyInterneeImage} alt="job apply" style={{width: "60%", height: "60%"}} />
      </div>
    </div>
  );
}

export default WhyInternee;