// AnimationComponent.js
import React from 'react';
import animationData from '../animation/animation - 1737380402593.json';
import Lottie from "lottie-react";

const AnimationComponent = () => {
  return (
    <div style={{ width: '300px', margin: 'auto' }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default AnimationComponent;