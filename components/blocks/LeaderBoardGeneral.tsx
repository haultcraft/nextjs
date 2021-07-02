import { useEffect, useState } from 'react';
import LeaderBoard from '@/components/LeaderBoard';
import { getToplistBalance, getToplistPlayedtime } from '@/lib/services/player';
import { convertToDuration } from '@/utils';
import { getTopListSkill } from '@/lib/services/mcmmo';

const LeaderBoardGeneral = ({}) => {
	const [playedTime, setPlayedTime] = useState<[]>();
	const [powerLevel, setPowerLevel] = useState<[]>();
	const [balanceTop, setBalanceTop] = useState<[]>();

	async function handleGetPlayedtime() {
		let data = await getToplistPlayedtime();
		data = data.map(item => ({
			...item,
			played_time: convertToDuration(item.played_time),
		}));
		setPlayedTime(data);
	}

	async function handlePowerLevel() {
		let data = await getTopListSkill('total');
		setPowerLevel(data);
	}

	async function handleBalance() {
		let data = await getToplistBalance();
		setBalanceTop(data);
	}

	useEffect(() => {
		handleGetPlayedtime();
		handlePowerLevel();
		handleBalance();
	}, []);

	return (
		<>
			<div className='py-12 md:py-24'>
				<div
					className='max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4'>
					<h1 className='text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8'>General
						Leaderboards</h1>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
						<LeaderBoard skill='Played Time' list={playedTime || []} field='played_time'
												 color={{ topColor: 'bg-indigo-200', textColor: 'text-indigo-600' }} />
						<LeaderBoard skill='Money' list={balanceTop || []} field='balance'
												 color={{ topColor: 'bg-green-200', textColor: 'text-green-600', textPrefix: 'C$' }} />
						<LeaderBoard skill='Power Level' list={powerLevel || []} field='level'
												 color={{ topColor: 'bg-amber-200', textColor: 'text-amber-600' }} />

					</div>
				</div>
			</div>

		</>
	);
};
export default LeaderBoardGeneral;