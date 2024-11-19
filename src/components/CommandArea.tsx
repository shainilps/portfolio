import { useEffect, useRef, useState } from "react";
import handleKeyDown from "../util/Keybind";
import Header from "./Header";

export interface Command {
  command: string;
  output: JSX.Element | "";
}

export default function CommandArea() {
  const [commandList, setCommandList] = useState<Command[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    const handleKeyDown = () => {
      inputRef.current?.focus();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [commandList]);
  // useEffect(() => {
  //   const handleKeyDown = () => {
  //     inputRef.current?.focus();
  //   };

  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <div className="flex-grow overflow-y-auto overflow-x-hidden space-y-2 max-h-[calc(100vh-100px)] px-4">
      <Header />
      {commandList.map((item, index) => (
        <div key={index}>
          <div className="flex mb-2">
            <p className="mr-2">
              <span className="text-[#ebbcba]">guest</span>@
              <span className="text-[#ebbcba]">shaine:~$</span>
            </p>
            <p>{item.command}</p>
          </div>
          <div className="lg:mx-6 mx-4" key={index}>
            {item.output}
          </div>
        </div>
      ))}
      <div className="flex items-center">
        <p className="mr-2">
          <span className="text-[#ffbebb]">guest</span>@
          <span className="text-[#f7bfbd]">shaine:~$</span>
        </p>
        <input
          className="w-full bg-transparent  outline-none"
          autoFocus
          ref={inputRef}
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          type="text"
          onKeyDown={(e) =>
            handleKeyDown(
              e,
              currentCommand,
              commandList,
              currentIndex,
              setCommandList,
              setCurrentCommand,
              setCurrentIndex
            )
          }
        />
      </div>
    </div>
  );
}
