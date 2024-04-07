import Search from "./Search";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
	title: "Blog Posts",
	openGraph: {
		siteName: "Ahmed Saheed",
		title: "Blog Posts",
		description: "A programmer with one brain cell which bounces around like a dvd screensaver.",
	},
};

export default async function Blog() {
	const allPosts = await getAllPosts();

	// Remove unneeded fields from posts before sending them to the client
	const posts = allPosts.map((post) => ({
		slug: post.slug,
		cover: post.cover,
		coverAlt: post.coverAlt,
		date: post.date,
		readingTime: post.readingTime,
		title: post.title,
		summary: post.summary,
		blurDataURL: post.blurDataURL,
	}));

	return <Search title="Blog Posts" posts={posts} />;
}
