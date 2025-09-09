import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

export default function FullScreenNav() {
  const fullNavLinkRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();

    tl.to(".fullscreennav", {
      display: "block",
    });

    tl.to(
      ".stairing",
      {
        height: "100%",
        stagger: {
          amount: -0.3,
        },
      },
      ">"
    ); // runs *after* previous tween

    tl.to(
      ".link",
      {
        opacity: 1,
        rotateX: 0,
        stagger: {
          amount: 0.3,
        },
      },
      "+=0.2"
    ); // adds a fixed delay before starting

    tl.to(
      ".navLink",
      {
        opacity: 1,
      },
      "-=0.1"
    ); // overlaps slightly with previous
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();

    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(
      ".stairing",
      {
        height: 0, // <-- you need to animate a property, not leave it empty
        stagger: {
          amount: 0.1,
        },
      },
      ">"
    );

    tl.to(
      ".navLink",
      {
        opacity: 0,
      },
      "-=0.2"
    ); // overlaps

    tl.to(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="full-screen-nav"
      className="fullscreennav hidden text-white overflow-hidden  h-screen w-full z-50 absolute"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex ">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinkRef} className="relative">
        <div className="navLink flex w-full justify-between items-start lg:p-3 p-2">
          <div className="lg:w-30 md:w-28 w-24">
            <svg
              className=" w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fillRule="evenodd"
                fill="white"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-30 h-20 lg:w-30 w-20 relative cursor-pointer group"
          >
            <div className="lg:h-42 h-28 lg:w-[1.5px] w-[1px] -rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50]"></div>
            <div className="lg:h-42 h-28 lg:w-[1.5px] w-[1px] right-0 rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className="lg:py-10 md:py-20 sm:py-32 py-36">
          {/* PROJECTS */}
          <div className="link origin-top relative border-t border-white group">
            <h1 className="font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.9]  lg:pt-4 pt-2 uppercase">
              Projects
            </h1>
            <div className="flex text-black absolute top-0 h-0 overflow-hidden transition-all duration-300 ease-in-out bg-[#D3FD50] opacity-0 group-hover:opacity-100 group-hover:h-full">
              <Link
                to="/projects"
                onClick={() => setNavOpen(false)}
                className="moveX flex items-center"
              >
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  see everything
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  see everything
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </Link>
              <Link
                to="/projects"
                onClick={() => setNavOpen(false)}
                className="moveX flex items-center"
              >
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  see everything
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  see everything
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>

          {/* AGENCE */}
          <div className="link origin-top relative border-t border-white group">
            <h1 className="font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.9] lg:pt-4 pt-2 uppercase">
              agence
            </h1>
            <div className="flex text-black absolute top-0 h-0 overflow-hidden transition-all duration-300 ease-in-out bg-[#D3FD50] opacity-0 group-hover:opacity-100 group-hover:h-full">
              <Link
                to="/agence"
                onClick={() => setNavOpen(false)}
                className="moveX flex items-center"
              >
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  know us
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  know us
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/teamMembers/Michele_640x290-640x290.jpg"
                  alt=""
                />
              </Link>
              <Link
                to="/agence"
                onClick={() => setNavOpen(false)}
                className="moveX flex items-center"
              >
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  know us
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  know us
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/teamMembers/Michele_640x290-640x290.jpg"
                  alt=""
                />
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div className="link origin-top relative border-t border-white group">
            <h1 className="font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.9] lg:pt-4 pt-2 uppercase">
              Contact
            </h1>
            <div className="flex text-black absolute top-0 h-0 overflow-hidden transition-all duration-300 ease-in-out bg-[#D3FD50] opacity-0 group-hover:opacity-100 group-hover:h-full">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  send us a fax
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-contain -mx-14"
                  src="https://cdn-icons-png.flaticon.com/512/3141/3141735.png"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  send us a fax
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-contain -mx-14"
                  src="https://cdn-icons-png.flaticon.com/512/3141/3141735.png"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  send us a fax
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-contain -mx-14"
                  src="https://cdn-icons-png.flaticon.com/512/3141/3141735.png"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  send us a fax
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-contain -mx-14"
                  src="https://cdn-icons-png.flaticon.com/512/3141/3141735.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* BLOG */}
          <div className="link origin-top relative border-y border-white group">
            <h1 className="font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.9] lg:pt-4 pt-2 uppercase">
              Blog
            </h1>
            <div className="flex text-black absolute top-0 h-0 overflow-hidden transition-all duration-300 ease-in-out bg-[#D3FD50] opacity-0 group-hover:opacity-100 group-hover:h-full">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  Read Articles
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  Read Articles
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  Read Articles
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] text-center leading-[0.8] lg:pt-3 pt-2 uppercase">
                  Read Articles
                </h2>
                <img
                  className="h-12 w-32 sm:h-16 sm:w-44 md:h-20 md:w-60 lg:h-24 lg:w-72 shrink-0 rounded-full object-cover mx-3"
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
