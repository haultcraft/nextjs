import 'tailwindcss/tailwind.css';
import '@/pages/styles/app.scss';
import LayoutBlock from '~/components/blocks/LayoutBlock';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App({ Component, pageProps }) {
	return (
		<LayoutBlock>
			<Head>
				<title>Comp Craft | 1.17</title>
			</Head>
			<Component {...pageProps} />
		</LayoutBlock>
	);
}

export default App;
