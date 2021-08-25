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
		searchString = searchString.toLowerCase()
		if (!!searchString) {
			setFilteredDefaultEnchantments(defaultEnchantments.filter(item => item['display_name'].toLowerCase().includes(searchString) || item['description'].toLowerCase().includes(searchString)));
			setFilteredCustomEnchantments(customEnchantments.filter(item => item['display_name'].toLowerCase().includes(searchString) || item['description'].toLowerCase().includes(searchString) || item['type'].toLowerCase().includes(searchString.toLowerCase())));
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
								href='https://www.spigotmc.org/resources/1-16-1-17-%E2%9A%A1-ecoenchants-%E2%9C%A8-230-custom-enchantments-%E2%9C%85-essentials-cmi-support.79573/'><span
								className='text-gray-400 text-sm'>EcoEnchants</span></a>
						</div>

						<EnchantmentsList list={filteredCustomEnchantments || []}
															field='display_name' type={true} loading={loading} />
					</div>
				</div>
			</div>
		</>
	);
};
export default EnchatmentsBlock;