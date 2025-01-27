import React from "react";

const Player = () => {
  return (
    <div className="w-full h-full flex flex-col bg-amber-600">
      <div className="w-full h-1/2 bg-amber-200">music player image</div>
      <div className="w-full h-1/2 bg-blue-800">
        <div className="h-10">
          <span>Title</span>
          <span>Not decided yet</span>
        </div>
        <div className="flex w-full bg-amber-400">
          <span>1:53</span>
          <div className="w-full bg-amber-300">bar</div>
          <span>3:20</span>
        </div>
        <div className="w-full flex bg-amber-700">
          <div>prev</div>
          <button>Play button</button>
          <div>next</div>
          <div>repeat</div>
        </div>
      </div>
    </div>
  );
};

export default Player;
