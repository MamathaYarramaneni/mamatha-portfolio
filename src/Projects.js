import "./Projects.css";
import "boxicons";
import { Card, Grid, Text } from "@nextui-org/react";

export default function Projects() {
  return (
    <div>
      <div className="about-section-career">
        <h3 className="about-career">PROJECTS.</h3>
      </div>
      {/* <div class="blog_post">
        <div class="img_pod">
          <img
            className="projects-img"
            src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
            alt="random image"
          />
        </div>
        <div class="container_copy">
          <h3 className="projects-h3">12 January 2019</h3>
          <h1 className="projects-h1">CSS Positioning</h1>
          <p className="projects-p">
            The position property specifies the type of positioning method used
            for an element (static, relative, absolute, fixed, or sticky).
          </p>
          <a class="btn_primary-projects" href="#" target="_blank">
            Read More
          </a>
        </div>
      </div> */}
      <div
        style={{
        //   position: "absolute",
        //   top: "20%",
        //   left: "15%",
          margin: "auto",
        }}
      >
        <Grid.Container
          gap={1}
          justify="center"
          style={{ paddingLeft: "20px", maxWidth: "80%" }}
        >
          <Grid lg={4} style={{ alignItems: "center" }}>
            <a class="card2" href="#">
              <h3>Clickbait Spoiling</h3>
              <p class="small">
                Collaborated and constructed a model to classify and summarize
                the spoilers for clickbait posts. Information Retrieval, Neural,
                and Transformers models like BERT, DeBERTa, and RoBERTa were
                used for test classification, passage retrieval, and
                question-answering models.
              </p>

              <div class="go-corner" href="#">
                <div class="go-arrow">
                  <box-icon type="logo" name="github" color="white"></box-icon>
                </div>
              </div>
            </a>
          </Grid>
          <Grid lg={4}>
            <a class="card2" href="#">
              <h3>Hospital Data Management System</h3>
              <p class="small">
                Engineered a database system by designing, and developing a
                robust model for hospital datasets using Indexing, Triggers, and
                Stored procedures. Coded a full stack application using PERN
                stack.
              </p>
              <div class="go-corner" href="#">
                <div class="go-arrow">
                  <box-icon type="logo" name="github" color="white"></box-icon>
                </div>
              </div>
            </a>
          </Grid>
          <Grid lg={4}>
            <a class="card2" href="#">
              <h3>Twitter Hashtag Analysis</h3>
              <p class="small">
                Developed a pipeline to generate the top 10 trending hashtags on
                a dataset collected from Twitter streaming API. Implemented a
                Hadoop MapReduce script on the Dataproc service of the Google
                Cloud Platform.
              </p>

              <div class="go-corner" href="#">
                <div class="go-arrow">
                  <box-icon type="logo" name="github" color="white"></box-icon>
                </div>
              </div>
            </a>
          </Grid>
        </Grid.Container>
        <Grid.Container
          gap={1}
          justify="center"
          style={{ paddingLeft: "20px", maxWidth: "80%" }}
        >
          <Grid lg={4} style={{ alignItems: "center" }}>
            <a class="card2" href="#">
              <h3>Chronic Kidney Disease prediction system</h3>
              <p class="small">
                Built a robust diagnostic model for the chronic kidney disease
                dataset collected from the UCI repository. Bagging and Random
                Subspace Ensemble methods were adapted to develop the model.
              </p>

              <div class="go-corner" href="#">
                <div class="go-arrow">
                  <box-icon type="logo" name="github" color="white"></box-icon>
                </div>
              </div>
            </a>
          </Grid>
          <Grid lg={4}>
            <a class="card2" href="#">
              <h3>Home Services Application</h3>
              <p class="small">
                Incorporated software engineering principles to generate a
                mobile application that acts as a platform for home services.
                Android Studio and Firebase were used to accomplish the running
                pipeline for the workflow.
              </p>

              <div class="go-corner" href="#">
                <div class="go-arrow">
                  <box-icon type="logo" name="github" color="white"></box-icon>
                </div>
              </div>
            </a>
          </Grid>
          <Grid lg={4}>
            <a class="card2" href="#">
              <h3>Portfolio Website</h3>
              <p class="small">
                Built a Frontend portfolio application using React and GitHub
                pages.
              </p>

              <div class="go-corner" href="#">
                <div class="go-arrow">
                  <box-icon type="logo" name="github" color="white"></box-icon>
                </div>
              </div>
            </a>
          </Grid>
        </Grid.Container>
      </div>
      <div
        style={{
        //   position: "absolute",
        //   left: "50%",
        //   bottom: "1%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span
          style={{ color: "white", display: "inline-block", fontSize: "15px" }}
        >
          Copyright © 2023  Made with{" "}
          <box-icon
            type="solid"
            name="heart"
            color="red"
            size="16px"
            animation="tada"
          ></box-icon>{" "}
          by Mamatha Yarramaneni
          {/* <a href="#" target="_blank" style={{textDecoration: 'none'}}>
            
          </a> */}
        </span>
      </div>
    </div>
  );
}
