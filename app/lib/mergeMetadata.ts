import url from "@/lib/siteURL";
import { Metadata } from "next";

export default function mergeMetadata({
	title,
	description,
	image,
	imageAlt,
}: {
	title?: string;
	description?: string;
	image?: string;
	imageAlt?: string;
} = {}) {
	const metadata: Metadata = {
		title: title ? `${title} • Ahmed Saheed` : "Ahmed Saheed",
		openGraph: {
			siteName: "Ahmed Saheed",
			title: title ?? "Ahmed Saheed",
			description:
				description ??
				"A programmer with one brain cell which bounces around like a dvd screensaver.",
			images: {
				url: image ?? "/images/card-image.png",
				alt:
					imageAlt ??
					"A programmer with one brain cell which bounces around like a dvd screensaver.",
			},
		},
		description:
			description ?? "A programmer with one brain cell which bounces around like a dvd screensaver.",
		twitter: {
			title: title ?? "Ahmed Saheed",
			card: "summary_large_image",
			site: "@helloahmed_",
		},
		metadataBase: new URL(url),
	};

	return metadata;
}
