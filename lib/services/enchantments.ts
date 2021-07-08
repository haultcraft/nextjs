import axios from 'axios';

const API_HOST = process.env['NEXT_PUBLIC_API_HOST'];

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

