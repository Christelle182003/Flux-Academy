import TestimonialCard from "./TestimonialCard";
import "./FourSection.css";

function FourSection() {
  return (
    <div className="four-section">
      <div className="card-1">
        <TestimonialCard />
      </div>
      <div className="card-2">
        <TestimonialCard />
      </div>
      <div className="card-3">
        <TestimonialCard />
      </div>
      <div className="slider">
        <div className="slider-white"> </div>
        <div className="slider-black"> </div>
        <div className="slider-white"> </div>
      </div>
    </div>
  );
}

export default FourSection;
