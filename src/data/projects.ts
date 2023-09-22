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
		image: "https://media.discordapp.net/attachments/1139677297398521976/1139957366679425124/invite2.png?width=1193&height=671",
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
