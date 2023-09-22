import "../styles/index.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>deniz</title>

				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta name="theme-color" content="#000000" />
				
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />

				<link rel="icon" type="image/x-icon" href="https://cdn.discordapp.com/attachments/916348412801212476/1108801941364035636/favicon.png?ex=650f1a47&is=650dc8c7&hm=e939d9c45eb074fbcfe76173c5bcf8c8f55ba94196eabf6fb1363dacda62734f&"/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
