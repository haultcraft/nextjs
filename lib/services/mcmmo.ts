import axios from 'axios';

const API_HOST = process.env['NEXT_PUBLIC_API_HOST'];


export async function getListSkills() {
	const { data } = await axios.get(`${API_HOST}/mcmmo`);
	return data;
}

export async function getTopListSkill(skill: string) {
	const { data } = await axios.get(`${API_HOST}/mcmmo/${skill}`);
	return data;
}