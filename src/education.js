import {
  Card,
  Divider,
  Grid,
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

export default function Education() {
  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "5%",
        width: "100%",
        height: "100%",
        height: "100vh",
      }}
    >
      <h3 className="about">EDUCATION.</h3>
      <Divider style={{ width: "100%" }} />
      <div style={{ marginTop: "30px", alignItems: "center" }}>
        <Card
          style={{ width: "100%", paddingLeft: "20px", background: "#EFF3FB" }}
        >
          <Card.Header>
            <img
              alt="UB logo"
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
                    href="https://engineering.buffalo.edu/computer-science-engineering.html"
                    color="primary"
                  >
                    University at Buffalo
                  </Link>
                </h1>
              </Grid>
              <Grid xs={12}>
                <Text css={{ color: "$accents8", marginTop: "0px" }}>
                  Masters in Computer Science : Graduated January 2024
                </Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Text>CGPA: 3.91/4.0</Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{ marginTop: "30px", alignItems: "center" }}>
        <Card
          style={{ width: "100%", paddingLeft: "20px", background: "#EFF3FB" }}
        >
          <Card.Header>
            <img
              alt="sastra logo"
              src="https://yt3.googleusercontent.com/sO3qth8BMUdniBjTSgzYf35RarbBGTp2-H-FtxQxQ6RuUUkL91MF_98gvR1VE9NvOxFd57OCK3Q=s900-c-k-c0x00ffffff-no-rj"
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
                    href="https://www.sastra.edu/"
                    color="primary"
                  >
                    SASTRA University
                  </Link>
                </h1>
              </Grid>
              <Grid xs={12}>
                <Text css={{ color: "$accents8", marginTop: "0px" }}>
                  Bachelors in Computer Science : Graduated June 2021
                </Text>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Body css={{ py: "$2" }}>
            <Text>CGPA: 3.8/4.0</Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
