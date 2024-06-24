import Card from "./Card";
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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      image: frontEndImage,
      title: "Front End Internship",
      description: "In this internship, you'll work alongside our talented development team, learning the latest front-end technologies like HTML, CSS, and JavaScript. You'll have the chance to apply your skills to real-world projects, contribute to our growing web presence, and gain hands-on experience in building responsive and interactive web applications. "
    },
    {
      image: cloudComputingImage,
      title: "Cloud Computing Internship",
      description: "In this internship, you'll join our innovative team and gain hands-on experience with leading cloud technologies. You'll learn how to design, develop, and deploy applications on cloud platforms like AWS, Azure, or GCP. You'll collaborate with experienced developers, tackle real-world cloud projects."    
    },
    {
      image: graphicDesigningImage,
      title: "Graphic Designing Internship",
      description: "Calling all aspiring visual storytellers! Our Graphic Design Internship is the perfect opportunity to launch your career in this dynamic field. Here, you'll work alongside our talented design team, honing your skills and contributing to exciting projects."
    },
    {
      image: backEndImage,
      title: "Backend Internship",
      description: "In this internship, you'll join our talented development team, delving into the world of backend development. You'll learn in-demand technologies like Python, Java, or Node.js, and gain hands-on experience building APIs, databases, and the core logic that drives web applications. "
    },
    {
      image: videoEditingImage,
      title: "Video Editing Internship",
      description: "In this internship, you'll join our creative team, learning the latest video editing software and techniques. You'll have the hands-on experience of editing compelling video content, from concept to final product. You'll collaborate with videographers, graphic designers, and other creatives to refine visuals."
    },
    {
      image: mobileAppImage,
      title: "Mobile App Internship",
      description: "In this fast-paced internship, you'll work alongside our talented development team, mastering the latest mobile development tools and frameworks. You'll gain hands-on experience in building user-friendly and engaging mobile apps, contributing to the entire development lifecycle from design integration to testing and deployment."
    },
    {
      image: chatBotImage,
      title: "ChatBot Internship",
      description: "In this internship, you'll join our team of innovators, working on cutting-edge chatbot technologies. You'll learn how to design, develop, and implement chatbots that can understand natural language, provide intelligent responses, and revolutionize user experiences. "
    },
    {
      image: digitalmarketingImage,
      title: "Digital Marketing Internship",
      description:"In this internship, you'll join our dynamic marketing team, learning the latest digital marketing strategies and gaining practical experience. You'll explore areas like social media marketing, search engine optimization (SEO), content creation, and email marketing. You'll collaborate with us on engaging campaigns, analyze data to measure success, and contribute to our online growth. "
    },
    {
      image: cyberSecurityImage,
      title: "CyberSecurity Internship",
      description: "In this internship, you'll join our dynamic marketing team, learning the latest digital marketing strategies and gaining practical experience. You'll explore areas like social media marketing, search engine optimization (SEO), content creation, and email marketing. You'll collaborate with us on engaging campaigns, analyze data to measure success, and contribute to our online growth. "
    },
    {
      image: technicalWriting,
      title: "Technical Writing Internship",
      description: "In this internship, you'll join our dynamic marketing team, learning the latest digital marketing strategies and gaining practical experience. You'll explore areas like social media marketing, search engine optimization (SEO), content creation, and email marketing. You'll collaborate with us on engaging campaigns, analyze data to measure success, and contribute to our online growth. "
    }
  ];

  return (
    <div style={{backgroundColor: "#43A724", padding: "50px 50px 25px", borderRadius: 20}}>
      <Slider {...setting} style={{padding: "10px 0 10px 20px"}}>
      {
        cards.map((card, index) => (
          <Card 
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          />
        ))
      }
      </Slider>
      <h2 style={{color: "white", textAlign: "center", marginTop: 40, fontSize: "1.9rem"}}>Learn skills, <strong>Market will be yours.</strong></h2>
    </div>
  );
}

export default Carousel;