import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class DocumentStruct extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link
						rel="icon"
						type="image/png"
						href="/favicon.ico"
					/>
					<meta name="theme-color" content="#ffffff" />
					<meta
						name="description"
						content="Ahmed Saheed, Software Engineering Intern from the UK"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;500&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script async src="/theme.js" />
				</body>
			</Html>
		);
	}
}