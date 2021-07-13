import axios from 'axios';

const API_HOST = process.env['NEXT_PUBLIC_API_HOST'];

export type ItemShop = {
	material: string;
	enchantments: string[];
	material_img: string;
	buy: number;
	sell: number;
}

export type ShopCategoryProps = {
	title: string;
	list: ItemShop[];
	field?: string;
}

export async function getListItems() {
	const { data } = await axios.get(`${API_HOST}/shops`);
	return data;
}

export async function getSectionItems(section: string) {
	const { data } = await axios.get(`${API_HOST}/shops/${section}`);
	return data;
}