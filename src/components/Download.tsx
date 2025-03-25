type Props = {
  isIn: string;
};

function Download({ isIn }: Props) {
  return (
    <button className={`${isIn} w-[12.0625em] h-[3.5em] rounded-full outline-0`}>
      Download <span>v1.3</span>
    </button>
  );
}

export default Download;
