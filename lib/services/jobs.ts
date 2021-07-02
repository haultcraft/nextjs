import axios from 'axios';

const API_HOST = process.env['NEXT_PUBLIC_API_HOST'];


export async function getListJobs() {
	const { data } = await axios.get(`${API_HOST}/jobs`);
	return data;
}

export async function getTopListJob(job: string) {
	const { data } = await axios.get(`${API_HOST}/jobs/${job}`);
	return data;
}