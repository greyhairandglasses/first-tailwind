export default function NavBar(){
  return (
    <header className="flex justify-between items-center shadow-md bg-sky-500">
      <h4 className="font-bold text-xl sm:text-2xl p-2 sm:p-4 text-slate-800">
        First Tailwind
      </h4>
      <ul className="flex min-w-min">
        {[
          ["Portfolio", "https://www.tomarcher.uk/"],
          ["Github", "https://github.com/greyhairandglasses/first-tailwind"],
        ].map(([title, url]) => (
          <li className="pr-3 sm:pr-12 italic font-bold text-slate-800">
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}