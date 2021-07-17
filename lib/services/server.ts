import axios from 'axios';

const API_HOST = process.env['NEXT_PUBLIC_API_HOST'];


export async function getServerStatus() {
	const { data } = await axios.get(`${API_HOST}/server/status`);
	return data;
}

export async function getServerQuery() {
	const { data } = await axios.get(`${API_HOST}/server/query`);
	return data;
}