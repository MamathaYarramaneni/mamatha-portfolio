import "./LandingPage.css";
import { Avatar, Divider, Grid, Link } from "@nextui-org/react";
import ub_logo from "../src/images/logo-1.jpeg";

export default function LandingPage() {
  const name = "<Mamatha Yarramaneni />";

  return (
    <header style={{ marginLeft: "12%" }}>
      <div style={{ alignItems: "center", display: "flex" }}>

        <Avatar size="xl" src={ub_logo} bordered color="warning" />

        <a class="logo" style={{ marginLeft: "10px" }}>{name}</a>
      </div>
      <nav>
        <ul className="mainMenu">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#career">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <Link isBlock showAnchorIcon target="_blank" href="https://drive.google.com/file/d/1Jg3USsbU9R7Qx9JrYQK1JfEb3JCegmZM/view?usp=sharing" color="primary">Resume</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
