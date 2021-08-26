import { useEffect, useState } from 'react';
import { getListItems, getSectionItems, ItemShop } from '@/lib/services/shops';
import ShopCategory from '@/components/blocks/shops/ShopCategory';
import ShopInfo from '@/components/blocks/shops/ShopInfo';

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
		const data = await getListItems();
		setBlocksShop(await getSectionItems('Blocks'));
		setDecorationShop(await getSectionItems('Decoration'));
		setDyesShop(await getSectionItems('Dyes'));
		setFarmingShop(await getSectionItems('Farming'));
		setFoodShop(await getSectionItems('Food'));
		setMobsShop(await getSectionItems('Mobs'));
		setMusicShop(await getSectionItems('Music'));
		setOresShop(await getSectionItems('Ores'));
		setOthersShop(await getSectionItems('Others'));
		setRedstoneShop(await getSectionItems('Redstone'));
		setWorkstationsShop(await getSectionItems('Workstations'));
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
					<div>
						<ShopInfo title='Workstations' list={workstationsShop || []} />
					</div>
					<div className='mt-4'>
						<ShopInfo title='Dyes' list={dyesShop || []} />
					</div>
					<div className='mt-4'>
						<ShopInfo title='Farming' list={farmingShop || []} />
					</div>
					<div className='mt-4'>
						<ShopInfo title='Food' list={foodShop || []} />
					</div>
					<div className='mt-4'>
						<ShopInfo title='Mobs' list={mobsShop || []} />
					</div>
					<div className='mt-4'>
						<ShopInfo title='Music' list={musicShop || []} />
					</div>
					<div className='mt-4'>
						<ShopInfo title='Ores' list={oresShop || []} />
					</div>
					<div className='mt-4'>
						<ShopInfo title='Redstone' list={redstoneShop || []} />
					</div>
					<div className='mt-4'>
						<ShopInfo title='Others' list={othersShop || []} />
					</div>
					<div className='mt-4'>
						<ShopInfo title='Decoration' list={decorationShop || []} />
					</div>
					<div className='mt-4'>
						<ShopInfo title='Blocks' list={blocksShop || []} />
					</div>
				</div>
			</div>

		</>
	);
};
export default ShopBlock;