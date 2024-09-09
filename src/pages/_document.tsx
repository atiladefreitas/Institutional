import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head></Head>
			<body>
				<title>Code Presence</title>
				<meta
					name="description"
					content="At Code Presence, we bring your ideas to light"
					key="desc"
				/>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
