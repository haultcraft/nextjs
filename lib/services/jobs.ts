import axios from 'axios';

const API_HOST = process.env['NEXT_PUBLIC_API_HOST'];

type PlayerLevel = {
	username: string;
	level: number;
}

export type ItemJob = {
	name: string;
	description?: string[];
	toplist?: PlayerLevel[];
	rewards?: object;
	color?: string;
}

export async function getListJobs() {
	const { data } = await axios.get(`${API_HOST}/jobs`);
	return data;
}

export async function getTopListJob(job: string) {
	const { data } = await axios.get(`${API_HOST}/jobs/${job}/toplist`);
	return data;
}

export async function getInfoJob(job: string, limit = 10, minimal = false) {
	const { data } = await axios.get(`${API_HOST}/jobs/${job}?limit=${limit}&minimal=${minimal}`);
	return data as ItemJob;
}