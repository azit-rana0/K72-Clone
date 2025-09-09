import Video from "./Video";

export default function HomeHeroText() {
  return (
    <div className="font-[font1] text-white sm:mt-42 md:mt-40 mt-72 lg:mt-0 pt-5 text-center">
      <div className="flex justify-center items-center lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
        The spark for
      </div>
      <div className="flex  justify-center items-start lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
        all
        <div className="lg:h-[7vw] h-[8.5vw] lg:w-[16vw]  mx-2 rounded-[20%] overflow-hidden ">
          <Video />
        </div>
        things
      </div>
      <div className="flex justify-center items-center lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
        creative
      </div>
    </div>
  );
}
