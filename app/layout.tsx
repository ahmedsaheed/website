import "./globals.css";
import Providers from "./providers";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Analytics } from "@vercel/analytics/react";
import mergeMetadata from "@/lib/mergeMetadata";
import { Quicksand } from 'next/font/google'


export const metadata = mergeMetadata();

export const viewport = {
	themeColor: "#2563eb",
};

const quicksand = Quicksand({
    subsets: ['vietnamese'],
    weight: ["300", "700"]
})
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${quicksand.className}  scroll-smooth [scrollbar-gutter:stable]`}
		>
			<body className="max-w-7xl gap-8 bg-zinc-50 px-6 pb-8 text-black dark:bg-zinc-950 dark:text-white lg:mx-auto lg:flex lg:flex-row lg:py-20 2xl:px-0">
				<Providers>
					<Navbar />

					<Sidebar />

					<main id="main" className="mt-16 grow lg:mt-0">
						{children}
					</main>
				</Providers>

				<Analytics />
			</body>
		</html>
	);
}
