import ImgHighlightTile from "./ImgHighlightTile";
import data from '../data/data'

export default function ImgHighlights() {

  const cards = data.map((item) => {
    return <ImgHighlightTile {...item} />
  })

  return (
    <div className="shadow-md py-6 px-4 sm:py-12 bg-sky-400 text-slate-800">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="uppercase font-bold text-2xl">Lorem, ipsum dolor.</h1>
        <div className="max-w-max mx-auto flex flex-col items-center md:grid md:gap-8 md:grid-cols-2 lg:flex lg:items-stretch lg:flex-row lg:justify-center">
          {cards}
        </div>
      </div>
    </div>
  );
}