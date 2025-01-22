// AnimationComponent.js
import React from "react";
import animationData from "../animation/animation - 1737380402593.json";
import Lottie from "lottie-react";

const AnimationComponent = () => {
  return (
    <div>
      <div style={{ width: "100%", margin: "0" }}>
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default AnimationComponent;
