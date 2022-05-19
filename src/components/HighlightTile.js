export default function HighlightTile({unit, data}) {
  return (
    <div className="flex flex-col sm:w-40 h-32 bg-sky-200/70 rounded-xl shadow-xl justify-center my-2 mx-4 transition ease-in-out hover:bg-sky-200 duration-300 cursor-default">
      <p className="font-bold uppercase text-center sm:text-right mx-4 text-xl italic">{data}</p>
      <p className="font-bold uppercase text-center sm:text-right mx-4 text-l">{unit}</p>
    </div>
  )
}