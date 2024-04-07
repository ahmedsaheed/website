import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import NewsletterForm from "@/components/NewsletterForm";
import { OrbContainer, Orb } from "@/components/Orb";
import { getAllPosts } from "@/lib/blog";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

function S({ children }: { children: React.ReactNode }) {
	return (
		<strong className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-semibold text-transparent print:text-inherit">
			{children}
		</strong>
	);
}

export default async function Page() {
	return (
		<>
			<OrbContainer>
				<Orb className="right-0 bg-blue-400/30 dark:bg-red-300/30" />
				<Orb className="right-36 top-28 bg-purple-400/30 dark:bg-purple-400/30" />
			</OrbContainer>

			<div className="max-w-3xl space-y-4 text-xl md:text-2xl">
				<p>
					<S>Hi! I&apos;m Ahmed.</S>
				</p>
				<p>
					I think this is where i get to introduce myself. I&apos;m an
					ambitious programmer with one brain cell which bounces
					around like a dvd screensaver.
				</p>
				<p>
					As a programmer i&apos;m legally required to make my own
					blog or else you get taken away and never seen again
					it&apos;s true!
				</p>
				<p>
					I&apos;m super interested in compilers, interpreters and
					programming language design, i like writing code just for
					the sake of it. I like deleting code even more. I wrote a
					tiny interpreter check it out{" "}
					<a
						className="font-semibold"
						href="https://esolang.onrender.com"
						target="_blank"
					>
						<S>here</S>
					</a>
				</p>
				<p>
					If you&apos;re after stuff i&apos;ve made real quick, just
					take my{" "}
					<a
						className="font-semibold"
						href="https://github.com/ahmedsaheed"
						target="_blank"
					>
						<S>github</S>
					</a>{" "}
					and go.
				</p>
				<p>
					I don&apos;t write much, but when i do it&apos;s mostly to
					yap or share a nice programming sol
				</p>
			</div>

			<div className="my-4 flex items-baseline justify-between">
				<h2 className="text-2xl font-bold">Blog Posts</h2>

				<Link
					href="/blog"
					className="group ml-8 transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
				>
					View All{" "}
					<IconArrowRight className="inline-block transition-transform ease-in-out group-hover:translate-x-0.5" />
				</Link>
			</div>

			<PostGrid />

			<OrbContainer>
				<Orb className="bg-emerald-400/30 dark:bg-emerald-600/30" />
				<Orb className="left-72 top-16 bg-cyan-400/30 dark:bg-cyan-600/30" />
			</OrbContainer>

			<h2 className="my-4 text-2xl font-bold">Newsletter</h2>
			<p className="mx-auto my-4 max-w-2xl text-xl">
				Occasionally, I send out a newsletter to share my thoughts about
				the latest tech news and other things I find interesting &mdash;
				I won&apos;t spam you, promise!
			</p>
			<NewsletterForm />
		</>
	);
}

async function PostGrid() {
	const allPosts = await getAllPosts();
	const posts = allPosts.slice(0, 2);

	return (
		<div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-3">
			{posts.map((post) => (
				<Link
					href={"/blog/" + post.slug}
					className="group relative h-60 overflow-hidden rounded-xl text-white first:col-span-2 only:col-span-full max-md:last:even:col-span-full md:h-80 md:last:[&:nth-child(3)]:col-span-full last:[&:nth-child(4)]:col-span-2"
					aria-label={post.title}
					key={post.slug}
				>
					<Image
						src={post.cover}
						alt={post.coverAlt}
						fill
						className="object-cover transition ease-in-out group-hover:scale-105"
						sizes="(max-width: 896px) 100vw, 896px"
						priority
						placeholder="blur"
						blurDataURL={post.blurDataURL}
					/>

					<div className="absolute h-min w-full bg-gradient-to-b from-black/70 via-black/70 via-80% p-4 group-first:via-black/70">
						<div className="text-base drop-shadow-sm">
							{post.date.toLocaleDateString(undefined, {
								dateStyle: "long",
							})}{" "}
							&bull; {post.readingTime} min read
						</div>

						<h1 className="max-w-lg text-2xl font-bold drop-shadow-sm md:group-first:text-3xl">
							<Balancer>{post.title}</Balancer>
						</h1>
					</div>

					{/* This is a <div> instead of a <Link> because the card itself is a Link */}
					<div
						className="absolute bottom-4 left-4 rounded-lg bg-zinc-600/30 px-4 py-2 text-sm font-semibold backdrop-blur transition hover:bg-zinc-600/60 md:text-base"
						aria-hidden
					>
						Read post
					</div>
				</Link>
			))}
		</div>
	);
}
