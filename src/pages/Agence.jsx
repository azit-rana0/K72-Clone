import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function Agence() {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);

  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 21.4%",
        end: "top -130%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex = -1;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="parent text-black">
      <div className="section1 py-1 ">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-65 -top-80 lg:left-[30vw] left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2] overflow-hidden ">
          <div className="lg:mt-[45vh] sm:mt-[45vh] mt-[32vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              SEVEN7Y <br /> TWO
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3 ">
            <p className="lg:text-6xl text-xl leading-tight">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and
              open-minded, and we make sure creativity crowds out ego from every
              corner. A brand is a living thing, with values, a personality and
              a story. If we ignore that, we can achieve short-term success, but
              not influence that goes the distance. We bring that perspective to
              every brand story we help tell.
            </p>
          </div>
        </div>
      </div>

      <div className="section2  mt-30 px-6 lg:px-20 py-16 font-[font2] lg:text-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="font-semibold">Expertise</h2>
          </div>
          <div>
            <ul className="space-y-2">
              <li>Strategy</li>
              <li>Advertising</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Content</li>
            </ul>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold">Our Work_</h3>
            <p className="mt-2 text-gray-800">
              Born in curiosity, raised by dedication and fed with a steady diet
              of creativity.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Our Creative_</h3>
            <p className="mt-2 text-gray-800">
              Simmering in an environment where talent can come to a full boil.
              Encouraged to become the best versions of ourselves.
            </p>
          </div>
          <div>
            <h3 className=" font-semibold">Our Culture_</h3>
            <p className="mt-2 text-gray-800">
              We’re open to each other. Period. The team works together to
              create a space that makes us proud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
