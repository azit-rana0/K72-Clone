import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Stair({ children }) {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.set(stairParentRef.current, {
        display: "block",
      });

      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.25,
        },
      });
      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.25,
        },
      });
      tl.set(stairParentRef.current, {
        display: "none",
      });
      tl.set(".stair", {
        y: "0%",
      });

      tl.from(
        pageRef.current,
        {
          opacity: 0,

          scale: 1.2,
        },
        "-=0.5" // page fade-in overlaps instead of fixed delay
      );
    },
    [currentPath]
  );
  return (
    <div className="overflow-hidden">
      <div ref={stairParentRef} className="h-screen w-full fixed z-10 top-0">
        <div className="h-full w-full flex ">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
}
