import "./About.css";
import { Card, Divider, Grid, Text, Link, Badge } from "@nextui-org/react";
import girl_logo from "../src/images/illustration.png";

export default function About() {
  const card_css = {
    "&:hover": {
      background: "$pink100",
      color: "$pink800",
    },
  };
  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "5%",
        height: "100vh",
      }}
    >
      <h3 className="about">ABOUT.</h3>
      <Divider style={{ width: "50%" }} />

      <Grid.Container
        gap={2}
        justify="center"
        style={{ marginTop: "10px", alignItems: "center" }}
      >
        <Grid md={7}>
          <div className="about-me">
            ☘️ Software Engineer, Full stack at{" "}
            <Link
              isBlock
              showAnchorIcon
              target="_blank"
              href="https://www.linkedin.com/company/resonate-networks/"
              css={{ color: "#f31260" }}
            >
              Resonate
            </Link>
            <br />
            ☘️ Ex- Software Engineer at{" "}
            <Link
              isBlock
              showAnchorIcon
              target="_blank"
              href="https://www.linkedin.com/company/navis/"
              color="success"
            >
              Navis
            </Link>
            <br />
            ☘️{" "}
            <Link
              isBlock
              showAnchorIcon
              target="_blank"
              href="https://engineering.buffalo.edu/computer-science-engineering.html"
              color="primary"
            >
              University at Buffalo{" "}
            </Link>
            '23, MS CS. <br />
            ☘️ Persevering, Conscientious, and Quick-witted.
            <br />
            ☘️ Values: Teamwork, Feedback, Continuous Improvement. <br />
            ☘️{" "}
            <Badge color="warning" variant="bordered" size="lg">
              Seeking Full time roles.
            </Badge>
            <br />
          </div>
        </Grid>
        <Grid md={5}>
          <img src={girl_logo} style={{ width: "100%" }}></img>
        </Grid>
      </Grid.Container>
    </div>
  );
}
