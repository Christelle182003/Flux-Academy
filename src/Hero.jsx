import Action from "./Action";
import heroImg from "./assets/heroImg-Desktop-1440px.svg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="left-hero">
        <div className="top-left-hero">
          <h2 id="med">
            Medium length
            <br />
            display headline
          </h2>
          <span id="separa">
            Separated they live in Bookmarks right at the coast of the
            <br />
            famous Semantics, large language{" "}
          </span>
        </div>
        <div className="bottom-left-hero">
          <Action />
          <h6>
            5,000 people like you have purchased this product!
          </h6>
        </div>
      </div>
      <div className="Right">
        <img id="hero-img" src={heroImg} alt="heroImg" />
      </div>
    </div>
  );
}

export default Hero;
