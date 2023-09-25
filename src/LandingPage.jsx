import "./LandingPage.css";
import { Avatar, Grid } from "@nextui-org/react";
import ub_logo from "../src/images/logo-1.jpeg";

export default function LandingPage() {
  return (
    <header>
      <Grid.Container gap={2} style={{ alignItems: "center" }}>
        <Grid>
          <Avatar size="xl" src={ub_logo} bordered squared color="warning" />
        </Grid>
        <Grid>
          <a class="logo">Mamatha Yarramaneni</a>
        </Grid>
      </Grid.Container>
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
            <a href="#career">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
