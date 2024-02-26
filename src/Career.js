import { Card, Grid, Divider, Text, Link, css, Button, Avatar } from "@nextui-org/react";
import "./About.css";
import ResumeDoc from "../src/files/Mamatha_Yarramaneni_resume.pdf";
import navis_logo from "./images/logo-navis.png";
import ub_logo from "./images/logo-ub.png";

export default function Career() {
  const cardCss = { width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "justify" };
  return (

    <div style={{ marginLeft: '10%', marginRight: "10%", marginTop: "5%", width: "100%", height: "100%" }}>
      {/* <div className="about-section-career"> */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h3 className="about">WORK EXPERIENCE.</h3>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <Button flat color="primary" auto size="lg" style={{ fontSize: "18px" }}>
            <Link isExternal isBlock showAnchorIcon target="_blank" href="https://drive.google.com/file/d/1GlDn1WGuHFdBCmFXQLj8K5kmk7U_RgGQ/view?usp=sharing" color="primary">Resume</Link>
          </Button>
        </div>
      </div>
      <Divider style={{ width: "100%" }} />
      <div style={{ marginTop: "30px", height: "100%", marginLeft: "20%" }}>
        <section id="timeline" class="timeline-outer">
          <div class="container" id="content" style={{ marginleft: "50%", height: "100%" }}>
            <div class="row">
              <div class="col s12 m12 l12">
                <ul class="timeline">
                  <li class="event" data-date="Jan'23-Dec'23" style={{ background: '#EFF3FB', padding: "0 15px" }}>
                    <div style={cardCss}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          alt="Navis logo"
                          src={ub_logo}
                          width="55px"
                          height="55px"
                          style={{ border: "solid #555", borderRadius: "5px" }}
                        />
                        <Grid.Container css={{ pl: "$6" }}>
                          <Grid xs={12} style={{ margin: 0 }}>
                            <h1 style={{ fontSize: "18px" }}>
                              <Link isExternal isBlock showAnchorIcon target="_blank" href="https://www.linkedin.com/company/navis/" color="primary">University at Buffalo</Link>
                            </h1>
                          </Grid>
                          <Grid xs={12}>
                            <Text css={{ color: "black", marginTop: "0px" }}>Graduate Teaching Assistant</Text>
                          </Grid>
                        </Grid.Container>
                      </div>
                      <div>
                        Buffalo, New York, NY
                      </div>
                    </div>
                    <p style={{ color: "rgb(116, 114, 114)", textAlign: "justify" }}>
                      ☘️ CSE 560 - Data Models and Query Languages - Database Design, PostgreSQL, Application Development.
                      ☘️ CSE 574 - Introduction to Machine Learning - Python, Machine Learning, Algorithms.

                    </p>
                  </li>
                  <li class="event" data-date="July'23-Dec'23" style={{ background: '#EFF3FB', padding: "0 15px" }}>
                    <div style={cardCss}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          alt="UB logo"
                          src="https://media.licdn.com/dms/image/C4D0BAQE1LCBFeeP25g/company-logo_200_200/0/1658248328250?e=2147483647&v=beta&t=pk85qDPMAK0jAVAxwvP3R9Ju_L9BK-BBqiIi2Fa59Oo"
                          width="55px"
                          height="55px"
                          style={{ borderRadius: "5px" }}
                        />

                        <Grid.Container css={{ pl: "$6" }}>
                          <Grid xs={12} style={{ margin: 0 }}>
                            <h1 style={{ fontSize: "18px" }}>
                              <Link isExternal isBlock showAnchorIcon target="_blank" href="https://engineering.buffalo.edu/computer-science-engineering.html" color="primary">Ultimate Tool & Safety</Link>
                            </h1>
                          </Grid>
                          <Grid xs={12}>
                            <Text css={{ color: "black", marginTop: "0px" }}>Software Engineer Intern/Co-op</Text>
                          </Grid>
                        </Grid.Container>
                      </div>
                      <div>
                        Arlington, TX
                      </div>
                    </div>
                    <p style={{ color: "rgb(116, 114, 114)", textAlign: "justify" }}>
                      ☘️ Designed, developed, and deployed a scalable end-to-end software application that included full-stack engineering, database administration, load balancing, documentation, and web hosting. <br />
                      ☘️ Achieved using React, Redux, on the front-end, NodeJS on the back-end, PostgreSQL, Nginx, and hosted on AWS infrastructure.

                    </p>
                  </li>
                  {/* https://www.linkedin.com/company/navis */}
                  <li class="event" data-date="June'21-Aug'22" style={{ background: '#EFF3FB', padding: "0 15px" }}>
                    <div style={cardCss}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          alt="Navis logo"
                          src={navis_logo}
                          width="55px"
                          height="55px"
                          style={{ border: "solid #555", borderRadius: "5px" }}
                        />
                        <Grid.Container css={{ pl: "$6" }}>
                          <Grid xs={12} style={{ margin: 0 }}>
                            <h1 style={{ fontSize: "18px" }}>
                              <Link isExternal isBlock showAnchorIcon target="_blank" href="https://www.linkedin.com/company/navis/" color="success">Navis</Link>
                            </h1>
                          </Grid>
                          <Grid xs={12}>
                            <Text css={{ color: "black", marginTop: "0px" }}>Associate Software Engineer</Text>
                          </Grid>
                        </Grid.Container>
                      </div>
                      <div>
                        Chennai, India
                      </div>
                    </div>
                    <p style={{ color: "rgb(116, 114, 114)", textAlign: "justify" }}>
                      ☘️ Engaged in integrating Angular and Spring Boot with high-quality design patterns using Functional Programming and Test-Driven Development methods, triggering 30% faster project delivery and code defect reduction. <br />

                    </p>
                  </li>
                  <li class="event" data-date="Feb'21-June'21" style={{ background: '#EFF3FB', padding: "0 15px" }}>
                    <div style={cardCss}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          alt="Navis logo"
                          src={navis_logo}
                          width="55px"
                          height="55px"
                          style={{ border: "solid #555", borderRadius: "5px" }}
                        />
                        <Grid.Container css={{ pl: "$6" }}>
                          <Grid xs={12} style={{ margin: 0 }}>
                            <h1 style={{ fontSize: "18px" }}>
                              <Link isExternal isBlock showAnchorIcon target="_blank" href="https://www.linkedin.com/company/navis/" color="success">Navis</Link>
                            </h1>
                          </Grid>
                          <Grid xs={12}>
                            <Text css={{ color: "black", marginTop: "0px" }}>Associate Software Engineer Intern</Text>
                          </Grid>
                        </Grid.Container>
                      </div>
                      <div>
                        Chennai, India
                      </div>
                    </div>
                    <p style={{ color: "rgb(116, 114, 114)", textAlign: "justify" }}>
                      ☘️ Optimized CI/CD pipeline with Jenkins triggers for Git,  Docker, CircleCI, and Kubernetes auto deployment of automation script built using Javascript and NodeJS; reducing failures by 30% and cutting down deployment time from hours to minutes.

                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div >
  );
}
