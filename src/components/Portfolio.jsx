import React from "react";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center p-[81px] gap-[72px]"
    >
      <div className="flex flex-col gap-3">
        <span className="text-[#27374D] text-[32px] text-center font-bold">
          Portfolio
        </span>
        <span className="text-[#353535] text-xl text-center">
          Those are some of my projects
        </span>
      </div>
      <div className="flex justify-between w-[1118px] p-10 bg-[#DDE6ED] rounded-lg">
        <div className="flex-1">
          {/* text */}
          <div className="flex flex-col gap-4">
            <span>Website of Sukarara and Bonjeruk Tourist Villages</span>
            <span>
              A website that is used to introduce Sukarara and Bonjeruk tourist
              villages
            </span>
            <span>Stack: HTML 5, CSS 3, JavaScript</span>
          </div>
          {/* button */}
          <div className="flex gap-6">
            <button className="bg-[#27374D] rounded-lg text-white p-2.5">
              Demo
            </button>
            <button className="bg-[#27374D] rounded-lg text-white p-2.5">
              Code
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/src/assets/hikayatjonggat-desktop.png"
            alt="website hikayatjonggat"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
