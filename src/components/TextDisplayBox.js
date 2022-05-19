export default function TextDisplayBox({ text, title }) {
  return (
    <div>
      <h3 className="text-xl underline font-semibold uppercase">{title}</h3>
      <p className="text-lg">{text}</p>
    </div>
  );
}
