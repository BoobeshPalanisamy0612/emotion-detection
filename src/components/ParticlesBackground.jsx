import React from "react";

const ParticlesBackground = () => {
  return (
    <div className="particles">
      {[...Array(25)].map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
};

export default ParticlesBackground;