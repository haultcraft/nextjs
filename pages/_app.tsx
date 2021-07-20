import 'tailwindcss/tailwind.css';
import '@/pages/styles/app.scss';
import 'swiper/swiper.scss';

import LayoutBlock from '~/components/blocks/LayoutBlock';
import Head from 'next/head';
import ServerContext from '~/components/context/ServerContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { getServerQuery } from '~/lib/services/server';

import { useEffect, useState } from 'react';

library.add(fab, fas);

function App({ Component, pageProps }) {
	const [currentPlayers, setCurrentPlayers] = useState<string[]>([]);
	const [playersOnline, setPlayersOnline] = useState<number>();
	const [playersCapacity, setPlayersCapacity] = useState<number>();
	const [serverOnline, isServerOnline] = useState<boolean>();
	const [serverVersion, setServerVersion] = useState<string>();
	const [serverPlugins, setServerPlugins] = useState<string[]>();
	const [loading, isLoading] = useState<boolean>(true);


	async function handleServerQuery(minimal: boolean = false) {
		const ignoredPlugins = ['NBTAPI', 'LuckPerms', 'PlaceholderAPI', 'eco', 'SirBlobmanCore', 'ProtocolLib', 'Vault', 'WorldEdit', 'AnimatedScoreboard', 'Essentials', 'Multiverse-Core', 'Multiverse-Inventories', 'EssentialsChat', 'Multiverse-Portals', 'ChatManager', 'WorldGuard', 'QuestClan-Addon', 'CMILib', ''];
		const data = await getServerQuery();
		if (data.status == 'offline') {
			isServerOnline(false);
		}
		isServerOnline(true);
		setCurrentPlayers(data.players.names.sort());
		setServerVersion(data.software.version);
		setPlayersCapacity(data.players.max);
		setPlayersOnline(data.players.online);
		if (!minimal) {
			setServerPlugins(data.software.plugins.map(item => item.replace(new RegExp('[0-9](.*)', 'g'), '').trim()).filter(item => !ignoredPlugins.includes(item)));
		}
		isLoading(false);
	}

	useEffect(() => {
		handleServerQuery();
		const ms = 1000;
		setInterval(() => handleServerQuery(true), 60 * ms);
	}, []);

	return (
		<ServerContext.Provider value={{
			online: serverOnline,
			currentPlayers: currentPlayers,
			maxPlayers: playersCapacity,
			onlinePlayers: playersOnline,
			version: serverVersion,
			plugins: serverPlugins,
			loading: loading,
			ip: 'compcraft.servegame.com',
		}}>
			<LayoutBlock>
				<Head>
					<title>Comp Craft | 1.17</title>
					<meta name='viewport'
								content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
				</Head>
				<Component {...pageProps} />
			</LayoutBlock>
		</ServerContext.Provider>

	);
}

export default App;
