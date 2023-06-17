import "./About.css";
import { Card, Grid, Text } from "@nextui-org/react";

export default function About() {
  const card_css = {
    "&:hover": {
      background: "$pink100",
      color: "$pink800",
    },
  };
  return (
    <div className="about-section">
      <h3 className="about">ABOUT.</h3>
      <h6 className="about-me">
        I am a persevering, conscientious, and quick-witted individual.
        Currently pursuing Masters in Computer Science at the University at
        Buffalo. Actively seeking full time opportunities.
      </h6>
      <div className="about-roles">
        <Grid.Container className="grid-container" gap={1} justify="center">
          <Grid lg={3}>
            <Card
              isHoverable
              variant="bordered"
              className="about-card"
              css={card_css}
            >
              <Card.Body>
                <Text style={{ marginBottom: 0 }}>
                  <box-icon
                    name="terminal"
                    type="solid"
                    color="white"
                    size="26px"
                    animation="tada"
                  ></box-icon>
                </Text>
                <Text
                  style={{ color: "white", fontWeight: 600, fontSize: "18px" }}
                >
                  Software Engineer
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid lg={3}>
            <Card isHoverable variant="bordered" className="about-card">
              <Card.Body>
                <Text style={{ marginBottom: 0 }}>
                  <box-icon
                    name="docker"
                    type="logo"
                    color="white"
                    size="30px"
                    animation="tada"
                  ></box-icon>
                </Text>

                <Text
                  style={{ color: "white", fontWeight: 600, fontSize: "18px" }}
                >
                  Full-Stack Developer
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid lg={3}>
            <Card isHoverable variant="bordered" className="about-card">
              <Card.Body>
                <Text style={{ marginBottom: 0 }}>
                  <box-icon
                    type="logo"
                    name="react"
                    color="white"
                    animation="tada"
                  ></box-icon>
                </Text>
                <Text
                  style={{ color: "white", fontWeight: 600, fontSize: "18px" }}
                >
                  Frontend Developer
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid lg={3}>
            <Card isHoverable variant="bordered" className="about-card">
              <Card.Body>
                <Text style={{ marginBottom: 0 }}>
                  <box-icon
                    type="solid"
                    name="data"
                    color="white"
                    animation="tada"
                  ></box-icon>
                </Text>
                <Text
                  style={{ color: "white", fontWeight: 600, fontSize: "18px" }}
                >
                  Backend Developer
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
