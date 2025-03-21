type Props = {
  isIn: string;
};

function Download({ bgColor }: Props) {
  return (
    <button>
      Download <span>v1.3</span>
    </button>
  );
}

export default Download;
