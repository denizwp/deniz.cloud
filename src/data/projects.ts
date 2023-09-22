export interface StackIconItem {
	name: string;
	icon: string;
	src?: never;
}

export interface StackCustomItem {
	name: string;
	icon?: never;
	src: string;
}

export interface ProjectInfo {
	name: string;
	description: React.ReactNode;
	image: string;
	url: string;
	stack: (StackIconItem | StackCustomItem)[];
}

export const projects: ProjectInfo[] = [
	{
		name: "povs.online",
		description:
			"Follow the FiveM servers, twitch streamers playing on the server, and don't miss instant content.",
		image: "/images/projects/povs.png",
		url: "https://povs.online",
		stack: [
			{
				name: "TailwindCSS",
				icon: "tailwindcss"
			},
			{
				name: "React",
				icon: "react"
			}
		]
	},
	{
		name: "teamCloud",
		description:
			"teamCloud is a team of community developers. We develop advanced and high-quality products on FiveM.",
		image: "/images/projects/invite2.png",
		url: "https://discord.gg/teamcloud",
		stack: [
			{
				name: "TailwindCSS",
				icon: "tailwindcss"
			},
			{
				name: "JavaScript",
				icon: "js"
			}
		]
	}
];
