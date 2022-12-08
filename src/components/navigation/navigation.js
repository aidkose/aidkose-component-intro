import styles from "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faTwitter,
  faFacebook,
  faYoutube,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const glass = {
  fontSize: "20px",
  color: "#a5afba",
  fontWeight: "bold",
  cursor: "pointer",
};

function Navigation() {
  return (
    <nav>
      <div className="topNav">
        <div className="topNavItems">
          <div className="logo"></div>
          <div className="search">
            <div className="searchbar">
              <FontAwesomeIcon
                className="glass"
                icon={faMagnifyingGlass}
                style={glass}
              />
              <input type={"text"} placeholder={"Search Everything..."}></input>
            </div>
            <div className="nav-socials">
              <FontAwesomeIcon className="fa-icon" icon={faDiscord} />
              <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
              <FontAwesomeIcon className="fa-icon" icon={faFacebook} />
              <FontAwesomeIcon className="fa-icon" icon={faYoutube} />
              <FontAwesomeIcon className="fa-icon" icon={faTwitch} />
            </div>
          </div>
          <div className="signUp">
            <div className="signInBtn">Sign In</div>
            <div className="signUpBtn">Free Sign Up</div>
          </div>
          <FontAwesomeIcon className="mobile-menu" icon={faBars} />
        </div>
      </div>
      <div className="bottomNav">
        <div className="links">
          <a href="#">Collections</a>
          <a href="#">Game Rules</a>
          <a href="#">Sources</a>
          <a href="#">Tools</a>
          <a href="#">Market Place</a>
          <a href="#">Media</a>
          <a href="#">Forums</a>
          <a href="#">New Player Guide</a>
          <a href="#">Subscribe</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
