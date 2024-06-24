import introLogo from '../assets/fav.png';
const Intro = () => {
  return (
    <div style={{width: 800, margin: "100px auto"}}>
      <div style={{maxWidth: "120px", margin: "20px auto"}}><img src={introLogo} alt="introLogo" style={{width: "100%"}}/></div>
      <h2 style={{fontSize: "3.0rem",  textAlign: "center", margin: "20px 0"}}>Who is internee.pk?</h2>
      <p style={{fontSize: "1.3rem", color: "#3d3a3a",   textAlign: "center"}}>The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>
    </div>
  );
}

export default Intro;