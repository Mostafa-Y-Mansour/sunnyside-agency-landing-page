import "./Footer.css";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterset from "../../images/icon-pinterest.svg";
function Footer() {
  return (
    <>
      <div className="footer">
        <h4>sunnyside</h4>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <div className="social">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={pinterset} alt="pinterest" />
        </div>
      </div>
    </>
  )
}

export default Footer;