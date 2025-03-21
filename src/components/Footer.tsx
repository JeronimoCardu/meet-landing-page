import Download from "./Download";
import NumberSection from "./NumberSection";

export default function Footer() {
  return (
    <>
      <NumberSection number={2} />
      <footer>
        <h1>Experience more together</h1>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions
        </p>
        <Download isIn={"footer"} />
      </footer>
    </>
  );
}
