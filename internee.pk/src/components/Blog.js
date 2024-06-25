import certificateImage from '../assets/certificate.PNG';
import Card from './Card';
const Blog = () => {
  const cards = [
    {
      title: "Complete all of the task but didn't get certification yet? 😓🤦‍♀️",
      description: `📧 Drop us a quick email at issues@internee.pk with the subject "Didn't get certification yet." Our team will swiftly resolve the matter, ensuring you get your recognition promptly.`
    },
    {
      title: "We've hit a major milestone: 20,000 followers on LinkedIn! 🎉",
      description: "Thank you for being a part of our incredible journey towards empowering students and professionals in the world of IT and services. Your support means the world to us! 🚀"
    },
    {
      title: "🚀Calling communities to Empower Students, Collaborate with Internee.pk!✌",
      description: "We'd love to discuss how a collaboration with Internee.pk can benefit your universites , socities, institutes and educational institutions and specially with students."
    },
    {
      image: certificateImage,
      title: "Ready to Showcase Your Expertise? Follow These Simple Steps!",
      description: "To complete the process, send us all the task details via email at careers@internee.pk. This ensures that we have all the necessary information to validate your certification."
    },

  ]
  return (
    <div style={{margin: "150px 0"}}>
      <div style={{ textAlign: "center"}}>
        <p style={{margin: "10px 0", fontSize: "1.2rem"}}>Our Blog</p>
        <h2 style={{fontSize: "2rem"}}>Recent Blog</h2>
      </div>
      <div style={{display: "flex", margin: "50px 0", gap: 20, fontSize: "1.4rem"}}>
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
      </div>
    </div>
  );
}

export default Blog;