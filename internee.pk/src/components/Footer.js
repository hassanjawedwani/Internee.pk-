import logo from '../assets/logo.webp'
import fbIcon from '../assets/icon-fb-v2.svg';
import instaIcon from '../assets/icon-instagram-v2.svg';
import twitterIcon from '../assets/icon-twitter-v2.svg';
import youtubeIcon from '../assets/icon-youtube-v2.svg';

const Footer = () => {
  return (
    <div style={{display: "flex", fontSize: 22, color: "grey"}}>
      <div style={{width: "25%"}}>
        <img src={logo} alt="logo" width="240px"/>
      </div>
      <div style={{width: "25%"}}>
        <h3 style={{marginBottom: "20px", color: "black"}}>Company</h3>
        <p style={{marginBottom: 10}}>Contact Us</p>
        <p style={{marginBottom: 10}}>Privacy Policy</p>
        <p style={{marginBottom: 10}}>Terms and Conditions</p>
      </div>
      <div style={{width: "25%"}}>
        <h3 style={{marginBottom: "20px", color: "black"}}>Get Help</h3>
        <p style={{marginBottom: 10}}>Training Videos</p>
        <p style={{marginBottom: 10}}>Request Help</p>
      </div>
      <div style={{width: "25%"}}>
        <h3 style={{marginBottom: "20px", color: "black"}}>Socialize with us</h3>
        <div style={{marginBottom: 10}}>
          <img src={fbIcon} alt="fb icon" />
          <img src={instaIcon} alt="insta icon" />
          <img src={twitterIcon} alt="twitter icon" />
          <img src={youtubeIcon} alt="youtube icon" />
        </div>
        <p style={{marginBottom: 10}}>+923453191638</p>
        <p style={{marginBottom: 10}}>info@internee.pk</p>
        <p style={{marginBottom: 10}}>copyright &copy;2024 internee.pk Private Ltd</p>
        <p style={{marginBottom: 10}}>All right reserved</p>
      </div>
    </div>
  )
}
export default Footer;