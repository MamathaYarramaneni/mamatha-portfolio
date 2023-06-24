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
            <a href={ResumeDoc} download="Resume">
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
            <Grid lg={4} style={{ alignItems: "center" }}>
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
                      UNIVERSITY AT BUFFALO
                    </h3>
                    <h4 style={{ marginTop: "2px", marginLeft: "10px" }}>
                      Graduate Teaching Assistant
                    </h4>
                  </div>
                </div>
                <p class="small" style={{ width: "100%" }}>
                  Jan 2023 - Present <br />
                  <br />
                  Assisted professor with grading and clarified students' doubts
                  and tracked their progress for the course CSE 4/560 - Data
                  Models and Query Languages
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
                      NAVIS
                    </h3>
                    <h4 style={{ marginTop: "2px", marginLeft: "10px" }}>
                      ASSOCIATE SOFTWARE ENGINEER
                    </h4>
                  </div>
                </div>
                <p class="small" style={{ width: "100%" }}>
                  July 2021 - Aug 2022 <br />
                  Worked on the Full Stack Application Development using Angular
                  and Spring Boot incorporating Functional Programming and Test
                  Driven Development.
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
                      NAVIS
                    </h3>
                    <h4 style={{ marginTop: "2px", marginLeft: "10px" }}>
                      ASSOCIATE SOFTWARE ENGINEER INTERN
                    </h4>
                  </div>
                </div>
                <p class="small" style={{ width: "100%" }}>
                  Feb 2021 - June 2021 <br />
                  Reduced the manual data updating by 90% by building an
                  automation script for data population in existing microservice
                  using Node JS and Typescript.
                </p>
              </a>
            </Grid>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
