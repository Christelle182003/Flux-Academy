import Photo from "./assets/Image (1).svg";
import Facebook from "./assets/Facebook.svg";
import Twitter from "./assets/Twi.svg";
import "./TestimonialCard.css";
function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <p>
        “A testimonial describing what the
        <br /> person thinks about this service,
        <br /> product or startup in general.”
      </p>
      <img src={Photo} />
      <div className="card-bottom">
        <div className="text-card-bottom">
          <h5> Name Surname</h5>
          <span>Description</span>
        </div>
        <div className="icon">
          <img src={Facebook} />
          <img src={Twitter} />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
