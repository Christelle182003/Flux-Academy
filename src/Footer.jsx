import FooterImg from "./assets/Logo (White) (1).svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="logo-footer">
        <img id="footer-logo" src={FooterImg} alt="FooterImg" />
      </div>
      <div className="footer-column">
        <div className="footer-display">
          <div className="menu-list">
            <div className="first-column">
              <h5>First Column</h5>
              <ul className="menu">
                <li className="menu-items">First Page</li>
                <li className="menu-items">Second Page</li>
                <li className="menu-items">Third</li>
                <li className="menu-items">Four</li>
              </ul>
            </div>
            <div className="second-column">
              <h5>Second Column</h5>
              <ul className="menu">
                <li className="menu-items">Fifth Page</li>
                <li className="menu-items">Sixth Page</li>
                <li className="menu-items">Eigth</li>
              </ul>
            </div>
            <div className="third-column">
              <h5>Third Column</h5>
              <ul className="menu">
                <li className="menu-items">Fifth Page</li>
                <li className="menu-items">Sixth Page</li>
                <li className="menu-items">Eigth</li>
              </ul>
            </div>
          </div>
          <div className="four-column">
            <h5>Subscribe</h5>
            <input id="subscribe" type="text" placeholder="enter email" />
            <p>
              Join our newsletter to stay up to
              <br />
              date on features and releases
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
