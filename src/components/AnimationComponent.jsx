// AnimationComponent.js
import React from "react";
import animationData from "../animation/animation - 1737380402593.json";
import Lottie from "lottie-react";
import "../Style/Animation.css";

const AnimationComponent = () => {
  return (
    <div className="animation">
      <div style={{ width: "100%", margin: "0" }}>
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default AnimationComponent;
