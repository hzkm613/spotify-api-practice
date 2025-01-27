import React from "react";
import Dance from "../assets/image/dance.gif";

const RobotDance = () => {
  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden bg-amber-500">
      <div className="w-full h-full flex justify-center items-center">
        <img
          className="w-2/3 object-contain"
          src={Dance}
          alt="A gif of dancing Disney characters"
        />
      </div>
    </div>
  );
};

export default RobotDance;
