import NumberSection from "./NumberSection";
import imgMain1 from "../assets/desktop/image-woman-in-videocall.jpg";
import imgMain2 from "../assets/desktop/image-women-videochatting.jpg";
import imgMain3 from "../assets/desktop/image-men-in-meeting.jpg";
import imgMain4 from "../assets/desktop/image-man-texting.jpg";

export default function Main() {
  return (
    <main>
      <header>
        <NumberSection number={1} />
      </header>
      <section>
        <div>
          <img src={imgMain1} alt="woman in videocall" />
          <img src={imgMain2} alt="women in videochatting" />
          <img src={imgMain3} alt="men in meeting" />
          <img src={imgMain4} alt="men texting" />
        </div>
        <h3>BUILT FOR MODERN USE</h3>
        <h1>Smarter meetings, all in one place</h1>
        <p>
          Send messages, share files, show your screen, and record your meetings
          - all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </section>
    </main>
  );
}
