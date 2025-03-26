import Download from "./Download";
import NumberSection from "./NumberSection";
import imgDesktop from "../assets/desktop/image-footer.jpg";
import imgMobile from "../assets/mobile/image-footer.jpg";

export default function Footer() {
  return (
    <footer className="flex flex-col bottom-0 ">
      <div className="numberFooterContainer flex justify-center">
        <NumberSection number={2} />
      </div>
      <div className="relative footerContainer flex justify-center items-center gap-[2em]">
        <img className="imgFooterDesktop" src={imgDesktop} alt="" />
        <img className="imgFooterMobile" src={imgMobile} alt="" />
        <h1 className="textPreset2   text-white">Experience more together</h1>
        <p className="textPreset4  text-white ">
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
