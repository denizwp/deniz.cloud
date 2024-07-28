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
		name: "agac project",
		description:
			"wip",
		image: "/images/projects/agacproject.gif",
		url: "https://povs.live",
		stack: [
			{
				name: "TailwindCSS",
				icon: "tailwindcss"
			}
		]
	},
	{
		name: "povs.live",
		description:
			"Follow the FiveM servers, twitch streamers playing on the server, and don't miss instant content.",
		image: "/images/projects/povs.png",
		url: "https://povs.live",
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
		name: "teamnood.com",
		description:
			"teamnood.com is a community project that brings esports teams and players together and organizes tournaments.",
		image: "/images/projects/nood.png",
		url: "https://teamnood.com",
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
	}
];
