import React, { useState, useEffect, useRef } from "react";
import "./Printer.css";

export default function Printer({ str }) {
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
          <h1 className="welcome-message">{str?.slice(0, val)}</h1>
        </div>
        <div>
          <h3  className="welcome-submessage">
            This website is a manifestation of my software development skills
          </h3>
        </div>
      </div>
      <div className="scroll">
        <div class="icon-scroll">
          <div class="mouse">
            <div class="wheel"></div>
          </div>
          <div class="icon-arrows">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
