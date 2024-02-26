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
    <div style={{ marginLeft: '10%', marginRight: "10%", marginTop: "5%", height: '100vh' }}>
      <h3 className="about">ABOUT.</h3>
      <Divider style={{ width: "50%" }} />

      {/* <Grid Container className="grid-container" gap={1} justify="center">
          <Grid item xs={6}>
            <img src={girl_logo} style={{ width: "100%" }}></img>
          </Grid>
          <Grid xs={6} style={{ marginLeft: "5px" }}>
            <h6 className="about-me">
              🧩 Persevering, Conscientious, and Quick-witted.<br />
              🧩 Masters in Computer Science, University at Buffalo '23. <br />
              🧩 Actively seeking full time opportunities starting Jan 2024.
            </h6>
          </Grid>
        </Grid.Container> */}
      <Grid.Container gap={2} justify="center" style={{ marginTop: "10px", alignItems: "center" }}>
        <Grid md={6}>
          <div className="about-me">

            ☘️ Ex- Software Engineer at <Link isBlock showAnchorIcon target="_blank" href="https://www.linkedin.com/company/navis/" color="success">
              Navis
            </Link><br />
            ☘️ <Link isBlock showAnchorIcon target="_blank" href="https://engineering.buffalo.edu/computer-science-engineering.html" color="primary">University at Buffalo </Link>'23, MS CS. <br />
            ☘️ Persevering, Conscientious, and Quick-witted.<br />
            ☘️ Values: Teamwork, Feedback, and Continuous Improvement. <br />
            ☘️ <Badge color="warning" variant="bordered" size='lg'>Seeking full time roles starting Jan 2024.</Badge><br />
          </div>
        </Grid>
        <Grid md={6}>
          <img src={girl_logo} style={{ width: "100%" }}></img>
        </Grid>
      </Grid.Container>
      {/* <Grid.Container className="grid-container" gap={1} justify="center">
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
        </Grid.Container> */}

    </div>
  );
}
