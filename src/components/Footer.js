export default function Footer() {

  const handleClick = () => alert('This is just a template, there is no newsletter, soz pal.')

  return (
    <footer className="text-slate-800 bg-sky-500 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-rows-min grid-cols-1 sm:grid-cols-2 sm:auto-rows-min">
        <div className="py-8">
          <h3 className="text-xl underline font-semibold">Contact</h3>
          <p className="text-lg">Tom Archer</p>
          <p className="text-lg">Wannabe Web Dev</p>
          <p className="text-lg underline text-sky-100">
            <a href="mailto:hello@tomarcher.uk">hello@tomarcher.uk</a>
          </p>
          <p className="text-lg underline text-sky-100">
            <a href="http://tomarcher.uk">tomarcher.uk</a>
          </p>
        </div>
        <div className="py-8">
          <form>
            <label>
              <p className="pb-2 font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <input
                className="mr-2 px-2 py-1 rounded text-slate-600/60"
                type="email"
                name="email"
                placeholder="Lorem ipsum dolor sit amet."
              />
              <input
                className="bg-sky-200 px-3 py-1 rounded"
                type="submit"
                value="Submit"
                onClick={handleClick}
              />
            </label>
          </form>
        </div>
        <div className="sm:col-span-2">
          <p className="text-center text-xs p-4 ">
            All Rights Reserved, Copyright {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}