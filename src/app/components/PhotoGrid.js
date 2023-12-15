import Image from "next/image";
import { useState } from "react";
import babyAle from "../../../public/photos/baby_ale.png";
import backFromLondon from "../../../public/photos/back_from_london.png";
import birthdayDinner from "../../../public/photos/birthday_dinner.png";
import coffee from "../../../public/photos/coffee.png";
import conference from "../../../public/photos/conference.png";
import costume from "../../../public/photos/costume.png";
import firstShoot from "../../../public/photos/first_shoot.png";
import jbTrip from "../../../public/photos/jb_trip.png";
import loveNight from "../../../public/photos/love_night.png";
import lunchFamily from "../../../public/photos/lunch_family.png";
import pepBday from "../../../public/photos/pep_bday.png";
import popQuestion from "../../../public/photos/pop_question.png";
import recovery from "../../../public/photos/recovery.png";
import secondShoot from "../../../public/photos/second_shoot.png";
import towieWeddingImg from "../../../public/photos/towie_wedding.png";
import usBeingUs from "../../../public/photos/us_being_us.png";

const photoGallery = [
  {
    src: popQuestion,
    caption: "the day I asked you if we could be more than friends",
    videoSrc: "/videos/pep_proposal.mp4",
  },
  {
    src: coffee,
    caption: "one of our many coffee dates",
  },
  {
    src: pepBday,
    caption: "us celebrating your birthday dinner",
  },
  { src: conference, caption: "our first conference together" },
  { src: recovery, caption: "when you were sick and I took care of you" },
  {
    src: costume,
    caption: "our first `couple` costume",
  },
  {
    src: firstShoot,
    caption: "our first photoshoot together",
  },
  {
    src: birthdayDinner,
    caption: "us celebrating my birthday dinner",
  },
  { src: lunchFamily, caption: "lunch with my family" },
  {
    src: jbTrip,
    caption: "our first trip to Johor Bahru",
  },
  {
    src: loveNight,
    caption: "our first Love Night together",
  },
  {
    src: backFromLondon,
    caption: "when you came back from London",
  },
  {
    src: towieWeddingImg,
    caption: "our first wedding together",
  },
  {
    src: secondShoot,
    caption: "our first photoshoot with a professional photographer",
  },
  {
    src: babyAle,
    caption: "our first time playing with Alethea together",
  },
  {
    src: usBeingUs,
    caption: "helping you shoot at Natties house.",
  },
];

const PhotoGrid = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  return (
    <div className="flex flex-col text-slate-700 min-h-screen py-4 xl:py-24 w-full">
      <h2 className="text-3xl xl:text-5xl font-extrabold mb-4">
        Memories of us
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photoGallery.map((photo, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              width={250}
              height={250}
              layout="responsive"
            />
            {hoveredImage === index && (
              <div className="absolute inset-0 transition duration-300 ease-in-out bg-black bg-opacity-60 flex items-center justify-center">
                <div className="text-white p-4 text-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                  <p className="font-medium text-sm md:text-base leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
