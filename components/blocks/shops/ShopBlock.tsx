import { useEffect, useState } from 'react';
import { getListItems, getSectionItems, ItemShop } from '@/lib/services/shops';
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
		const data = await getListItems();
		setBlocksShop(await getSectionItems('Blocks'));
		setDecorationShop(await getSectionItems('Decoration'));
		setDyesShop(await getSectionItems('Dyes'));
		setEnchantingShop(await getSectionItems('Enchanting'));
		setFarmingShop(await getSectionItems('Farming'));
		setFoodShop(await getSectionItems('Food'));
		setMobsShop(await getSectionItems('Mobs'));
		setMusicShop(await getSectionItems('Music'));
		setOresShop(await getSectionItems('Ores'));
		setOthersShop(await getSectionItems('Others'));
		setPotionsShop(await getSectionItems('Potions'));
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
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
						<div>
							<ShopCategory title='Workstations' list={workstationsShop || []} />
						</div>
						<div>
							<ShopCategory title='Dyes' list={dyesShop || []} />
						</div>
						<div>
							<ShopCategory title='Enchanting' list={enchantingShop || []} field='enchantments' />
						</div>
						<div>
							<ShopCategory title='Farming' list={farmingShop || []} />
						</div>
						<div>
							<ShopCategory title='Food' list={foodShop || []} />
						</div>
						<div>
							<ShopCategory title='Mobs' list={mobsShop || []} />
						</div>
						<div>
							<ShopCategory title='Music' list={musicShop || []} />
						</div>
						<div>
							<ShopCategory title='Ores' list={oresShop || []} />
						</div>
						<div>
							<ShopCategory title='Redstone' list={redstoneShop || []} />
						</div>
						<div>
							<ShopCategory title='Others' list={othersShop || []} />
						</div>
						<div>
							<ShopCategory title='Decoration' list={decorationShop || []} />
						</div>
						<div>
							<ShopCategory title='Blocks' list={blocksShop || []} />
						</div>
						<div>
							<ShopCategory title='Potions' list={potionsShop || []} field='potiontypes' />
						</div>
						<div>
							<ShopCategory title='SpawnEggs' list={spawnEggsShop || []} />
						</div>
					</div>
				</div>
			</div>

		</>
	);
};
export default ShopBlock;