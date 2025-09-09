import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className="lg:w-1/2 group transition-all relative rounded-none lg:hover:rounded-[70px] md:hover:rounded-[35px] hover:rounded-2xl overflow-hidden h-full ">
        <img className="h-full w-full object-cover" src={props.image1} alt="" />
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
          <h2 className="uppercase lg:text-6xl md:text-4xl text-2xl font-[font1] lg:border-4 md:border-4 border-3 lg:pt-4 pt-2 px-8 text-white border-white rounded-full ">
            Vior le projet
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2 group transition-all relative rounded-none lg:hover:rounded-[70px] md:hover:rounded-[35px] hover:rounded-2xl overflow-hidden h-full ">
        <img className="h-full w-full object-cover" src={props.image2} alt="" />
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
          <h2 className="uppercase lg:text-6xl md:text-4xl text-2xl font-[font1] lg:border-4 md:border-4 border-3 lg:pt-4 pt-2 px-8 text-white border-white rounded-full ">
            Vior le projet
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
