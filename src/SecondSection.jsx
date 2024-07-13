import Rond from "./Rond";
import Ronde from "./Ronde";
import "./SecondSection.css"

let title = "";
const description =
  "All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another.";
function SecondSection(props) {
  return (
    <div className="second-section">
      <div className="grid1">
       <div className="title-1">
       <Ronde/>
       <h4>{(title = "Feature one")}</h4>
       </div>
        <p>{description}</p>
      </div>
      <div className="grid2">
        <div className="title-2">
       <Ronde/>
        <h4>{(title = "feature two")}</h4>
        </div>
        <p>{description}</p>
      </div>
      <div className="grid3">
        <div className="title-3">
        <Ronde/>
        <h4>{(title = "feature three")}</h4>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default SecondSection;
