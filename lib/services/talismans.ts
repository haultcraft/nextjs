import axios from 'axios';

let API_HOST = process.env['NEXT_PUBLIC_API_HOST'];

if (process.browser) {
	API_HOST = window.localStorage.getItem('API_HOST') || API_HOST;
}

export type Talisman = {
	name: string;
	category: string;
	level: string;
	description: string;
}

export type TalismanCategory = Talisman[]

export async function getTalismans(categories = false) {
	const { data } = await axios.get(`${API_HOST}/talismans?categories=${categories}`);
	return data;
}
