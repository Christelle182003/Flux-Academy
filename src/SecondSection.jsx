import Rond from "./Rond";
import "./SecondSection.css"

let title = "";
const description =
  "All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.";
function SecondSection(props) {
  return (
    <div className="second-section">
      <div className="grid1">
        <Rond />
        <h4>{(title = "Feature one")}</h4>
        <p>{description}</p>
      </div>
      <div className="grid2">
        <Rond />
        <h4>{(title = "feature two")}</h4>
        <p>{description}</p>
      </div>
      <div className="grid3">
        <Rond />
        <h4>{(title = "feature three")}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default SecondSection;
