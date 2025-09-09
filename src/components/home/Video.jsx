export default function Video() {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover "
        autoPlay
        muted
        loop
        src="/video/creative.mp4"
      />
    </div>
  );
}
