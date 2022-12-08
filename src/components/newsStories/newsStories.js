import styles from "./newsStories.css";
import dragon from "../images/dragon.jpg";
import village from "../images/village.jpg";
import story1 from "../images/story1-3.jpg";
import story2 from "../images/story2.jpg";
import story4 from "../images/story4.jpg";
import story5 from "../images/story5.jpg";
import story6 from "../images/story6.jpg";

function NewsStories() {
  return (
    <div className="news-section">
      <div className="news-content">
        <div className="big">
          <div className="big-story">
            <img src={dragon} />
            <div className="big-date">
              <p>Nov 30, 2022 by </p>
              <span>DND Beyond Staff</span>
            </div>
            <div className="details">
              <h2>Dragonlance: Shadow of the Dragon Queen Is Out Now!</h2>
              <p>
                The War of the Lance has begun! Will you become a Mage of High
                Sorcery or a Knight of Solamnia to defeat the armies of the evil
                dragon god Takhisis?
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="big-story">
            <img src={village} />
            <div className="big-date">
              <p>Nov 30, 2022 by </p>
              <span>DND Beyond Staff</span>
            </div>
            <div className="details">
              <h2>
                D&D Adventure Calendar 2022: Ring in the Holidays With 20 Days
                of Gifts
              </h2>
              <p>
                Celebrate the holiday season with a 20-day D&D advent calendar!
                Behind each die, you'll find mirth and danger. Click here to see
                what today's gift is!
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="small">
          <div className="small-story">
            <img src={story1} />
            <div className="small-date">
              <p>Nov 30, 2022 by </p>
              <span>DND Beyond Staff</span>
            </div>
            <h2>The Best Dungeons & Dragons Gifts for the Holidays</h2>
          </div>
          <div className="small-story">
            <img src={story2} />
            <div className="small-date">
              <p>Nov 30, 2022 by </p>
              <span>DND Beyond Staff</span>
            </div>
            <h2>Purchase the Dragonlance Physical + Digital Bundle Today!</h2>
          </div>
          <div className="small-story">
            <img src={story1} />
            <div className="small-date">
              <p>Nov 30, 2022 by </p>
              <span>DND Beyond Staff</span>
            </div>
            <h2>What Is D&D Beyond?</h2>
          </div>
          <div className="small-story">
            <img src={story4} />
            <div className="small-date">
              <p>Nov 30, 2022 by </p>
              <span>DND Beyond Staff</span>
            </div>
            <h2>What You Get With a D&D Beyond Subscription</h2>
          </div>
          <div className="small-story">
            <img src={story5} />
            <div className="small-date">
              <p>Nov 30, 2022 by </p>
              <span>DND Beyond Staff</span>
            </div>
            <h2>Shop D&D's Biggest Sale of the Year!</h2>
          </div>
          <div className="small-story">
            <img src={story6} />
            <div className="small-date">
              <p>Nov 30, 2022 by </p>
              <span>DND Beyond Staff</span>
            </div>
            <h2>
              Last Chance! Preorder Dragonlance for Exclusive Dice, Backdrops,
              and More
            </h2>
          </div>
        </div>
        <div className="news-btn">SEE ALL POSTS</div>
      </div>
    </div>
  );
}

export default NewsStories;
