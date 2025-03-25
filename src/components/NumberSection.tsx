type Props = {
  number: number;
};

export default function NumberSection({ number }: Props) {
  return (
    <div className="w-[3.5em] h-[8.5em] flex flex-col items-center">
      <div className="w-[1px] h-[5em] border-l-1 border-[#D1D1DF]"></div>
      <p className="textPreset5 border-1 w-[3.5em] h-[3.5em] rounded-full flex justify-center items-center border-[#D1D1DF] text-[#87879D] bg-white ">
        {number < 10 ? `0${number}` : number}
      </p>
    </div>
  );
}
