import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					{/*<link*/}
					{/*	rel="preload"*/}
					{/*	href="/fonts/Minecraft.Reg.ttf"*/}
					{/*	as="font"*/}
					{/*	crossOrigin=""*/}
					{/*/>*/}
					{/*<link*/}
					{/*	rel="preload"*/}
					{/*	href="/fonts/Minecraft.Alt.ttf"*/}
					{/*	as="font"*/}
					{/*	crossOrigin=""*/}
					{/*/>*/}
				</Head>
				<body className='font-sans'>
				<Main />
				<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;