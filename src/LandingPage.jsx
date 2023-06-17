import "./LandingPage.css";
import { Avatar } from "@nextui-org/react";

export default function LandingPage() {
  return (
    <header>
      <a href="#home" class="logo"> 
          Mamatha Yarramaneni
          </a>
      <nav>
        <ul className="mainMenu">
          <li>
            <a href="#about" >About</a>
          </li>
          <li>
            <a href="#career">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#layer3">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
