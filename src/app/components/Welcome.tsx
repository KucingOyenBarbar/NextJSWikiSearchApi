type Props = { title: string };

export default function Welcome({ title }: Props) {
  return (
    <h1 className="text-start text-capitalize text-white fst-normal fs-3 lh-1">
      {title}
    </h1>
  );
}
