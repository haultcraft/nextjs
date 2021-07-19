import axios from 'axios';

let API_HOST = process.env['NEXT_PUBLIC_API_HOST'];

if (process.browser) {
	API_HOST = window.localStorage.getItem('API_HOST') || API_HOST;
}

export async function getServerStatus() {
	const { data } = await axios.get(`${API_HOST}/server/status`);
	return data;
}

export async function getServerQuery() {
	const { data } = await axios.get(`${API_HOST}/server/query`);
	return data;
}