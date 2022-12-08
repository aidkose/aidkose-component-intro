import styles from "./footerSection.css";
import footLogo from "../images/dnd-logo.png";

function FooterSection() {
  return (
    <footer>
      <div className="main-footer">
        <div className="main-foot-content">
          <div className="footer-image">
            <img src={footLogo} />
            <span>PLAY WITH ADVANTAGE</span>
          </div>
          <div className="foot-links">
            <div className="footer-links">
              <span>QUICK LINKS</span>
              <p>COMPENDIUM</p>
              <p>BUILDER</p>
              <p>CHARACTERS</p>
              <p>CHANGELOG</p>
              <p>CAREERS</p>
            </div>
            <div className="footer-links">
              <span>QUICK LINKS</span>
              <p>COMPENDIUM</p>
              <p>BUILDER</p>
              <p>CHARACTERS</p>
              <p>CHANGELOG</p>
              <p>CAREERS</p>
            </div>
            <div className="footer-links">
              <span>QUICK LINKS</span>
              <p>COMPENDIUM</p>
              <p>BUILDER</p>
              <p>CHARACTERS</p>
              <p>CHANGELOG</p>
              <p>CAREERS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="top-foot-link">
          <p>©2022 D&D Beyond | All Rights Reserved</p>
          <p>Privacy Policy • Terms of Service • Support</p>
        </div>
        <p>
          Dungeons & Dragons, D&D, their respective logos, and all Wizards
          titles and characters are property of Wizards of the Coast LLC in the
          U.S.A. and other countries. ©2022 Wizards.
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
