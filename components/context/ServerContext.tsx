import { createContext } from 'react';

type ServerCTX = {
	online: boolean
	maxPlayers: number
	onlinePlayers: number
	currentPlayers: string[]
	version: string
	loading: boolean
	plugins: string[]
	ip: string
}

const ServerContext = createContext({} as ServerCTX);

export default ServerContext;