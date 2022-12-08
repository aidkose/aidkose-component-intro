import styles from "./sub.css";

function Subscription() {
  return (
    <div className="sub-wrapper">
      <div className="sub">
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
  );
}

export default Subscription;
