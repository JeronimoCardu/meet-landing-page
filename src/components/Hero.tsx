import logo from "../assets/logo.svg";
import peopleLeft from "../assets/desktop/image-hero-left.png";
import peopleRight from "../assets/desktop/image-hero-right.png";
import peopleComplete from "../assets/tablet/image-hero.png";
import Download from "./Download";

export default function Hero() {
  return (
    <header>
      <div>
        <img src={logo} alt="meet" />
      </div>
      <main>
        <img className={`imgHeroComplete`} src={peopleComplete} alt="people" />
        <img className={`imgHeroLeft`} src={peopleLeft} alt="people" />
        <div>
          <h1>Group Chat for Everyone</h1>
          <p>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any divice.
          </p>
          <div>
            <Download isIn={"hero"} />
            <button>What is it?</button>
          </div>
        </div>
        <img className={`imgHeroRight`} src={peopleRight} alt="people" />
      </main>
    </header>
  );
}
