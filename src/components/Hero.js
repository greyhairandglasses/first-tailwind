import image from "../images/DJI_0091.jpg";

export default function Hero() {
  return (
    <div
      className="flex bg-cover bg-no-repeat bg-center h-96 place-content-center shadow-md"
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className="text-l sm:text-2xl text-center w-3/4 sm:w-1/2 self-center bg-white/30 rounded-xl shadow-lg p-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eum
        maiores magnam consequatur optio culpa sapiente voluptatibus, animi
        officia reprehenderit.
      </p>
    </div>
  );
}
