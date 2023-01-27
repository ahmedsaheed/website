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
          Yo! I'm a full-stack engineer from the United Kingdom. I care about
          performant, accessible code. I'm a huge fan of making, reading and
          contributing to open source &amp; you can{" "}
          <a
            href="https://github.com/sponsors/alii"
            rel="noreferrer"
            target="_blank"
          >
            sponsor me on GitHub
          </a>
          {/**/}. Programming since seven, I've learned a lot about core
          programming principles, scaling, and systems architecture. A large
          proportion of my life is spent listening to all sorts of electronic
          music, and below you can see what I've been enjoying recently...
        </p>
        <Library/>
      </div>
    </div>
  );
}
