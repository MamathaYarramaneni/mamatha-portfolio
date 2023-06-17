import React, { useState, useEffect, useRef } from "react";
import "./Printer.css";

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
