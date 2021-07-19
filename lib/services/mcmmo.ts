import axios from 'axios';

let API_HOST = process.env['NEXT_PUBLIC_API_HOST'];

if (process.browser) {
	API_HOST = window.localStorage.getItem('API_HOST') || API_HOST;
}

export async function getListSkills() {
	const { data } = await axios.get(`${API_HOST}/mcmmo`);
	return data;
}

export async function getTopListSkill(skill: string) {
	const { data } = await axios.get(`${API_HOST}/mcmmo/${skill}`);
	return data;
}