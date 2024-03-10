import "./Projects.css";
import "boxicons";
import { Card, Text, Link, Divider, Badge } from "@nextui-org/react";

export default function Projects() {
  const cardCss = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: "3%",
    textAlign: "justify"
  };
  return (
    <div style={{ marginLeft: '10%', marginRight: "10%", marginTop: "5%", width: "100%", height: "100%" }}>
      <h3 className="about">PROJECT EXPERIENCE.</h3>
      <Divider style={{ width: "100%" }} />
      <div style={{ marginTop: "30px", alignItems: "center" }}>
        <Card style={{ width: "100%", paddingLeft: "20px", background: '#EFF3FB' }}>
          <Card.Header>
            <div style={cardCss}>
              <h1 style={{ fontSize: "18px" }}>
                <Link isExternal isBlock showAnchorIcon target="_blank" href="https://github.com/MamathaYarramaneni/productivize-pro" color="primary">Productivize: Chrome Extension</Link>
              </h1>
              <p css={{ color: "$accents8", marginTop: "0px" }}>
                <Badge color="primary" variant="flat" size='lg'>
                  JavaScript
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  Manifest V3
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  HTML
                </Badge> </p>
            </div>
          </Card.Header>
          <Divider style={{ width: "98%" }} />
          <Card.Body css={{ py: "$2" }}>
            <Text style={{ marginRight: "3%", textAlign: "justify" }}>
              ☘️ Created a Chrome extension with a productivity timer and stopwatch, enabling daily productivity tracking. Empowered with data analysis, enhancing time management efficiency and task completion rates.
            </Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{ marginTop: "30px", alignItems: "center" }}>
        <Card style={{ width: "100%", paddingLeft: "20px", background: '#EFF3FB' }}>
          <Card.Header>
            <div style={cardCss}>
              <h1 style={{ fontSize: "18px" }}>
                <Link isExternal isBlock showAnchorIcon target="_blank" href="https://github.com/MamathaYarramaneni" color="primary">Socket Link C++</Link>
              </h1>
              <p css={{ color: "$accents8", marginTop: "0px" }}>
                <Badge color="primary" variant="flat" size='lg'>
                  C++
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  Socket Programming
                </Badge></p>
            </div>
          </Card.Header>
          <Divider style={{ width: "98%" }} />
          <Card.Body css={{ py: "$2" }}>
            <Text style={{ marginRight: "3%", textAlign: "justify" }}>
              ☘️ Managed and led a team of 3 to implement a C++ socket program using object oriented programming for a single-server multi-client communication system using broadcasting, message queue buffer, client and message statistics; enhancing real-time data exchange and enabling efficient client-server interactions.

            </Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{ marginTop: "30px", alignItems: "center" }}>
        <Card style={{ width: "100%", paddingLeft: "20px", background: '#EFF3FB' }}>
          <Card.Header>
            <div style={cardCss}>
              <h1 style={{ fontSize: "18px" }}>
                <Link isExternal isBlock showAnchorIcon target="_blank" href="https://github.com/MamathaYarramaneni/HealthHub-React/tree/main/myapp" color="primary">Health Hub Pro</Link>
              </h1>
              <p css={{ color: "$accents8", marginTop: "0px" }}>
                <Badge color="primary" variant="flat" size='lg'>
                  TypeScript
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  ReactJS
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  ExpressJS
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  NodeJS
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  PostgreSQL
                </Badge>

              </p>
            </div>
          </Card.Header>
          <Divider style={{ width: "98%" }} />
          <Card.Body css={{ py: "$2" }}>
            <Text style={{ marginRight: "3%", textAlign: "justify" }}>
              ☘️ Engineered a database system by designing, and developing a robust model for hospital datasets using Indexing, Triggers, and Stored procedures. Coded a full stack application using PERN stack.

            </Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{ marginTop: "30px", alignItems: "center" }}>
        <Card style={{ width: "100%", paddingLeft: "20px", background: '#EFF3FB' }}>
          <Card.Header>
            <div style={cardCss}>
              <h1 style={{ fontSize: "18px" }}>
                <Link isExternal isBlock showAnchorIcon target="_blank" href="https://github.com/MamathaYarramaneni/mamatha-portfolio" color="primary">Portfolio Website</Link>
              </h1>
              <p css={{ color: "$accents8", marginTop: "0px" }}>
                <Badge color="primary" variant="flat" size='lg'>
                  JavaScript
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  ReactJS
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  HTML
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  CSS
                </Badge>  </p>
            </div>
          </Card.Header>
          <Divider style={{ width: "98%" }} />
          <Card.Body css={{ py: "$2" }}>
            <Text style={{ marginRight: "3%", textAlign: "justify" }}>
              ☘️ Engineered portfolio site using React, JavaScript, HTML, CSS, demonstrating expertise in full-stack web development and UI/UX design principles.
            </Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{ marginTop: "30px", alignItems: "center" }}>
        <Card style={{ width: "100%", paddingLeft: "20px", background: '#EFF3FB' }}>
          <Card.Header>
            <div style={cardCss}>
              <h1 style={{ fontSize: "18px" }}>
                <Link isExternal isBlock showAnchorIcon target="_blank" href="https://github.com/MamathaYarramaneni/twitter_hashtag_analysis/blob/main/TestClass.java" color="primary">Hashtag Stream Analyzer</Link>
              </h1>
              <p css={{ color: "$accents8", marginTop: "0px" }}>
                <Badge color="primary" variant="flat" size='lg'>
                  Java
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  Hadoop
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  GCP
                </Badge> </p>
            </div>
          </Card.Header>
          <Divider style={{ width: "98%" }} />
          <Card.Body css={{ py: "$2", marginRight: "5%" }}>
            <Text style={{ marginRight: "3%", textAlign: "justify" }}>
              ☘️ Developed a pipeline to generate the top 10 trending hashtags on a dataset collected from Twitter streaming API. <br />
              ☘️ Implemented a Hadoop MapReduce script on the Dataproc service of the Google Cloud Platform.
            </Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{ marginTop: "30px", alignItems: "center" }}>
        <Card style={{ width: "100%", paddingLeft: "20px", background: '#EFF3FB' }}>
          <Card.Header>
            <div style={cardCss}>
              <h1 style={{ fontSize: "18px" }}>
                <Link isExternal isBlock showAnchorIcon target="_blank" href="https://github.com/MamathaYarramaneni/clickbait-nlp-transformers" color="primary">Clickbait Spoiling</Link>
              </h1>
              <p css={{ color: "$accents8", marginTop: "0px" }}>
                <Badge color="primary" variant="flat" size='lg'>
                  Python
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  PyTorch
                </Badge>
                <Badge color="primary" variant="flat" size='lg'>
                  Transformers
                </Badge> </p>
            </div>
          </Card.Header>
          <Divider style={{ width: "98%" }} />
          <Card.Body css={{ py: "$2" }}>
            <Text style={{ marginRight: "3%", textAlign: "justify" }}>
              ☘️ Collaborated and constructed a model to classify and summarize spoilers for clickbait posts. Information Retrieval, Neural Networks, and Transformers models like BERT were used to achieve an accuracy of 73.8% for classification and an F1 score of 82% for generation models.
            </Text>
          </Card.Body>
        </Card>
      </div>

    </div>


  );
}
