import {
  FaYoutubeSquare,
  FaInstagramSquare,
  FaBehanceSquare,
  FaLinkedin,
} from "react-icons/fa";
import "../../scss/NavBar.scss";
import logo from "../../helpers/logo.png";
// import twitter from "../../helpers/icon-twitter.svg";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="https://rastmobile.com/" target="blank">
          <img src={logo} href="" alt="homeImage" />
        </a>
      </div>

      <div className="links">
        <a href="https://rastmobile.com/iletisim/" target="blank">
          Hakkımızda
        </a>
        <a
          href="https://rastmobile.com/case-study/juri-yarisma-yazilimi/"
          target="blank"
        >
          Juri-Yarışma Yazılımı
        </a>
        <a href="https://getwordninja.com/" target="blank">
          Word Ninja
        </a>
        <a
          href="https://rastmobile.com/case-study/word-pyramids-kelime-bulmaca-oyunu/"
          target="blank"
        >
          Word Pyramid
        </a>
      </div>
      <div>
        <ul className="social-icons">
          <li>
            <a href="https://www.youtube.com" target="blank">
              <FaYoutubeSquare type="button" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="blank">
              <FaInstagramSquare />
              {/* <img src={facebook} alt="Facebook" /> */}
            </a>
          </li>
          <li>
            <a href="https://www.behance.com" target="blank">
              <FaBehanceSquare />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="blank">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
