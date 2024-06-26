import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import safeAndSecureIcon from '../assets/icon-safe-secure.svg';
import freeFormInternshipIcon from '../assets/icon-money-back-2.svg';
const Reviews = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const cards = [
    {
      comment: "internee.pk is the best, most comprehensive 21st-century innovation for those student who'slooking for internship and upgrade this skillsets. Their projects are tough but market valued.",
      writer: "Rabia Javed",
      location: "Karachi, Pakistan"
    },
    {
      comment: "internee.pk is all about helping us grow our careers. May ALLAH give them more achivements and success on their journey. ",
      writer: "Nagina Asif",
      location: "Karachi, Pakistan"
    },
    {
      comment: "Thanks to internee.pk, I grew up my skills here and now i am working as a Flutter Developer in a US company. ",
      writer: "Razullah Semi",
      location: "KPK, Pakistan"
    },
    {
      comment: "I find internee.pk to be an outstanding tool for getting hands on experience. Sometimes you have to spend a little to make a lot to develop projects.",
      writer: "Kashan Somro",
      location: "Multan, Pakistan"
    },
    {
      comment: "Amazing! internee.pk is a gamechanger! The way thier team is working is so crazy. Thank you for giving me this opportunity ",
      writer: "Naila Rozi",
      location: "Lahore, Pakistan"
    },
    {
      comment: "After getting this internship, my skill got enhance more than my expectation. JazakALLAH for this.",
      writer: "Muhammad Raffique",
      location: "Sindh, Pakistan"
    },
    {
      comment: "I would like to say, I think you have a great product and I'm excited that I found it.",
      writer: "Ayesha Lagarhi",
      location: "Islamabad, Karachi"
    },
    {
      comment: "Been using internee.pk for internship is amazing experience. I do some other virtual internship as well but thier task portal and presentation is amazing",
      writer: "Sidra",
      location: "Bahawalnagar, Pakistan"
    },
  ];
  return (
    <div style={{marginBottom: "100px"}}>
      <div style={{backgroundColor: "lightgrey", padding: "50px 50px 25px", borderRadius: 20}}>
      <h2 style={{fontSize: "2.8rem", marginBottom: "50px"}}>What Students are saying <br/> about internee.pk</h2>
      <Slider {...setting} style={{padding: "10px 0 10px 20px"}}>
        {
        cards.map((card, index) => (
          <ReviewCard 
            key={index}
            comment={card.comment}
            writer={card.writer}
            location={card.location}
          />
        ))
      }
      </Slider>
      <div style={{display: "flex"}}>
        <div style={{width: "50%", padding: "80px"}}>
          <div style={{display: "flex"}}>
            <div style={{width: "14%"}}>
              <img src={safeAndSecureIcon} alt="safe and secure icon" />
            </div>
            <div>
              <h2>Safe and secure</h2>
              <ul style={{paddingLeft: "16px", fontSize: 18, lineHeight: 1.8, marginTop: 14}}>
                <li>Powered by Microsoft Azure cloud technology.</li>
                <li>Encrypted at rest and in transit.</li>
                <li>Data resides in US-based data centers.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div style={{width: "50%", padding: "80px"}}>
          <div style={{display: "flex"}}>
            <div style={{width: "14%"}}>
              <img src={freeFormInternshipIcon} alt="safe and secure icon" />
            </div>
            <div>
              <h2>Free From Internship To Certification</h2>
              <ul style={{paddingLeft: "16px", fontSize: 18, lineHeight: 1.8, marginTop: 14}}>
                <li>Profile Building & Optimization</li>
                <li>Free leaning management system</li>
                <li>Hands on Tasks with Certification</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Reviews; 