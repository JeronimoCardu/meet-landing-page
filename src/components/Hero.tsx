import logo from "../assets/logo.svg";
import peopleLeft from "../assets/desktop/image-hero-left.png";
import peopleRight from "../assets/desktop/image-hero-right.png";
import peopleComplete from "../assets/tablet/image-hero.png";
import Download from "./Download";
import "../index.css";

export default function Hero() {
  return (
    <header>
      <div className="logoContainer w-full flex justify-center mt-[5em]">
        <img className="w-[8em] h-[1.75em]" src={logo} alt="meet" />
      </div>
      <section className="headerContainer flex justify-center gap-[2em] my-[4em] text-center">
        <img className={`imgHeroComplete`} src={peopleComplete} alt="people" />
        <img
          className={`imgHeroLeft`}
          src={peopleLeft}
          alt="people"
        />
        <div className="titleContainer w-full h-[19.625em] flex flex-col gap-[2em]">
            <h1 className="textPreset1 text-[#28283D]">
              Group Chat for Everyone
            </h1>
            <p className="textPreset4 text-[#87879D]">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any divice.
            </p>
          <div className="flex gap-[1.0625em] justify-center">
            <Download isIn={"btnIsInHero"} />
            <button className="bg-[#855FB1] text-white w-[10.0625em] h-[3.5em] rounded-full  cursor-pointer hover:bg-[#B18BDD]">
              What is it?
            </button>
          </div>
        </div>
        <img
          className={`imgHeroRight`}
          src={peopleRight}
          alt="people"
        />
      </section>
    </header>
  );
}
