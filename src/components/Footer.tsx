import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.png";
import homeStyles from "../styles/home.module.css";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo" className={homeStyles.logo} />

      <ul className={homeStyles.footer__links}>
        <li className={homeStyles.link}>
          <a href="#home">Home</a>
        </li>
        <li className={homeStyles.link}>
          <a href="#giornalini">Giornalini</a>
        </li>
        <li className={homeStyles.link}>
          <a href="#aiutaci">Aiutaci</a>
        </li>
        <div className={homeStyles.icon__container}>
          <li className={homeStyles.link}>
            <a href="https://www.instagram.com/ilbuongiornodb/" target="_blank">
              <FontAwesomeIcon className="fa-2x" icon={faInstagram} />
            </a>
          </li>
          <li className={homeStyles.link}>
            <a
              href="https://open.spotify.com/show/7ChMjhCqr3HhAOMRoq8NP9"
              target="_blank"
            >
              <FontAwesomeIcon className="fa-2x" icon={faSpotify} />
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
