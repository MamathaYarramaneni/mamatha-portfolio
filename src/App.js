import logo from "./images/logo.svg";
import "./App.css";
import Printer from "./Printer.js";
import LandingPage from "./LandingPage";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./About";
import Career from "./Career";
import Projects from "./Projects";

function App() {
  const background = {
    // background: '#05446b',
    backgroundImage: `url(${require("./images/layer-1-3.png")})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    // scrollY: "smooth",
  };

  const background2 = {
    background: "#05446b",
    // backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    // backgroundRepeat: "no-repeat",
  };

  const background3 = {
    // backgroundImage: `url(${require("./images/layer-3-6.png")})`,
    background: "#05446b",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    // display: 'flex',
    width: "100vw",
    height: "100vh",
    // backgroundRepeat: "no-repeat",
    // scrollY: "smooth",
  };

  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer offset={0} id="home" style={background}>
          <LandingPage></LandingPage>
          <Printer ></Printer>
        </ParallaxLayer>
        <ParallaxLayer offset={1} id="about" style={background2}>
          <About></About>
        </ParallaxLayer>
        <ParallaxLayer offset={2} id="career" style={background3}>
          <Career></Career>
        </ParallaxLayer>
        <ParallaxLayer offset={3} id="projects" style={background2}>
          <Projects></Projects>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} className="center" style={{backgroundImage: "linear-gradient(#e66465, #9198e5)"}}>
        </ParallaxLayer>
       
         */}
      </Parallax>
      {/* <Printer str="Welcome!, I'm Mamatha 👋"></Printer> */}
    </div>
  );
}

export default App;
