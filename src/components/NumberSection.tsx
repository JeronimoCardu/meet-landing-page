type Props = {
  number: number;
};

export default function NumberSection({ number }: Props) {
  return (
    <div>
      <div></div>
      <p>{number}</p>
    </div>
  );
}
