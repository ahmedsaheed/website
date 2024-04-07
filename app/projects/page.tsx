import { OrbContainer, Orb } from "@/components/Orb";
import mergeMetadata from "@/lib/mergeMetadata";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import sharp from "sharp";

export const metadata = mergeMetadata({
	title: "Projects",
	description: "Here's a few of the projects I've worked on.",
});

interface Project {
	cover?: string;
	coverAlt?: string;
	noCrop?: boolean;
	description: string;
	links?: Record<string, string>;
}

const projects: Record<string, Project> = {
	Esolang: {
		description:
		"⛩️ Esolang is a beginner friendly dynamically typed scripting language for quick prototyping and learning functional programming.",
		links: {
			Website: "https://ahmedsaheed.github.io/esolang/",
			"Source Code": "https://github.com/ahmedsaheed/esolang",
			"Playground": "https://esolang.onrender.com"
		},
	},

	"Moviee": {
		description:
			"🍿 Cross platform mobile applicaton for streaming movies and tv shows for free.",
		links: {
			"Source Code": "https://github.com/ahmedsaheed/moviee",
		},
	},

	"Leaflet": {
		description:
			"📝 Minimal markdown editor with pandoc support.",
		links: {
			"Source Code": "https://github.com/ahmedsaheed/leaflet",
		},
	},

	"FeedReeder": {
		description:
			"FeedReeder is an android RSS reader app built using Kotlin and Jetpack Compose. It features an nice user interface and experience to browse through the feeds.",
		links: {
			"Source Code": "https://github.com/ahmedsaheed/feedreeder",
		},
	},

	"Library Box": {
		description:
			"Update a pinned github gist to contain your latest and current read from Google Books. For those without the GoodRead API key.",
		links: {
		"Source Code": "https://github.com/ahmedsaheed/Library-box",
		},
	},

	Dotfiles: {
		description:
			"🍱 A bento box of personal configurations.",
		links: {
			"Source Code": "https://github.com/ahmedsaheed/dotfiles",
		},
	},

	QuranCLI: {
		description:
			"Simple tool to Read, Search and Recite the Quran from the command line.",
		links: {
		"Source Code": "https://github.com/ahmedsaheed/qurancli",
		},
	},
};

export default function Page() {
	return (
		<>
			<OrbContainer>
				<Orb className="-top-20 right-0 bg-fuchsia-400/30 dark:bg-fuchsia-600/30" />
				<Orb className="right-86 top-40 bg-cyan-400/30 dark:bg-cyan-600/30" />
			</OrbContainer>

			<h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
				Projects
			</h2>

			<p className="mb-4 max-w-2xl text-lg md:text-xl">
				I&apos;ve worked on a some of cool projects! Here are a few highlights. You can see the rest {" "}
				<a
					href="https://github.com/ahmedsaheed"
					className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
				>
				here
				</a>
				.
			</p>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{Object.entries(projects).map(ProjectCard)}
			</div>

			<OrbContainer>
				<Orb className="-top-52 left-52 bg-emerald-400/30 dark:bg-emerald-600/30" />
			</OrbContainer>
		</>
	);
}

function ProjectCard([name, data]: [string, Project]) {
	return (
		<div
			className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-neutral-100/30 transition-transform ease-in-out hover:scale-[1.01] dark:border-zinc-800 dark:bg-neutral-900/30"
			key={name}
		>
			{/* {data.cover && data.coverAlt && (
				<div className="relative h-48">
					<Image
						alt={data.coverAlt}
						src={data.cover}
						fill
						className={
							data.noCrop ? "object-contain" : "object-cover"
						}
						sizes="(max-width:768px) 100vw, 470px"
					/>
				</div>
			)} */}

			<h1 className="px-6 pt-6 text-2xl font-bold">{name}</h1>
			<p className="prose grow px-6 dark:prose-invert">
				{data.description}
			</p>

			{data.links && (
				<div className="mt-4 flex flex-row gap-8 px-6 pb-6">
					{Object.entries(data.links).map(([title, href]) => (
						<a
							key={href}
							href={href}
							className="flex flex-row items-center gap-1 font-semibold text-blue-600 hover:underline dark:text-blue-400"
							target="_blank"
						>
							{title} <IconExternalLink size={20} />
						</a>
					))}
				</div>
			)}
		</div>
	);
}
