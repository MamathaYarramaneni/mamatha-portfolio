import logo from "./images/logo.svg";
import "./App.css";
import Printer from "./Printer.js";
import LandingPage from "./LandingPage";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./About";
import Career from "./Career";

function App() {
  const background = {
    backgroundImage: `url(${require("./images/layer-1.png")})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    // scrollY: "smooth",
  };

  const background2 = {
    background: 'black',
    // backgroundPosition: "center",
    backgroundSize: "cover",
    display: 'flex'
    // backgroundRepeat: "no-repeat",
  };

  const background3 = {
    backgroundImage: `url(${require("./images/layer-3-2.png")})`,
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: "no-repeat",
    // display: 'flex',
    width: "100vw",
    height: "100vh",
    // backgroundRepeat: "no-repeat",
    // scrollY: "smooth",
  };

  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer offset={0} style={background}>
            <LandingPage></LandingPage>
            <Printer str="Welcome!, I'm Mamatha 👋"></Printer>
        </ParallaxLayer>
        <ParallaxLayer offset={1}  style={background2}>
          <About></About>
        </ParallaxLayer>
        <ParallaxLayer offset={2}  style={background3}>
          <Career></Career>
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
