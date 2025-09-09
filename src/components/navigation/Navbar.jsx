import { useContext } from "react";
import { NavbarColorContext, NavbarContext } from "../../context/NavContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [, setNavOpen] = useContext(NavbarContext);
  const [navColor] = useContext(NavbarColorContext);
  return (
    <div className="fixed top-0 z-4 w-full flex items-start justify-between">
      <Link to="/" className="lg:p-3 p-2">
        <div className="lg:w-30 md:w-28 w-24">
          <svg
            className=" w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 44"
          >
            <path
              fillRule="evenodd"
              fill={navColor}
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
      </Link>
      <div
        aria-label="Open navigation"
        onClick={() => {
          setNavOpen(true);
        }}
        className="relative bg-black lg:h-14 md:h-14 sm:h-14 h-10 lg:w-[16vw] w-[35vw] cursor-pointer group"
      >
        <div className="bg-[#D3FD50] transition-all duration-300 ease-in-out absolute top-0 h-0 w-full group-hover:h-full"></div>
        <div className="relative top-0 h-full flex flex-col gap-1 items-end justify-center lg:pr-10 md:pr-10 sm:pr-8 pr-5">
          <div className="w-14 border-t-2 border-white/80 group-hover:border-black/80"></div>
          <div className="w-8 border-t-2 border-white/80 group-hover:border-black/80"></div>
        </div>
      </div>
    </div>
  );
}
