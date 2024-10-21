import {
  Card,
  Grid,
  Divider,
  Text,
  Link,
  css,
  Button,
  Avatar,
} from "@nextui-org/react";
import "./About.css";
import ResumeDoc from "../src/files/Mamatha_Yarramaneni_resume.pdf";
import navis_logo from "./images/logo-navis.png";
import ub_logo from "./images/logo-ub.png";
import resonate_logo from "./images/logo-resonate.png";

export default function Career() {
  const cardCss = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "justify",
  };
  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "5%",
        width: "100%",
        height: "100%",
      }}
    >
      {/* <div className="about-section-career"> */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h3 className="about">WORK EXPERIENCE.</h3>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <Button
            flat
            color="primary"
            auto
            size="lg"
            style={{ fontSize: "18px" }}
          >
            <Link
              isExternal
              isBlock
              showAnchorIcon
              target="_blank"
              href="https://drive.google.com/file/d/1Jg3USsbU9R7Qx9JrYQK1JfEb3JCegmZM/view?usp=sharing"
              color="primary"
            >
              Resume
            </Link>
          </Button>
        </div>
      </div>
      <Divider style={{ width: "100%" }} />
      <div style={{ marginTop: "30px", height: "100%", marginLeft: "20%" }}>
        <section id="timeline" class="timeline-outer">
          <div
            class="container"
            id="content"
            style={{ marginleft: "50%", height: "100%" }}
          >
            <div class="row">
              <div class="col s12 m12 l12">
                <ul class="timeline">
                  <li
                    class="event"
                    data-date="May'24-Present"
                    style={{ background: "#EFF3FB", padding: "0 15px" }}
                  >
                    <div style={cardCss}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          alt="Resonate logo"
                          src={resonate_logo}
                          width="55px"
                          height="50px"
                          style={{ border: "solid #555", borderRadius: "5px" }}
                        />
                        <Grid.Container css={{ pl: "$6" }}>
                          <Grid xs={12} style={{ margin: 0 }}>
                            <h1 style={{ fontSize: "18px" }}>
                              <Link
                                isExternal
                                isBlock
                                showAnchorIcon
                                target="_blank"
                                href="https://www.linkedin.com/company/resonate-networks/"
                                color="primary"
                              >
                                Resonate
                              </Link>
                            </h1>
                          </Grid>
                          <Grid xs={12}>
                            <Text css={{ color: "black", marginTop: "0px" }}>
                              Software Engineer, Full stack
                            </Text>
                          </Grid>
                        </Grid.Container>
                      </div>
                      <div>US, Remote (Reston, VA)</div>
                    </div>
                    <p
                      style={{
                        color: "rgb(116, 114, 114)",
                        textAlign: "justify",
                      }}
                    >
                      ● Architected and optimized distributed infrastructure,
                      achieving higly scalable and loose copuled system using
                      Message Queues and Job Scheduling systems, to scale user
                      capacity by 500% by re-engineering features to be
                      asynchronous. <br />
                      ● Spearheaded the integration of an advanced Apache POI
                      PowerPoint export feature within a Spring Boot
                      application, automating workflows and boosting customer
                      efficiency by 75%. Developed and deployed multiple RESTful
                      APIs, leveraging functional programming paradigms.
                      Proficient in Splunk for monitoring/logging, and Postman
                      for API testing. <br /> ● Integrated OpenAI GPT-4o,
                      enhancing text summarization efficiency by 40% within the
                      main application. <br /> ● Conducted API performance
                      testing and load testing, identifying breakpoints at
                      10,000 requests per second. Streamlined microservices
                      release processes, participating in Agile practices for
                      continuous improvement and timely delivery.
                    </p>
                  </li>
                  <li
                    class="event"
                    data-date="Jan'23-Dec'23"
                    style={{ background: "#EFF3FB", padding: "0 15px" }}
                  >
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
                              <Link
                                isExternal
                                isBlock
                                showAnchorIcon
                                target="_blank"
                                href="https://www.linkedin.com/company/navis/"
                                color="primary"
                              >
                                University at Buffalo
                              </Link>
                            </h1>
                          </Grid>
                          <Grid xs={12}>
                            <Text css={{ color: "black", marginTop: "0px" }}>
                              Graduate Teaching Assistant
                            </Text>
                          </Grid>
                        </Grid.Container>
                      </div>
                      <div>Buffalo, NY</div>
                    </div>
                    <p
                      style={{
                        color: "rgb(116, 114, 114)",
                        textAlign: "justify",
                      }}
                    >
                      ● CSE 560 - Data Models and Query Languages - Database
                      Design, PostgreSQL, Application Development. <br /> ● CSE
                      574 - Introduction to Machine Learning - Python, Machine
                      Learning, Algorithms.
                    </p>
                  </li>
                  <li
                    class="event"
                    data-date="July'23-Feb'24"
                    style={{ background: "#EFF3FB", padding: "0 15px" }}
                  >
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
                              <Link
                                isExternal
                                isBlock
                                showAnchorIcon
                                target="_blank"
                                href="https://engineering.buffalo.edu/computer-science-engineering.html"
                                color="primary"
                              >
                                Ultimate Tool & Safety
                              </Link>
                            </h1>
                          </Grid>
                          <Grid xs={12}>
                            <Text css={{ color: "black", marginTop: "0px" }}>
                              Software Engineer Intern/Co-op
                            </Text>
                          </Grid>
                        </Grid.Container>
                      </div>
                      <div>Arlington, TX</div>
                    </div>
                    <p
                      style={{
                        color: "rgb(116, 114, 114)",
                        textAlign: "justify",
                      }}
                    >
                      ● Designed, developed, and deployed a scalable end-to-end
                      software application that included full-stack engineering,
                      database administration, load balancing, documentation,
                      and web hosting. <br />● Achieved using React, Redux, on
                      the front-end, NodeJS on the back-end, PostgreSQL, Nginx,
                      and hosted on AWS infrastructure.
                    </p>
                  </li>
                  {/* https://www.linkedin.com/company/navis */}
                  <li
                    class="event"
                    data-date="Jan'21-Aug'22"
                    style={{ background: "#EFF3FB", padding: "0 15px" }}
                  >
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
                              <Link
                                isExternal
                                isBlock
                                showAnchorIcon
                                target="_blank"
                                href="https://www.linkedin.com/company/navis/"
                                color="success"
                              >
                                Navis
                              </Link>
                            </h1>
                          </Grid>
                          <Grid xs={12}>
                            <Text css={{ color: "black", marginTop: "0px" }}>
                              Software Engineer
                            </Text>
                          </Grid>
                        </Grid.Container>
                      </div>
                      <div>Chennai, India</div>
                    </div>
                    <p
                      style={{
                        color: "rgb(116, 114, 114)",
                        textAlign: "justify",
                      }}
                    >
                      ● Full-Stack Development: Accelerated project delivery and
                      minimized code defects by 30% through full-stack expertise
                      in Angular, Spring Boot, and design patterns. Proficient
                      in Functional Programming and Test-Driven Development
                      methods, achieving 90% code coverage through comprehensive
                      unit and integration tests using Mocha.js and Chai.js.{" "}
                      <br /> ● Automation & CI/CD: Optimized CI/CD pipeline with
                      Jenkins triggers for Git and Kubernetes auto-deployment of
                      automation script built using Javascript and NodeJS;
                      reducing failures by 30% and cutting down deployment time
                      from hours to minutes. <br /> ● Test Driven Development :
                      Boosted team productivity by 70% through PostgreSQL stored
                      procedures and Jest unit testing framework for software
                      testing, which led to a 60% drop in critical defects and a
                      decrease in code review iterations <br /> ● Microservices
                      and integration: Integrated Navis BWM with Navis N4 with
                      REST and SOAP API calls by developing cross-functional
                      Groovy scripts, ensuring uninterrupted data flow of
                      10,000+ API calls between microservices. <br /> ●
                      Optimized CI/CD pipeline with Jenkins triggers for Git,
                      Docker, CircleCI, and Kubernetes auto deployment of
                      automation script built using Javascript and NodeJS;
                      reducing failures by 30% and cutting down deployment time
                      from hours to minutes.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
