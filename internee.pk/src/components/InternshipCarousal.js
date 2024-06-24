import Card from "./cardddd";
import frontEndImage from '../assets/FrontEnd.webp';
import cloudComputingImage from '../assets/cloud.webp';
import graphicDesigningImage from '../assets/logo-designer-working-computer-desktop.webp';
import backEndImage from '../assets/BackendDevelopment.webp';
import videoEditingImage from '../assets/portrait-woman-customer-service-worker.webp';
import mobileAppImage from '../assets/Mobile App Developer.webp';
import chatBotImage from '../assets/chatbotDevelopment.webp';
import digitalmarketingImage from '../assets/marketing-assistant.webp';
import cyberSecurityImage from '../assets/hack.webp';
import technicalWriting from '../assets/young-woman-teaching-english-lessons.webp';
import Slider from "react-slick";


const InternshipCarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  const cards = [
    {
      image: frontEndImage,
      heading: "Front End Internship",
      context: "In this internship, you'll work alongside our talented development team, learning the latest front-end technologies like HTML, CSS, and JavaScript. You'll have the chance to apply your skills to real-world projects, contribute to our growing web presence, and gain hands-on experience in building responsive and interactive web applications. This internship is a fantastic opportunity for highly motivated individuals to develop their skills, learn from industry professionals, and contribute to a dynamic team environment."
    },
    {
      image: cloudComputingImage,
      heading: "Cloud Computing Internship",
      context: "In this internship, you'll work alongside our talented development team, learning the latest front-end technologies like HTML, CSS, and JavaScript. You'll have the chance to apply your skills to real-world projects, contribute to our growing web presence, and gain hands-on experience in building responsive and interactive web applications. This internship is a fantastic opportunity for highly motivated individuals to develop their skills, learn from industry professionals, and contribute to a dynamic team environment."
    },
    {
      image: graphicDesigningImage,
      heading: "Graphic Design Internship",
      context: "In this internship, you'll work alongside our talented development team, learning the latest front-end technologies like HTML, CSS, and JavaScript. You'll have the chance to apply your skills to real-world projects, contribute to our growing web presence, and gain hands-on experience in building responsive and interactive web applications. This internship is a fantastic opportunity for highly motivated individuals to develop their skills, learn from industry professionals, and contribute to a dynamic team environment."
    },
    {
      image: backEndImage,
      heading: "Backend Internship",
      context: "In this internship, you'll work alongside our talented development team, learning the latest front-end technologies like HTML, CSS, and JavaScript. You'll have the chance to apply your skills to real-world projects, contribute to our growing web presence, and gain hands-on experience in building responsive and interactive web applications. This internship is a fantastic opportunity for highly motivated individuals to develop their skills, learn from industry professionals, and contribute to a dynamic team environment."
    },
    {
      image: videoEditingImage,
      heading: "Video Editin Internship",
      context: "In this internship, you'll work alongside our talented development team, learning the latest front-end technologies like HTML, CSS, and JavaScript. You'll have the chance to apply your skills to real-world projects, contribute to our growing web presence, and gain hands-on experience in building responsive and interactive web applications. This internship is a fantastic opportunity for highly motivated individuals to develop their skills, learn from industry professionals, and contribute to a dynamic team environment."
    },
    {
      image: mobileAppImage,
      heading: "Mobile App Internship",
      context: "In this internship, you'll work alongside our talented development team, learning the latest front-end technologies like HTML, CSS, and JavaScript. You'll have the chance to apply your skills to real-world projects, contribute to our growing web presence, and gain hands-on experience in building responsive and interactive web applications. This internship is a fantastic opportunity for highly motivated individuals to develop their skills, learn from industry professionals, and contribute to a dynamic team environment."
    },
    {
      image: chatBotImage,
      heading: "ChatBot Development Internship",
      context: "In this internship, you'll work alongside our talented development team, learning the latest front-end technologies like HTML, CSS, and JavaScript. You'll have the chance to apply your skills to real-world projects, contribute to our growing web presence, and gain hands-on experience in building responsive and interactive web applications. This internship is a fantastic opportunity for highly motivated individuals to develop their skills, learn from industry professionals, and contribute to a dynamic team environment."
    },
    {
      image: digitalmarketingImage,
      heading: "Digital Marketing Internship",
      context: "In this internship, you'll work alongside our talented development team, learning the latest front-end technologies like HTML, CSS, and JavaScript. You'll have the chance to apply your skills to real-world projects, contribute to our growing web presence, and gain hands-on experience in building responsive and interactive web applications. This internship is a fantastic opportunity for highly motivated individuals to develop their skills, learn from industry professionals, and contribute to a dynamic team environment."
    },
    {
      image: cyberSecurityImage,
      heading: "Cyber Security Internship",
      context: "In this internship, you'll work alongside our talented development team, learning the latest front-end technologies like HTML, CSS, and JavaScript. You'll have the chance to apply your skills to real-world projects, contribute to our growing web presence, and gain hands-on experience in building responsive and interactive web applications. This internship is a fantastic opportunity for highly motivated individuals to develop their skills, learn from industry professionals, and contribute to a dynamic team environment."
    },
    {
      image: technicalWriting,
      heading: "Technical Writing Internship",
      context: "In this internship, you'll work alongside our talented development team, learning the latest front-end technologies like HTML, CSS, and JavaScript. You'll have the chance to apply your skills to real-world projects, contribute to our growing web presence, and gain hands-on experience in building responsive and interactive web applications. This internship is a fantastic opportunity for highly motivated individuals to develop their skills, learn from industry professionals, and contribute to a dynamic team environment."
    }
  ]
  return (
    <div>
      <Slider {...settings}>
      {
        cards.map((card, index) => (
          <Card key={index} data={{image: card.image, heading: card.heading, paragraph: card.context}}/>
        ))
      }
      </Slider>
    </div>  
  )
}

export default InternshipCarousal;