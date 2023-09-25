import React, { useState, useEffect, useRef } from "react";
import "./Printer.css";
import { Avatar, Grid } from "@nextui-org/react";
import ub_logo from "../src/images/logo-1.jpeg";

export default function Printer() {
  const str = "Mamatha.";
  const [val, setVal] = useState(0);
  const stop = useRef();

  useEffect(() => {
    stop.current = val === str?.length;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (stop.current) clearInterval(interval);
      else setVal((preVal) => preVal + 1);
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div className="welcome">
        <div>
          <h1 style={{ marginBottom: "0px" }}>Welcome, I'm</h1>
          <h1 className="welcome-message">{str?.slice(0, val)}</h1>
        </div>
        <div>
          <h3 className="welcome-submessage">
            This website is a manifestation of my web development skills. I am a
            Software Engineer. Please feel free to checkout the website and
            contact me on my socials. Currently, I'm open to work :D
          </h3>
        </div>
        <Grid.Container gap={4} style={{ alignItems: "center" }}>
          <Grid>
            <Avatar
              size="xl"
              src={
                "https://www.pagetraffic.com/blog/wp-content/uploads/2022/09/linkedin-blue-logo-icon.png"
              }
              bordered
              squared
              color="warning"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/mamatha-y/", "_blank")
              }
            />
          </Grid>
          <Grid>
            <Avatar
              size="xl"
              src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
              bordered
              squared
              color="warning"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://github.com/MamathaYarramaneni", "_blank")
              }
            />
          </Grid>
          <Grid>
            <Avatar
              size="xl"
              src={
                "https://assets.leetcode.com/users/leetcode/avatar_1568224780.png"
              }
              bordered
              squared
              color="warning"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://leetcode.com/ma_ya_/", "_blank")
              }
            />
          </Grid>
        </Grid.Container>
      </div>
      <div className="scroll">
        <div class="icon-scroll">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
