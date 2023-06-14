import "./About.css";
import { Card, Grid, Text } from "@nextui-org/react";

export default function About() {
  return (
    <div className="about-section">
      <h3 className="about">ABOUT ME</h3>
      <h6 className="about-me">
        👩‍🎓 I am a persevering, conscientious, and quick-witted individual.
        <br />
        🎓 Currently pursuing Masters in Computer Science at the University at
        Buffalo.
        <br />
        💻 Actively seeking full time opportunities.
      </h6>
      <div className="about-roles">
        <Grid.Container className="grid-container" gap={1} justify="center">
          <Grid lg={3}>
            <Card isHoverable variant="bordered" className="about-card">
              <Card.Body>
                <Text style={{color: '#cbcbcb', fontWeight: 600}}>Software Engineer</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid lg={3}>
            <Card isHoverable variant="bordered" className="about-card">
              <Card.Body>
                <Text style={{color: '#cbcbcb', fontWeight: 600}}>Full Stack Developer</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid lg={3}>
            <Card isHoverable variant="bordered" className="about-card">
              <Card.Body>
                <Text style={{color: '#cbcbcb', fontWeight: 600}}>Frontend Developer</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid lg={3}>
            <Card isHoverable variant="bordered" className="about-card">
              <Card.Body>
                <Text style={{color: '#cbcbcb', fontWeight: 600}}>Backend Developer</Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
