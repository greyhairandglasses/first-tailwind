export default function ImgHighlightTile({image, headline, text}) {
  console.log(headline)
  return(
      <div className="grid p-8 place-items-center bg-sky-200/70 w-60 m-4 rounded-xl">
        <img src={image} alt={headline} className="h-40 w-48 rounded-3xl object-cover" />
        <h3 className="text-xl font-semibold text-center py-3">{headline}</h3>
        <p className="text-center italic">
          {text}
        </p>
      </div>
    )
}