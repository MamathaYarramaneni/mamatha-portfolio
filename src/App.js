import logo from "./images/logo.svg";
import "./App.css";
import Printer from "./Printer.js";
import LandingPage from "./LandingPage";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./About";
import Career from "./Career";
import Projects from "./Projects";
import Education from "./education";
import { Divider } from "@nextui-org/react";

function App() {
  const background = {
    // background: '#05446b',
    // backgroundImage: `url(${require("./images/layer-1-3.png")})`,
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    // scrollY: "smooth",
    scrollX: "smooth",
    overflow: "auto",
  };

  const background2 = {
    // background: "#05446b",
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    display: "flex",
    // backgroundRepeat: "no-repeat",
    scrollX: "smooth",
    overflow: "auto",
  };

  const background3 = {
    // backgroundImage: `url(${require("./images/layer-3-6.png")})`,
    // background: "#05446b",
    // backgroundPosition: "center",
    // backgroundSize: "100%",
    // backgroundRepeat: "no-repeat",
    // display: 'flex',
    width: "100vw",
    height: "100vh",
    // backgroundRepeat: "no-repeat",
    scrollY: "smooth",
    overflow: "auto",
  };

  return (
    <div href="#home">

      {/* <div id="home" style={background}>
          <div>
            <LandingPage></LandingPage>
            <Printer></Printer>
          </div>
        </div>
        <div offset={1} id="about" style={background2}>
          <About></About>
        </div>
        <div offset={2} id="career" style={background3}>
          <Career></Career>
        </div>
        <div offset={3} id="education" style={background3}>
          <Education></Education>
        </div>
        <div offset={4} id="projects" style={background3}>
          <Projects></Projects>
        </div>
      </div> */}

      <div className="page">
        <div className="content">
          <LandingPage></LandingPage>
          <Printer></Printer>
        </div>
      </div>
      <div className="page" >
        <div className="content" id="about">
          <About></About>
        </div>
      </div>
      <div className="page">
        <div className="content">
          <Education></Education>
        </div>
      </div>
      <div className="page">
        <div className="content" id="career">
          <Career></Career>
        </div>
      </div>
      <div className="page">
        <div className="content" id="projects">
          <Projects></Projects>
        </div>
      </div>
      {/* <ParallaxLayer offset={0} className="center" style={{backgroundImage: "linear-gradient(#e66465, #9198e5)"}}>
        </ParallaxLayer>
       
         */}
      {/* <Printer str="Welcome!, I'm Mamatha 👋"></Printer> */}
      <div
        style={{
          bottom: 0,
          width: "100%",
          height: "60px",
          marginTop: "10%",
          width: "100%",
          textAlign: "center",
          backgroundColor: "#3170dc",
          marginTop: "50px",
          paddingBottom: "10px"
        }}
      >
        <span
          style={{ color: "white", display: "inline-block", fontSize: "15px", paddingTop: "15px" }}
        >
          Made with{" "}
          <box-icon
            type="solid"
            name="heart"
            color="red"
            size="16px"
            animation="tada"
          ></box-icon>{" "}
          by Mamatha Yarramaneni <br /> Copyright © 2024
          {/* <a href="#" target="_blank" style={{textDecoration: 'none'}}>
            
          </a> */}
        </span>
      </div>
    </div>
  );
}

export default App;
