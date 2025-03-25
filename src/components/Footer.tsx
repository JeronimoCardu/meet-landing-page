import Download from "./Download";
import NumberSection from "./NumberSection";

export default function Footer() {
  return (
    <footer className="flex flex-col ">
      <div className="numberFooterContainer flex justify-center">
        <NumberSection number={2} />
      </div>
      <div className="footerContainer flex justify-center items-center gap-[2em] py-[7em] px-[5em]">
        <h1 className="textPreset2 text-white">Experience more together</h1>
        <p className="textPreset4 text-white ">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions
        </p>
        <div>
          <Download isIn={"btnIsInFooter"} />
        </div>
      </div>
    </footer>
  );
}
