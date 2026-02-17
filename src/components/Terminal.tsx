import CommandArea from "./CommandArea";

export default function Terminal() {
  return (
    <div className="font-mono text-[#e0def4] bg-[#191724] flex justify-center lg:w-screen  lg:h-screen w-screen h-screen text-sm lg:text-base md:text-base ">
      <div className="lg:w-8/12 m-4 w-11/12 md:w-10/12 border-white border border-b-4  rounded-2xl">
        <div
          className="rounded-t-2xl px-4 py-3  border border-b-pink-200
         w-full flex items-center"
        >
          {/* buttons */}
          <div className="flex items-center gap-2 ml-2">
            <div
              className="w-3.5 h-3.5 rounded-full bg-[#f7768e] hover:bg-red-500"
              title="Close"
            ></div>
            <div
              className="w-3.5 h-3.5 rounded-full bg-[#e0af68] hover:bg-yellow-500"
              title="Minimize"
            ></div>
            <div
              className="w-3.5 h-3.5 rounded-full bg-[#9ece6a] hover:bg-green-500"
              title="Maximize"
            ></div>
          </div>
          {/* title */}
          <p className="absolute left-1/2 transform -translate-x-1/2">
            <span>shaine</span>
            <span>@portfolio</span>
            <span>:~</span>
            <span>$</span>
          </p>

          {/* Spacer to align buttons and prevent shifting */}
          <div className="w-3.5 h-3.5 invisible"></div>
        </div>

        <CommandArea />
      </div>

      {/* <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          className="bg-[#c4a7e7] text-[#191724] px-3 py-2 rounded-md"
          title="Up Arrow"
          onClick={() => handleKeyPress("ArrowUp")}
        >
          ↑
        </button>
        <button
          className="bg-[#c4a7e7] text-[#191724] px-3 py-2 rounded-md"
          title="Down Arrow"
          onClick={() => handleKeyPress("ArrowDown")}
        >
          ↓
        </button>
        <button
          className="bg-[#c4a7e7] text-[#191724] px-3 py-2 rounded-md"
          title="Tab"
          onClick={() => handleKeyPress("Tab")}
        >
          Tab
        </button>
      </div> */}
    </div>
  );
}
