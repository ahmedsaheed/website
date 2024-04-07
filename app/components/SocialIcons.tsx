import clsx from "clsx";
import {
	IconMail,
	IconBrandGithub,
	IconBrandTwitter,
	IconBrandGithubFilled,
	IconBrandTwitterFilled,
	IconMailFilled,
	TablerIconsProps,
	IconBrandBluesky,
	IconBrandLinkedin
} from "@tabler/icons-react";

const iconColors = {
	blue: "hover:text-blue-600 dark:hover:text-blue-400",
	purple: "hover:text-purple-600 dark:hover:text-purple-400",
	red: "hover:text-red-600 dark:hover:text-red-400",
};

interface SocialLink {
	Icon: (props: TablerIconsProps) => JSX.Element;
	IconFilled: (props: TablerIconsProps) => JSX.Element;
	label: string;
	href: string;
	color: keyof typeof iconColors;
}

const social: SocialLink[] = [
	{
		Icon: IconBrandTwitter,
		IconFilled: IconBrandTwitterFilled,
		label: "Twitter",
		href: "https://twitter.com/helloahmed_",
		color: "blue",
	},
	{
		Icon: IconBrandGithub,
		IconFilled: IconBrandGithubFilled,
		label: "Ahmed on GitHub",
		href: "https://github.com/ahmedsaheed",
		color: "purple",
	},
	{
		Icon: IconBrandLinkedin,
		IconFilled: IconBrandLinkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/ahmed-saheed-029549230/",
		color: "blue",
	},
	{
		Icon: IconMail,
		IconFilled: IconMailFilled,
		label: "Leave a message",
		href: "mailto:ahmedsaheed2@outlook.com",
		color: "red",
	},
];

export default function SocialIcons() {
	return social.map(({ href, Icon, IconFilled, label, color }) => (
		<a
			href={href}
			key={href}
			className={clsx(
				"group relative h-11 w-11 rounded-md p-2 transition ease-in-out hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50",
				iconColors[color],
			)}
			title={label}
			target="_blank"
		>
			<Icon
				size={28}
				className="absolute transition ease-in-out group-hover:opacity-0"
			/>
			<IconFilled
				size={28}
				className="absolute opacity-0 transition ease-in-out group-hover:opacity-100"
			/>
		</a>
	));
}
