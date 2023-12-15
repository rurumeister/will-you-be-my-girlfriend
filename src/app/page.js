"use client";
import { FaAngleDoubleDown } from "react-icons/fa";
import GirlfriendProposal from "./components/GirlfriendProposal";
import PhotoGrid from "./components/PhotoGrid";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between px-9 xl:px-24 font-sans"
      style={{
        background: "whitesmoke",
      }}
    >
      <div className="relative top-0 left-[45%] text-pink-700 text-sm xl:text-base text-right">
        <p>to Peps Wauran, from Elroy</p>
        <p>n/12/2023</p>
      </div>

      <div className="flex text-slate-700 min-h-screen py-24">
        <div className=" flex flex-col justify-center gap-8 text-center">
          <h2 className="text-center text-3xl xl:text-5xl text-red-300 font-extrabold mb-4">
            {`Hey babe, hope you liked what I've planned for you tonight. 💖`}
          </h2>
          <p className="text-sm xl:text-base font-400 ">
            {`From the moment we met, life has become so much brighter. We've
            shared laughter, adventures, and quiet moments that mean the world
            to me. Every day with you is a cherished memory, and every memory a
            treasure that I hold close to my heart. As I look back at these
            snapshots of the times we've spent together, I realize how
            incredibly lucky I am to have you in my life. Scroll down to take a
            walk down memory lane with me.`}
          </p>
          <button
            type="button"
            className="self-center px-10 py-5 text-4xl font-bold text-slate-700 text-center transition
            duration-300 ease-in-out transform hover:scale-110
            border-2 border-transparent rounded-md cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <FaAngleDoubleDown />
          </button>
        </div>
      </div>
      <PhotoGrid />
      <p className="text-sm xl:text-base font-400 text-slate-700 mt-[15vh] mb-[5vh]">
        With all that said, I hope you would be willing to make more memories
        with me as I ask...
      </p>
      <GirlfriendProposal />
    </main>
  );
}
