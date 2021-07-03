import LeaderBoard from '@/components/LeaderBoard';
import { useEffect, useState } from 'react';
import { getListItems, ItemShop } from '@/lib/services/shop';
import ShopCategory from '@/components/ShopCategory';

const ShopBlock = ({}) => {
	const [blocksShop, setBlocksShop] = useState<ItemShop[]>();
	const [decorationShop, setDecorationShop] = useState<ItemShop[]>();
	const [dyesShop, setDyesShop] = useState<ItemShop[]>();
	const [enchantingShop, setEnchantingShop] = useState<ItemShop[]>();
	const [farmingShop, setFarmingShop] = useState<ItemShop[]>();
	const [foodShop, setFoodShop] = useState<ItemShop[]>();
	const [mobsShop, setMobsShop] = useState<ItemShop[]>();
	const [musicShop, setMusicShop] = useState<ItemShop[]>();
	const [oresShop, setOresShop] = useState<ItemShop[]>();
	const [othersShop, setOthersShop] = useState<ItemShop[]>();
	const [potionsShop, setPotionsShop] = useState<ItemShop[]>();
	const [redstoneShop, setRedstoneShop] = useState<ItemShop[]>();
	const [spawnEggsShop, setSpawnEggsShop] = useState<ItemShop[]>();
	const [workstationsShop, setWorkstationsShop] = useState<ItemShop[]>();

	async function handleGetShop() {
		function clearShop(arr: {}) {
			return Object.values(arr).map((item: ItemShop) => ({
				...item,
				material: item['material'].replace(new RegExp('\_', 'g'), ' ').toLowerCase(),
				material_img: item['material'].toLowerCase(),
			}));
		}

		const data = await getListItems();
		console.log(data);
		setBlocksShop(clearShop(data['Blocks']));
		setDecorationShop(clearShop(data['Decoration']));
		setDyesShop(clearShop(data['Dyes']));
		setEnchantingShop(clearShop(data['Enchanting']));
		setFarmingShop(clearShop(data['Farming']));
		setFoodShop(clearShop(data['Food']));
		setMobsShop(clearShop(data['Mobs']));
		setMusicShop(clearShop(data['Music']));
		setOresShop(clearShop(data['Ores']));
		setOthersShop(clearShop(data['Others']));
		setPotionsShop(clearShop(data['Potions']));
		setRedstoneShop(clearShop(data['Redstone']));
		setSpawnEggsShop(clearShop(data['SpawnEggs']));
		setWorkstationsShop(clearShop(data['Workstations']));
	}

	useEffect(() => {
		handleGetShop();
	}, []);

	return (
		<>
			<div className='py-12 md:py-24'>
				<div
					className='max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4'>
					<div className='flex justify-between items-baseline'>
						<h1 className='text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8'>Shop
							Items </h1><a
						href='https://www.spigotmc.org/resources/economyshopgui.69927/'><span
						className='text-gray-400 text-sm'>EconomyShopGUI</span></a>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
						<ShopCategory title='Workstations' list={workstationsShop || []} />
						<ShopCategory title='Dyes' list={dyesShop || []} />
						{/*<ShopCategory title='Enchanting' list={enchantingShop || []} />*/}
						<ShopCategory title='Farming' list={farmingShop || []} />
						<ShopCategory title='Food' list={foodShop || []} />
						<ShopCategory title='Music' list={mobsShop || []} />
						<ShopCategory title='Music' list={musicShop || []} />
						<ShopCategory title='Ores' list={oresShop || []} />
						<ShopCategory title='Redstone' list={redstoneShop || []} />
						<ShopCategory title='SpawnEggs' list={spawnEggsShop || []} />
						<ShopCategory title='Others' list={othersShop || []} />
						<ShopCategory title='Decoration' list={decorationShop || []} />
						<ShopCategory title='Blocks' list={blocksShop || []} />
						<ShopCategory title='Potions' list={potionsShop || []} />
					</div>
				</div>
			</div>

		</>
	);
};
export default ShopBlock;