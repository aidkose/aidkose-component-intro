import styles from "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-image">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>Playing Dungeons & Dragons Has Never Been Easier</h1>
            <p>
              Create characters in seconds, build and run combat encounters on
              the fly, and start your collection of official books with D&D
              Beyond. Click below to get started.
            </p>
            <div className="hero-btn">SIGN UP FOR FREE</div>
          </div>
        </div>
      </div>
      <div className="hero-bar">
        <div className="hero-bar-wrapper">
          <div className="bar-btn">
            <p id="btn1">Create a Character</p>
          </div>
          <div className="bar-btn">
            <p id="btn2">Subscription Benefits</p>
          </div>
          <div className="bar-btn">
            <p id="btn3">One D&D Playtest</p>
          </div>
          <div className="bar-btn">
            <p id="btn4">Build an Encounter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
