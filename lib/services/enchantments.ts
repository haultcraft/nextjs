import axios from 'axios';

let API_HOST = process.env['NEXT_PUBLIC_API_HOST'];

if (process.browser) {
	API_HOST = window.localStorage.getItem('API_HOST') || API_HOST;
}

export type Enchantment = {
	enchantment: string;
	display_name?: string;
	description: string;
	applies_to: string;
	max_level: number;
	rarity?: string;
}

export async function getDefaultEnchantments() {
	const { data } = await axios.get(`${API_HOST}/enchantments/default`);
	return data;
}

export async function getCustomEnchantments() {
	const { data } = await axios.get(`${API_HOST}/enchantments/custom`);
	return data;
}

