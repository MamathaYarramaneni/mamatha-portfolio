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
    position: "relative",
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
    <div>
      <div className="about-section-career">
        <h3 className="about-career">EDUCATION AND WORK EXPERIENCE.</h3>
        <Grid.Container>
          <Grid xs={2}>
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
          <Grid xs={3}>
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
        <div className="education">
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
      </div>

      {/* <Card css={cardcss}>
        <Card.Header>
          <a href="https://www.sastra.edu/" target="_blank">
            <img
              alt="nextui logo"
              src="https://yt3.googleusercontent.com/sO3qth8BMUdniBjTSgzYf35RarbBGTp2-H-FtxQxQ6RuUUkL91MF_98gvR1VE9NvOxFd57OCK3Q=s900-c-k-c0x00ffffff-no-rj"
              re
              width="50px"
              height="50px"
            />
          </a>
          <Grid.Container css={{ pl: "$3" }}>
            <Grid xs={12}>
              <Text
                h4
                css={{ lineHeight: "$xs", marginBottom: "$0", marginTop: "$0" }}
              >
                SASTRA University
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                css={{
                  color: "$accents8",
                  marginTop: "$1",
                  marginBottom: "$0",
                }}
              >
                Bachelors in Computer Science
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                css={{ color: "$accents8", marginTop: "$1", fontSize: "13px" }}
              >
                <i>
                  June 2017 - June 2021, <b>CGPA: 8.8/10</b>
                </i>
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        {/* <Card.Body css={{ py: "$2" }}>
          <Text>
            Make beautiful websites regardless of your design experience.
          </Text>
        </Card.Body> */}
      {/* <Card.Footer>
          <Link
            icon
            color="primary"
            target="_blank"
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </Card.Footer> }
      </Card>
      <Card css={cardcss2}>
        <Card.Header>
          <a href="https://www.sastra.edu/" target="_blank">
            <img
              alt="nextui logo"
              src="https://mms.businesswire.com/media/20210701005986/en/889247/22/navis-logo-vector.jpg"
              re
              width="60px"
              height="38px"
            />
          </a>
          <Grid.Container css={{ pl: "$3" }}>
            <Grid xs={12}>
              <Text
                h4
                css={{ lineHeight: "$xs", marginBottom: "$0", marginTop: "$0" }}
              >
                Navis
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                css={{
                  color: "$accents8",
                  marginTop: "$1",
                  marginBottom: "$0",
                }}
              >
                Associate Software Engineer Intern
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8", marginTop: "$1" }}>
                <i>Feb 2021 - June 2021</i>
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
      </Card>
      <Card css={cardcss3}>
        <Card.Header>
          <a href="https://www.sastra.edu/" target="_blank">
            <img
              alt="nextui logo"
              src="https://mms.businesswire.com/media/20210701005986/en/889247/22/navis-logo-vector.jpg"
              re
              width="60px"
              height="38px"
            />
          </a>
          <Grid.Container css={{ pl: "$3" }}>
            <Grid xs={12}>
              <Text
                h4
                css={{ lineHeight: "$xs", marginBottom: "$0", marginTop: "$0" }}
              >
                Navis
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                css={{
                  color: "$accents8",
                  marginTop: "$1",
                  marginBottom: "$0",
                }}
              >
                Associate Software Engineer
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8", marginTop: "$1" }}>
                <i>June 2021 - Aug 2022</i>
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
      </Card>
      <Card css={cardcss4}>
        <Card.Header>
          <a href="https://www.sastra.edu/" target="_blank">
            <img
              alt="nextui logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAB1CAMAAAA4J446AAAAgVBMVEX///8AW7oAWbmpyOgcZL0AV7kAVLj4+/6Jpda50+2OqNcAUrc6gMnn7vefueAyccKyzemAr90od8ZMgsnK3PBbi83U5PMxfMjv9PpmmtSHqtkAYLzc5/RxoteRsNwATbVKis6NtuAaa8FymNFpks+lweRak9GBn9RGfMeawOTD1OuK6NesAAAEXElEQVR4nO2bbXuiOhBAIZCgi7wUUakoKojr+v9/4KqtgslAwkLw6b1zPlYSc0hIZkZqGAiCIAiCIAiCIAiCIAiCGIYTW6pMk5Z+ltLmS90qyTa11Uj3m5Z+MmnzraNb5ZMRNeisTWVtSpqzMVRMNaQq7c1RpZvK9wpoHES3BdbUfEyVBplqsUtUKNjNs7mrXcVYTr8IPwLQJd+G31fEbWN5dDO1Alo3iQ6PD7RvxjUsG5gTc921m4RVt4TkoY6RSonnVFQJrM79RFU3dDHmXFTAKt1v6+q/ozJDlQFBFQFUGRJUEUCVIfnfqDiq8Kd943XvUllmE0V+5bVwMiiar8v80HuHShi4TJGX9s2XuSyNjn5bDqRNRfywL4RSexHqWGmjq9xtAr+tvPaDVK47g10OPy8SFUbvNJQzCH1C4D83taZ5PK7K5bT6ImeQDAlmT9LaDmavZnVWuSvWqtjn4EssXrQkxI734ACVZli2eXye1M+V+cV7JT65fHNiDj4tmyOgkpfCdTNAxfWrBd+eECeWMK0sG/ppcX6Lk0/sg3DdVqIiCVyccsc1pvvBV1gGFEvJb+Gyjw4qR+AITGbc7NNg8FM/BIp6dCF8jUwlr0bKCmCQTulytysfXMU7AitMLITJVGrPNcug79lwK0yDiuGn4iBpwT+TEpW4GijJwYKgx80KnQ2vkkDTYvvdVE5VHw3pCj8rbKshdoHCExpNu6h41foiKX8X7jh/uFlxL8ObGMbBFsfJuEyyXeWlYgyG8PUz9Ote6Ulb1imwi6XbTe2BaVNJ9tUwSQQm047/ur4I1RBP3slyIDBx8/UySRyJipPEtTkxAzFQuMmWr6c9oSdduaRhnaGTkrFoW8a3QCuBTvtbDLax9qw2J/baA4j3rzEYIa2/ofdkWQQUiMYoc3fUjlazHFAhQZRTtx7DE3sWiaQ77jmxTxpNroTHgICZFiFNGQuh/LrkU5U7XG/2OdOwD78yLc42FUY3MIGuKgVH7BfzwGTAUhuKdO/Ho6jcbKx1sQhs4t5y4fbf9v8FQl1zUWrbvnicZVhmk2IxPwd5ml6/nLkuOE/XTUEBfpIJM4vhM/s2vGV8CcvS97Mbc6jWsJj8UmByDLgoj7C5lrBFDfiIVNqJHG86SblZdefvKZHfkOUr7SQ+Hxq5hfYNuYl+KtesiE8iyXteuTD6q3hcZGyy07umpa+KI07LWMcLT18VY8OpmDtL+wtWML1V+NzeHOFdMZj+KnxNT0PVWI3eKiE/Kz9WxTnxoY+WkosKfVUuQsbjDl7/VkRW/pawzIV4dDduSPnEgRJidRVLNNFQ/m7Di79fTP2zgrIW9nzvFSB8Yn1EQA1kdxh1fYUB/B7xA8UX+6Hmukp6UhVQRNkFakhHTlig314GgZpjx8V6VAih+VT+5UOrUPny6cJ9RZr25/hBcRgp/vNRB/Lz9h25sBcq/0+YImE87saFIAiCIAiCIAiCIAiCID+AvzdvXpVhBUNMAAAAAElFTkSuQmCC"
              re
              width="50px"
              height="40px"
            />
          </a>
          <Grid.Container css={{ pl: "$3" }}>
            <Grid xs={12}>
              <Text
                h4
                css={{ lineHeight: "$xs", marginBottom: "$0", marginTop: "$0" }}
              >
                University at Buffalo
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                css={{
                  color: "$accents8",
                  marginTop: "$1",
                  marginBottom: "$0",
                }}
              >
                Masters in Computer Science
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                css={{ color: "$accents8", marginTop: "$1", fontSize: "13px" }}
              >
                <i>
                  Aug 2022 - Present, <b>CGPA: 3.9/4.0</b>
                </i>
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        {/* <Card.Body css={{ py: "$2" }}>
          <Text>
            Make beautiful websites regardless of your design experience.
          </Text>
        </Card.Body> */}
      {/* <Card.Footer>
          <Link
            icon
            color="primary"
            target="_blank"
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </Card.Footer> }
      </Card>
      <Card css={cardcss5}>
        <Card.Header>
          <a href="https://www.sastra.edu/" target="_blank">
            <img
              alt="nextui logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAB1CAMAAAA4J446AAAAgVBMVEX///8AW7oAWbmpyOgcZL0AV7kAVLj4+/6Jpda50+2OqNcAUrc6gMnn7vefueAyccKyzemAr90od8ZMgsnK3PBbi83U5PMxfMjv9PpmmtSHqtkAYLzc5/RxoteRsNwATbVKis6NtuAaa8FymNFpks+lweRak9GBn9RGfMeawOTD1OuK6NesAAAEXElEQVR4nO2bbXuiOhBAIZCgi7wUUakoKojr+v9/4KqtgslAwkLw6b1zPlYSc0hIZkZqGAiCIAiCIAiCIAiCIAiCGIYTW6pMk5Z+ltLmS90qyTa11Uj3m5Z+MmnzraNb5ZMRNeisTWVtSpqzMVRMNaQq7c1RpZvK9wpoHES3BdbUfEyVBplqsUtUKNjNs7mrXcVYTr8IPwLQJd+G31fEbWN5dDO1Alo3iQ6PD7RvxjUsG5gTc921m4RVt4TkoY6RSonnVFQJrM79RFU3dDHmXFTAKt1v6+q/ozJDlQFBFQFUGRJUEUCVIfnfqDiq8Kd943XvUllmE0V+5bVwMiiar8v80HuHShi4TJGX9s2XuSyNjn5bDqRNRfywL4RSexHqWGmjq9xtAr+tvPaDVK47g10OPy8SFUbvNJQzCH1C4D83taZ5PK7K5bT6ImeQDAlmT9LaDmavZnVWuSvWqtjn4EssXrQkxI734ACVZli2eXye1M+V+cV7JT65fHNiDj4tmyOgkpfCdTNAxfWrBd+eECeWMK0sG/ppcX6Lk0/sg3DdVqIiCVyccsc1pvvBV1gGFEvJb+Gyjw4qR+AITGbc7NNg8FM/BIp6dCF8jUwlr0bKCmCQTulytysfXMU7AitMLITJVGrPNcug79lwK0yDiuGn4iBpwT+TEpW4GijJwYKgx80KnQ2vkkDTYvvdVE5VHw3pCj8rbKshdoHCExpNu6h41foiKX8X7jh/uFlxL8ObGMbBFsfJuEyyXeWlYgyG8PUz9Ote6Ulb1imwi6XbTe2BaVNJ9tUwSQQm047/ur4I1RBP3slyIDBx8/UySRyJipPEtTkxAzFQuMmWr6c9oSdduaRhnaGTkrFoW8a3QCuBTvtbDLax9qw2J/baA4j3rzEYIa2/ofdkWQQUiMYoc3fUjlazHFAhQZRTtx7DE3sWiaQ77jmxTxpNroTHgICZFiFNGQuh/LrkU5U7XG/2OdOwD78yLc42FUY3MIGuKgVH7BfzwGTAUhuKdO/Ho6jcbKx1sQhs4t5y4fbf9v8FQl1zUWrbvnicZVhmk2IxPwd5ml6/nLkuOE/XTUEBfpIJM4vhM/s2vGV8CcvS97Mbc6jWsJj8UmByDLgoj7C5lrBFDfiIVNqJHG86SblZdefvKZHfkOUr7SQ+Hxq5hfYNuYl+KtesiE8iyXteuTD6q3hcZGyy07umpa+KI07LWMcLT18VY8OpmDtL+wtWML1V+NzeHOFdMZj+KnxNT0PVWI3eKiE/Kz9WxTnxoY+WkosKfVUuQsbjDl7/VkRW/pawzIV4dDduSPnEgRJidRVLNNFQ/m7Di79fTP2zgrIW9nzvFSB8Yn1EQA1kdxh1fYUB/B7xA8UX+6Hmukp6UhVQRNkFakhHTlig314GgZpjx8V6VAih+VT+5UOrUPny6cJ9RZr25/hBcRgp/vNRB/Lz9h25sBcq/0+YImE87saFIAiCIAiCIAiCIAiCID+AvzdvXpVhBUNMAAAAAElFTkSuQmCC"
              re
              width="50px"
              height="40px"
            />
          </a>
          <Grid.Container css={{ pl: "$3" }}>
            <Grid xs={12}>
              <Text
                h4
                css={{ lineHeight: "$xs", marginBottom: "$0", marginTop: "$0" }}
              >
                University at Buffalo
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                css={{
                  color: "$accents8",
                  marginTop: "$1",
                  marginBottom: "$0",
                }}
              >
                Graduate Teaching Assistant - Grader
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text
                css={{ color: "$accents8", marginTop: "$1", fontSize: "13px" }}
              >
                <i>CSE 4/560 - Data Models and Query Languages</i>
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        {/* <Card.Body css={{ py: "$2" }}>
          <Text>
            Make beautiful websites regardless of your design experience.
          </Text>
        </Card.Body> */}
      {/* <Card.Footer>
          <Link
            icon
            color="primary"
            target="_blank"
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </Card.Footer> }
      </Card> */}
    </div>
  );
}
