import { Card, Grid, Text, Link, css, Button, Avatar } from "@nextui-org/react";
import "./About.css";
import ResumeDoc from "../src/files/Mamatha_Yarramaneni_resume.pdf";
import navis_logo from "./images/logo-navis.png";
import ub_logo from "./images/logo-ub.png";

export default function Career() {
  const cardcss = {
    p: "$3",
    mw: "315px",
    mh: "100px",
    position: "absolute",
    // bottom: "15%",
    left: "9%",
    marginBottom: "3px",
  };
  const cardcss2 = {
    p: "$3",
    mw: "350px",
    mh: "100px",
    position: "relative",
    // bottom: "15%",
    left: "9%",
    marginBottom: "3px",
  };

  const cardcss3 = {
    p: "$3",
    mw: "300px",
    mh: "100px",
    position: "relative",
    // bottom: "15%",
    left: "9%",
    marginBottom: "3px",
  };
  const cardcss4 = {
    p: "$3",
    mw: "305px",
    mh: "100px",
    position: "relative",
    // bottom: "15%",
    left: "9%",
    marginBottom: "3px",
  };
  const cardcss5 = {
    p: "$3",
    mw: "380px",
    mh: "100px",
    position: "relative",
    // bottom: "15%",
    left: "9%",
    marginBottom: "3px",
  };
  return (
    // <div>
    //   <div className="about-section-career">
    //     <h3 className="about-career">WORK EXPERIENCE.</h3>
    //     <Grid.Container gap={1}>
    //       <Grid>
    //         <Button
    //           color="#f7d5b2"
    //           auto
    //           ghost
    //           size="lg"
    //           css={{
    //             color: "#f7d5b2",
    //             // marginRight: '30px',
    //             "&:hover": {
    //               background: "#ff8c6e",
    //               color: "white",
    //             },
    //           }}
    //           onClick={() => window.open(ResumeDoc)}
    //         >
    //           <b>View Resume</b>
    //         </Button>
    //       </Grid>
    //       <Grid>
    //         <a href={ResumeDoc} download="Resume">
    //           <Button
    //             color="#f7d5b2"
    //             auto
    //             ghost
    //             size="lg"
    //             css={{
    //               color: "#f7d5b2",
    //               "&:hover": {
    //                 background: "#ff8c6e",
    //                 color: "white",
    //               },
    //             }}
    //           >
    //             <b>Download Resume</b>
    //           </Button>
    //         </a>
    //       </Grid>
    //     </Grid.Container>
    //     {/* <div className="education">
    //       <Grid.Container gap={2}>
    //         <Grid>
    //           <Avatar
    //             size="xl"
    //             src="https://yt3.googleusercontent.com/sO3qth8BMUdniBjTSgzYf35RarbBGTp2-H-FtxQxQ6RuUUkL91MF_98gvR1VE9NvOxFd57OCK3Q=s900-c-k-c0x00ffffff-no-rj"
    //             color="primary"
    //             squared
    //             bordered
    //             css={{
    //                 color: "black",
    //                 // "&:hover": {
    //                 //   background: "#ff8c6e",
    //                 //   color: "white",
    //                 // },
    //               }}
    //           />
    //         </Grid>
    //         <Grid>
    //           <Avatar
    //             size="xl"
    //             src={navis_logo}
    //             color="secondary"
    //             // css={{ size: "$20" }}
    //             squared
    //             bordered
    //           />
    //         </Grid>
    //         <Grid>
    //           <Avatar
    //             size="xl"
    //             src={ub_logo}
    //             color="success"
    //             squared
    //             bordered
    //           />
    //         </Grid>
    //       </Grid.Container>
    //     </div>
    //   </div> */}

    //     <div
    //       style={{
    //         // position: "absolute",
    //         // top: "40%",
    //         // left: "35%",
    //         margin: "auto",
    //       }}
    //     >
    //       <Grid.Container gap={1} >
    //         <Grid lg={4} style={{ alignItems: "center" }}>
    //           <a class="card2-education" href="#">
    //             <div style={{ display: "flex" }}>
    //               <Avatar
    //                 size="xl"
    //                 src={ub_logo}
    //                 color="success"
    //                 bordered
    //                 squared
    //               />
    //               <div>
    //                 <h3
    //                   style={{
    //                     marginTop: "2px",
    //                     marginBottom: "2px",
    //                     marginLeft: "10px",
    //                   }}
    //                 >
    //                   UNIVERSITY AT BUFFALO
    //                 </h3>
    //                 <h4 style={{ marginTop: "2px", marginLeft: "10px" }}>
    //                   Master of Science: Computer Science and Engineering
    //                 </h4>
    //               </div>
    //             </div>
    //             <p class="small" style={{ width: "100%" }}>
    //               Aug 2022 - June 2024 <br />
    //               Grade: 3.9 / 4.0
    //             </p>
    //           </a>
    //         </Grid>
    //         <Grid lg={4}>
    //           <a class="card2-education" href="#">
    //             <div style={{ display: "flex" }}>
    //               <Avatar
    //                 size="xl"
    //                 src="https://yt3.googleusercontent.com/sO3qth8BMUdniBjTSgzYf35RarbBGTp2-H-FtxQxQ6RuUUkL91MF_98gvR1VE9NvOxFd57OCK3Q=s900-c-k-c0x00ffffff-no-rj"
    //                 color="primary"
    //                 squared
    //                 bordered
    //                 css={{
    //                   color: "black",
    //                 }}
    //               />
    //               <div>
    //                 <h3
    //                   style={{
    //                     marginTop: "2px",
    //                     marginBottom: "2px",
    //                     marginLeft: "10px",
    //                   }}
    //                 >
    //                   SASTRA UNIVERSITY
    //                 </h3>
    //                 <h4 style={{ marginTop: "2px", marginLeft: "10px" }}>
    //                   Bachelor of Technology: Computer Science and Engineering
    //                 </h4>
    //               </div>
    //             </div>
    //             <p class="small" style={{ width: "100%" }}>
    //               June 2017 - June 2021 <br />
    //               Grade: 3.8 / 4.0
    //             </p>
    //           </a>
    //         </Grid>
    //         <Grid lg={4}>
    //           <a class="card2-education" href="#">
    //             <div style={{ display: "flex" }}>
    //               <Avatar
    //                 size="xl"
    //                 src="https://yt3.googleusercontent.com/sO3qth8BMUdniBjTSgzYf35RarbBGTp2-H-FtxQxQ6RuUUkL91MF_98gvR1VE9NvOxFd57OCK3Q=s900-c-k-c0x00ffffff-no-rj"
    //                 color="primary"
    //                 squared
    //                 bordered
    //                 css={{
    //                   color: "black",
    //                 }}
    //               />
    //               <div>
    //                 <h3
    //                   style={{
    //                     marginTop: "2px",
    //                     marginBottom: "2px",
    //                     marginLeft: "10px",
    //                   }}
    //                 >
    //                   SASTRA UNIVERSITY
    //                 </h3>
    //                 <h4 style={{ marginTop: "2px", marginLeft: "10px" }}>
    //                   Bachelor of Technology: Computer Science and Engineering
    //                 </h4>
    //               </div>
    //             </div>
    //             <p class="small" >
    //               June 2017 - June 2021 <br />
    //               Grade: 3.8 / 4.0
    //             </p>
    //           </a>
    //         </Grid>
    //       </Grid.Container>
    //     </div>
    //   </div>

    // </div>
    <div>
      <div className="about-section-career">
        <h3 className="about-career">WORK EXPERIENCE.</h3>
        <Grid.Container gap={1}>
          <Grid>
            <Button
              color="#f7d5b2"
              auto
              ghost
              size="lg"
              css={{
                color: "#f7d5b2",
                "&:hover": {
                  background: "#ff8c6e",
                  color: "white",
                },
              }}
              onClick={() => window.open(ResumeDoc)}
            >
              <b>View Resume</b>
            </Button>
          </Grid>
          <Grid>
            <a href={ResumeDoc} download="Mamatha_Yarramaneni_Resume">
              <Button
                color="#f7d5b2"
                auto
                ghost
                size="lg"
                css={{
                  color: "#f7d5b2",
                  "&:hover": {
                    background: "#ff8c6e",
                    color: "white",
                  },
                }}
              >
                <b>Download Resume</b>
              </Button>
            </a>
          </Grid>
        </Grid.Container>
        {/* <div className="education">
          <Grid.Container gap={2}>
            <Grid>
              <Avatar
                size="xl"
                src="https://yt3.googleusercontent.com/sO3qth8BMUdniBjTSgzYf35RarbBGTp2-H-FtxQxQ6RuUUkL91MF_98gvR1VE9NvOxFd57OCK3Q=s900-c-k-c0x00ffffff-no-rj"
                color="primary"
                squared
                bordered
                css={{
                    color: "black",
                    // "&:hover": {
                    //   background: "#ff8c6e",
                    //   color: "white",
                    // },
                  }}
              />
            </Grid>
            <Grid>
              <Avatar
                size="xl"
                src={navis_logo}
                color="secondary"
                // css={{ size: "$20" }}
                squared
                bordered
              />
            </Grid>
            <Grid>
              <Avatar
                size="xl"
                src={ub_logo}
                color="success"
                squared
                bordered
              />
            </Grid>
          </Grid.Container>
        </div>
      </div> */}

        <div
          style={{
            // position: "absolute",
            // top: "40%",
            // left: "35%",
            margin: "auto",
          }}
        >
          <Grid.Container
            gap={1}
            justify="center"
            style={{ maxWidth: "90%", marginTop: "5%" }}
          >
            <Grid lg={4}>
              <a class="card2-education" href="#">
                <div style={{ display: "flex" }}>
                  <Avatar
                    size="xl"
                    src={
                      "https://media.licdn.com/dms/image/C4D0BAQE1LCBFeeP25g/company-logo_200_200/0/1658248328250?e=2147483647&v=beta&t=pk85qDPMAK0jAVAxwvP3R9Ju_L9BK-BBqiIi2Fa59Oo"
                    }
                    color="secondary"
                    // css={{ size: "$20" }}
                    squared
                    bordered
                  />
                  <div>
                    <h3
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        marginLeft: "10px",
                      }}
                    >
                      Ultimate Tool & Safety
                    </h3>
                    <h4 style={{ marginTop: "2px", marginLeft: "10px" }}>
                      SOFTWARE ENGINEER INTERN
                    </h4>
                  </div>
                </div>
                <p class="small" style={{ width: "100%" }}>
                  July 2023 - Present
                  <br />
                  <br />
                  Designed, developed, and deployed a scalable end-to-end
                  software application which included full-stack engineering,
                  database administration, load balancing, and web hosting. This
                  was achieved using React, Redux, NodeJS, PostgreSQL, Nginx,
                  and hosted on AWS infrastructure.
                </p>
              </a>
            </Grid>
            <Grid lg={4}>
              <a class="card2-education" href="#">
                <div style={{ display: "flex" }}>
                  <Avatar
                    size="xl"
                    src={ub_logo}
                    color="success"
                    bordered
                    squared
                  />
                  <div>
                    <h3
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        marginLeft: "10px",
                      }}
                    >
                      University at Buffalo
                    </h3>
                    <h4 style={{ marginTop: "2px", marginLeft: "10px" }}>
                      GRADUATE TEACHING ASSISTANT - GRADER
                    </h4>
                  </div>
                </div>
                <p class="small" style={{ width: "100%" }}>
                  Jan 2023 - Present <br />
                  <br />
                  CSE 560 - Data Models and Query Languages: Provided one-on-one
                  support to 8 project teams facing database design and
                  integration challenges, inducing a 10% improvement in overall
                  course progress.
                </p>
              </a>
            </Grid>

            <Grid lg={4}>
              <a class="card2-education" href="#">
                <div style={{ display: "flex" }}>
                  <Avatar
                    size="xl"
                    src={navis_logo}
                    color="secondary"
                    // css={{ size: "$20" }}
                    squared
                    bordered
                  />
                  <div>
                    <h3
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        marginLeft: "10px",
                      }}
                    >
                      Navis
                    </h3>
                    <h4 style={{ marginTop: "2px", marginLeft: "10px" }}>
                      ASSOCIATE SOFTWARE ENGINEER
                    </h4>
                  </div>
                </div>
                <p class="small" style={{ width: "100%" }}>
                  Feb 2021 - August 2022 <br />
                  <br />
                  Engaged in integrating Angular and Spring Boot with
                  high-quality code using Functional Programming and Test-Driven
                  Development methods, triggering 30% faster project delivery
                  and code defect reduction.
                </p>
              </a>
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
