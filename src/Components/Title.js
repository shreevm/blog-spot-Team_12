import React from "react";
import ReactLogo from "./ReactLogo";
import SpringLogo from "./SpringLogo";
import RestApiLogo from "./RestApiLogo";

const Title = () => {
  return (
    <div className="btn" style={{ cursor: "default" }}>
      <h1>
        
        <SpringLogo />
        <span
          className="me-2"
          style={{
            color: "#61dafb",
            textShadow: "2px 2px 3px rgb(0,88,121)",
          }}
        >
          The BlogSpot 
        </span>
        
        
       
      </h1>
    </div>
  );
};

export default Title;
