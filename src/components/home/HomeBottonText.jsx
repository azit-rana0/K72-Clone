import { Link } from "react-router-dom";

export default function HomeBottonText() {
  return (
    <div className="font-[font2] text-white flex justify-center items-center gap-2">
      <p className="absolute w-64 lg:right-2 right-10 bottom-20 md:bottom-28 sm:bottom-28  lg:bottom-42  lg:text-[14px] text-[12.5px] lg:leading-5.5 leading-tight font-[font2]">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        K72 is an agency that builds brands from every angle. Today, tomorrow
        and years from now. We think the best sparks fly when comfort zones get
        left behind and friction infuses our strategies, brands and
        communications with real feeling. We’re transparent, honest and say what
        we mean, and when we believe in something, we’re all in.
      </p>
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-28 sm:h-20 h-10 flex items-center  lg:px-10 px-5 border-white rounded-full uppercase">
        <Link className="text-[6vw] lg:mt-4 sm:mt-2" to="/projects">
          Projects
        </Link>
      </div>
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-28 sm:h-20 h-10 flex items-center  lg:px-10 px-5 border-white rounded-full uppercase">
        <Link className="text-[6vw] lg:mt-4 sm:mt-2 " to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
}
