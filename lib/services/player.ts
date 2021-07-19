import axios from 'axios';

let API_HOST = process.env['NEXT_PUBLIC_API_HOST'];

if (process.browser) {
	API_HOST = window.localStorage.getItem('API_HOST') || API_HOST;
}


export async function getPlayerMCMMO(username: string) {
	const { data } = await axios.get(`${API_HOST}/players/${username}/mcmmo`);
	return data;
}

export async function getToplistPlayedtime() {
	const { data } = await axios.get(`${API_HOST}/players/playedtime`);
	return data;
}

export async function getToplistBalance() {
	const { data } = await axios.get(`${API_HOST}/players/balance`);
	return data;
}