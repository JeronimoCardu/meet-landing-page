import NumberSection from "./NumberSection";
import imgMain1 from "../assets/desktop/image-woman-in-videocall.jpg";
import imgMain2 from "../assets/desktop/image-women-videochatting.jpg";
import imgMain3 from "../assets/desktop/image-men-in-meeting.jpg";
import imgMain4 from "../assets/desktop/image-man-texting.jpg";

export default function Main() {
  return (
    <main className=" w-full mb-[4.5em]">
      <header className="flex justify-center">
        <NumberSection number={1} />
      </header>
      <section>
        <div className="flex gap-[2em] my-[4em] justify-center flex-wrap">
          <img
            className="w-[16em] h-[16em] rounded-[.5em]"
            src={imgMain1}
            alt="woman in videocall"
          />
          <img
            className="w-[16em] h-[16em] rounded-[.5em]"
            src={imgMain2}
            alt="women in videochatting"
          />
          <img
            className="w-[16em] h-[16em] rounded-[.5em]"
            src={imgMain3}
            alt="men in meeting"
          />
          <img
            className="w-[16em] h-[16em] rounded-[.5em]"
            src={imgMain4}
            alt="men texting"
          />
        </div>
        <div className="mainContainer mx-auto text-center w-[50%] ">
          <h3 className="textPreset3  mb-[1em] text-[#4D96A9 ]">
            BUILT FOR MODERN USE
          </h3>
          <h1 className="textPreset2 text-[#28283D]">
            Smarter meetings, all in one place
          </h1>
          <p className="textPreset4 mt-[2em] text-[#87879D]">
            Send messages, share files, show your screen, and record your
            meetings - all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </section>
    </main>
  );
}
