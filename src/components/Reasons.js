import TextDisplayBox from "./TextDisplayBox";

export default function Reasons() {
  return (
    <article className="p-4 bg-sky-500 flex shadow-md text-slate-800">
      <div className="max-w-screen-xl mx-auto mt-4">
        <h1 className="uppercase font-bold text-2xl">Lorem ipsum dolor sit.</h1>
        <h4 className="italic font-semibold underline text-xl">
          Lorem ipsum dolor sit amet consectetur.
        </h4>
        <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-4 mt-4">
          <TextDisplayBox
            title={"Lorem"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident vitae corrupti ducimus tempora dolor eveniet dolorem eaque explicabo accusamus quisquam tempore numquam, reprehenderit possimus, distinctio quaerat. A obcaecati, voluptatem iste, eveniet atque ab, maiores fugit adipisci et voluptatibus eius magnam omnis."
            }
          />
          <TextDisplayBox
            title={"Ipsum"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint praesentium rerum tempore! Aut consequatur maiores mollitia praesentium magni voluptas eveniet distinctio. Aliquam alias suscipit nulla."
            }
          />
          <TextDisplayBox
            title={"Dolor"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae nihil illo modi vitae quidem accusantium ab non sunt veniam."
            }
          />
          <TextDisplayBox
            title={"Sit"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non blanditiis delectus, autem iusto necessitatibus, illo provident odit quod, suscipit placeat numquam?"
            }
          />
        </div>
      </div>
    </article>
  );
}
