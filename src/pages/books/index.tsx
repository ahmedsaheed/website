import Image from "next/image";
import  BookCard  from "../../components/bookcard";
import Library from "../api/books-api"
import Banner from "../../../public/banners.jpeg";
export default function Books() {
  return (
    <div className="space-y-8">
      <h1 className="block text-3xl font-bold sm:text-4xl md:text-6xl">
        Books
      </h1>

      <div className="text-neutral-900/30 transition-all hover:text-neutral-900 dark:text-white/20 dark:hover:text-white/100 lg:-mx-8">
        <Image
          alt="Books"
          src={Banner}
          width={1000}
          height={400}
          placeholder="blur"
          className="block rounded-xl object-cover shadow-xl shadow-neutral-300 dark:shadow-none"
        />
        <span className="sr-only text-sm">library</span>
      </div>

      <div className="space-y-8">
        <p>
        The mind throws out thoughts and beliefs in so many permutations and configurations and we are enslaved by it, by the output of our own minds. The mind is a prison. And when we write the noise is distilled and alchemised, and the self can find a way out, which I think is what love is—the escape of the self from the self.
        </p>
        <Library/>
      </div>
    </div>
  );
}
