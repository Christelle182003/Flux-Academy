import SectionThreeImg from "./assets/secondSectionImg-Desktop-1440px.svg"
import "./SectionThree.css"

function SectionThree(){
    return(
        <div className="three-section">
        <div className="three-section-img">
            <img id="img-three" src={SectionThreeImg}/>
        </div>
        <div className="three-section-text">
            <h4>Long headline on two lines to turn your<br/> visitors into users and achieve more</h4>
            <p>Separated they live in Bookmarks right at the coast of the famous<br/>Semantics, large language ocean</p>
            <ul>
                <li className="list-three-section">Showcase and embed your work with </li>
                <li className="list-three-section">Publish across social channels in a click </li>
                <li className="list-three-section">Sell your videos worldwide </li>
                <li className="list-three-section">Embed your work with  </li>
            </ul>
        </div>
        </div>
    )
}

export default SectionThree;