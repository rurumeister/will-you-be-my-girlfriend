import { useState } from "react";

const GirlfriendProposal = () => {
  const [questionText, setQuestionText] = useState(
    "Will you be my girlfriend?"
  );
  const [gifSrc, setGifSrc] = useState(
    "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif"
  );

  const handleYesClick = () => {
    setQuestionText("Yay! Can't wait for this next chapter together <3");
    setGifSrc("https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif");
  };

  const handleNoMouseOver = () => {
    const noBtn = document.querySelector(".no-btn");
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    randomX = Math.max(0, Math.min(randomX, maxX));
    randomY = Math.max(0, Math.min(randomY, maxY));

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-whitesmoke font-sans">
      <h2 className="text-center text-2xl text-red-300 font-extrabold mb-4 w-[200px] xl:w-[400px]">
        {questionText}
      </h2>
      <img className="h-auto w-full" alt="gif" src={gifSrc} />
      <div className="flex justify-center mt-12 ">
        <button
          className="relative w-36 h-12 text-white text-lg rounded-full outline-none cursor-pointer shadow-md bg-red-300 border-2 border-red-400 mr-2"
          onClick={handleYesClick}
        >
          Yes
        </button>
        <button
          className="no-btn relative w-36 h-12 text-red-400 bg-white text-lg rounded-full outline-none cursor-pointer shadow-md border-2 border-red-400 ml-2"
          onMouseOver={handleNoMouseOver}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default GirlfriendProposal;
