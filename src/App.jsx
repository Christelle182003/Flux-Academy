import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import SecondSection from "./SecondSection";
import SectionThree from "./SectionThree";
import FourSection from "./FourSection";
import FiveSection from "./FiveSection";
import Footer from "./Footer";
import Rond from "./Rond";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Hero />
        <SecondSection />
        <SectionThree />
        <FourSection/>
        <FiveSection/>
        <Footer/>
        <Rond/>
      </div>
    </>
  );
}

export default App;
