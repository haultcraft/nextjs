import React, { useEffect, useState } from 'react';
import LeaderBoard from '@/components/LeaderBoard';
import { getTopListJob } from '@/lib/services/jobs';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const LeaderBoardJobs = ({}) => {
	const [brewerJob, setBrewerJob] = useState<[]>();
	const [builderJob, setBuilderJob] = useState<[]>();
	const [crafterJob, setCrafterJob] = useState<[]>();
	const [diggerJob, setDiggerJob] = useState<[]>();
	const [enchanterJob, setEnchanterJob] = useState<[]>();
	const [explorerJob, setExplorerJob] = useState<[]>();
	const [farmerJob, setFarmerJob] = useState<[]>();
	const [fishermanJob, setFishermanJob] = useState<[]>();
	const [hunterJob, setHunterJob] = useState<[]>();
	const [minerJob, setMinerJob] = useState<[]>();
	const [weaponsmithJob, setWeaponsmithJob] = useState<[]>();
	const [woodcutterJob, setWoodcutterJob] = useState<[]>();

	async function handleGetLeaderboard(job, state) {
		const data = await getTopListJob(job);
		state(data);
	}

	useEffect(() => {
		handleGetLeaderboard('Brewer', setBrewerJob);
		handleGetLeaderboard('Builder', setBuilderJob);
		handleGetLeaderboard('Crafter', setCrafterJob);
		handleGetLeaderboard('Digger', setDiggerJob);
		handleGetLeaderboard('Enchanter', setEnchanterJob);
		handleGetLeaderboard('Explorer', setExplorerJob);
		handleGetLeaderboard('Farmer', setFarmerJob);
		handleGetLeaderboard('Fisherman', setFishermanJob);
		handleGetLeaderboard('Hunter', setHunterJob);
		handleGetLeaderboard('Miner', setMinerJob);
		handleGetLeaderboard('Weaponsmith', setWeaponsmithJob);
		handleGetLeaderboard('Woodcutter', setWoodcutterJob);
	}, []);

	return (
		<>
			<div className='py-12 md:py-24'>
				<div
					className='max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4'>
					<h1 className='text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8'>Job
						Leaderboards</h1>
					<Swiper
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
							1280: {
								slidesPerView: 4,
							}
						}}
						navigation
						// pagination={{ clickable: true }}
						spaceBetween={24}
						autoplay={true}
						className='h-full w-full'>
						<SwiperSlide>
							<LeaderBoard skill='Brewer' list={brewerJob || []}
													 field='level'
													 color={{ topColor: 'bg-pink-200', textColor: 'text-pink-600' }} />
						</SwiperSlide>
						<SwiperSlide>
							<LeaderBoard skill='Builder' list={builderJob || []} field='level'
													 color={{ topColor: 'bg-white', textColor: 'text-gray-600' }} />
						</SwiperSlide>
						<SwiperSlide>
							<LeaderBoard skill='Crafter' list={crafterJob || []} field='level'
													 color={{ topColor: 'bg-red-200', textColor: 'text-red-600' }} />
						</SwiperSlide>
						<SwiperSlide>
							<LeaderBoard skill='Digger' list={diggerJob || []} field='level'
													 color={{ topColor: 'bg-amber-200', textColor: 'text-amber-600' }} />
						</SwiperSlide>
						<SwiperSlide>
							<LeaderBoard skill='Enchanter' list={enchanterJob || []} field='level'
													 color={{ topColor: 'bg-blue-300', textColor: 'text-blue-700' }} />
						</SwiperSlide>
						<SwiperSlide>
							<LeaderBoard skill='Explorer' list={explorerJob || []} field='level'
													 color={{ topColor: 'bg-blue-200', textColor: 'text-blue-600' }} />
						</SwiperSlide>
						<SwiperSlide>
							<LeaderBoard skill='Farmer' list={farmerJob || []} field='level'
													 color={{ topColor: 'bg-indigo-200', textColor: 'text-indigo-600' }} />
						</SwiperSlide>
						<SwiperSlide>
							<LeaderBoard skill='Fisherman' list={fishermanJob || []} field='level'
													 color={{ topColor: 'bg-cyan-200', textColor: 'text-cyan-600' }} />
						</SwiperSlide>
						<SwiperSlide>
							<LeaderBoard skill='Hunter' list={hunterJob || []} field='level'
													 color={{ topColor: 'bg-red-300', textColor: 'text-red-700' }} />
						</SwiperSlide>
						<SwiperSlide>
							<LeaderBoard skill='Miner' list={minerJob || []} field='level'
													 color={{ topColor: 'bg-gray-300', textColor: 'text-gray-600' }} />
						</SwiperSlide>
						<SwiperSlide>
							<LeaderBoard skill='Weaponsmith' list={weaponsmithJob || []} field='level'
													 color={{ topColor: 'bg-purple-200', textColor: 'text-purple-600' }} />
						</SwiperSlide>
						<SwiperSlide>
							<LeaderBoard skill='Woodcutter' list={woodcutterJob || []} field='level'
													 color={{ topColor: 'bg-green-200', textColor: 'text-green-600' }} />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>

		</>
	);
};
export default LeaderBoardJobs;