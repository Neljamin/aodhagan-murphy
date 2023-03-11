import SquiggleReverse from "../components/shapes/SquiggleReverse";

export default function Footer() {
  return (
    <>
      <div className="w-full">
        <SquiggleReverse className="text-green-100 bg-white bg-opacity-95 md:bg-transparent" />
        <section className="w-full pb-12 bg-green-100 h-20"></section>
      </div>
      <footer className="flex text-white bg-red-700 p-3 items-end justify-end">
        <p>Built by me</p>
      </footer>
    </>
  );
}
