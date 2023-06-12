import logo from "./images/logo.svg";
import "./App.css";
import Printer from "./Printer.js";
import LandingPage from "./LandingPage";

function App() {
  const background = {
    backgroundImage: `url(${require("./images/landing.png")})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat-x",
    width: "100vw",
    height: "100vh",
    scrollY: "smooth"
  };

  return (
    <div style={background}>
      <LandingPage></LandingPage>
      <Printer str="Welcome!, I'm Mamatha 👋"></Printer>
      <Printer str="Welcome!, I'm Mamatha 👋"></Printer>
    </div>
  );
}

export default App;
