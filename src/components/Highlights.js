import HighlightTile from "./HighlightTile";

export default function Highlights() {
  return (
    <div className="shadow-md py-6 sm:py-12 bg-sky-400 text-slate-800">
      <div className="sm:max-w-min sm:mx-auto">
        <h1 className="font-bold underline text-3xl mx-4 my-2 text-center sm:text-left">
          Lorem, ipsum.
        </h1>
        <div className="flex flex-col sm:flex-row">
          <HighlightTile unit={"Lorem, ipsum."} data={"XX%"} />
          <HighlightTile unit={"Lorem, ipsum."} data={"Xth"} />
          <HighlightTile unit={"Lorem, ipsum."} data={"£XX,XXX,XXX"} />
          <HighlightTile unit={"Lorem, ipsum."} data={"XX%"} />
        </div>
        <div className="flex flex-col mx-4 mt-2 sm:flex-row sm:gap-4 sm:justify-center">
          <button className="rounded-xl shadow-lg text-sky-100 bg-sky-800 p-3 mb-3 sm:max-w-max">
            Lorem, ipsum.
          </button>
          <button className="rounded-xl shadow-lg text-sky-100 bg-sky-800 p-3 mb-3 sm:max-w-max">
            Lorem, ipsum dolor.
          </button>
        </div>
      </div>
    </div>
  );
}


