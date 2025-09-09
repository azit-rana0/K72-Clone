import HomeBottonText from "../components/home/HomeBottonText";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="w-screen h-screen relative pb-4 overflow-hidden flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottonText />
      </div>
    </div>
  );
}
