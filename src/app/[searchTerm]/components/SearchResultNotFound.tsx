type Props = { message: string };

export default function SearchResultNotFound({ message }: Props) {
  return (
    <div className="text-center text-capitalize fst-normal fs-6">{message}</div>
  );
}
