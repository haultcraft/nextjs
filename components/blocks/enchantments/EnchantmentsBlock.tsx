import { useEffect, useState } from 'react';
import { Enchantment, getCustomEnchantments, getDefaultEnchantments } from '@/lib/services/enchantments';
import EnchantmentsList from '@/components/blocks/enchantments/EnchantmentsList';


const EnchatmentsBlock = ({}) => {
	const [defaultEnchantments, setDefaultEnchantments] = useState<Enchantment[]>();
	const [customEnchantments, setCustomEnchantments] = useState<Enchantment[]>();
	const [filteredDefaultEnchantments, setFilteredDefaultEnchantments] = useState<Enchantment[]>();
	const [filteredCustomEnchantments, setFilteredCustomEnchantments] = useState<Enchantment[]>();
	const [loading, isLoading] = useState<boolean>(true);

	async function handleGetEnchantments(fetcher, state, filtState) {
		const data = await fetcher();
		state(data);
		filtState(data);
	}

	function handleFilterEnchantments(searchString) {

		if (!!searchString) {
			setFilteredDefaultEnchantments(defaultEnchantments.filter(item => item['enchantment'].includes(searchString) || item['display_name'].includes(searchString) || item['description'].includes(searchString)));
			setFilteredCustomEnchantments(customEnchantments.filter(item => item['enchantment'].includes(searchString) || item['description'].includes(searchString) || item['rarity'].includes(searchString.toLowerCase())));
		} else {
			setFilteredDefaultEnchantments(defaultEnchantments);
			setFilteredCustomEnchantments(customEnchantments);
		}
	}

	useEffect(() => {
		(async () => {
			await handleGetEnchantments(getDefaultEnchantments, setDefaultEnchantments, setFilteredDefaultEnchantments);
			await handleGetEnchantments(getCustomEnchantments, setCustomEnchantments, setFilteredCustomEnchantments);
		})().then(() => isLoading(false));

	}, []);

	return (
		<>
			<div className='py-12 md:py-24'>
				<div
					className='max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4'>
					<div className='flex flex-wrap justify-between items-baseline border-b-2'>
						<h1
							className='text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8'>Enchantments</h1>
						<div>
							<input type='search' id='search-enchant' placeholder='Search an Enchantment'
										 className='border-1 shadow px-3 py-2 outline-none focus:outline-none focus:ring-2 ring-gray-400'
										 onInput={(e) => {
											 handleFilterEnchantments(e.currentTarget.value);
										 }} />
						</div>
					</div>
					<div>
						<h3 className='text-gray-800 text-lg font-bold my-2 md:my-4'>Default
							Enchantments</h3>
						<EnchantmentsList loading={loading} list={filteredDefaultEnchantments || []}
															field='display_name' />

					</div>
					<div>
						<div className='flex items-center justify-between border-b-1 my-2'>
							<h3 className='text-gray-800 text-lg font-bold my-2 md:my-4'>Custom
								Enchantments</h3>
							<a
								href='https://www.spigotmc.org/resources/1-8-1-17-1-%E2%AD%95-advancedenchantments-%E2%AD%90-400-custom-enchants-%E2%AD%90create-custom-enchantments-%E2%9C%85-50-sale.43058/'><span
								className='text-gray-400 text-sm'>AdvancedEnchantments</span></a>
						</div>

						<EnchantmentsList list={filteredCustomEnchantments || []}
															field='enchantment' rarity={true} loading={loading} />
					</div>
				</div>
			</div>
		</>
	);
};
export default EnchatmentsBlock;