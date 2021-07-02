import { useEffect, useState } from 'react';
import LeaderBoard from '@/components/LeaderBoard';
import { getTopListJob } from '@/lib/services/jobs';

const LeaderBoardJobs = ({}) => {
	const [minerJob, setMinerJob] = useState<[]>();
	const [woodcutterJob, setWoodcutterJob] = useState<[]>();
	const [hunterJob, setHunterJob] = useState<[]>();
	const [explorerJob, setExplorerJob] = useState<[]>();

	async function handleGetLeaderboard(job, state) {
		const data = await getTopListJob(job);
		state(data);
	}

	useEffect(() => {
		handleGetLeaderboard('Miner', setMinerJob);
		handleGetLeaderboard('Woodcutter', setWoodcutterJob);
		handleGetLeaderboard('Hunter', setHunterJob);
		handleGetLeaderboard('Explorer', setExplorerJob);
	}, []);

	return (
		<>
			<div className='py-12 md:py-24'>
				<div
					className='max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4'>
					<h1 className='text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8'>Job
						Leaderboards</h1>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
						<LeaderBoard skill='Miner' list={minerJob || []}
												 color={{ topColor: 'bg-gray-200', textColor: 'text-gray-600' }} />
						<LeaderBoard skill='Woodcutter' list={woodcutterJob || []}
												 color={{ topColor: 'bg-green-200', textColor: 'text-green-600' }} />
						<LeaderBoard skill='Hunter' list={hunterJob || []}
												 color={{ topColor: 'bg-red-200', textColor: 'text-red-600' }} />
						<LeaderBoard skill='Explorer' list={explorerJob || []}
												 color={{ topColor: 'bg-blue-200', textColor: 'text-blue-600' }} />
					</div>
				</div>
			</div>

		</>
	);
};
export default LeaderBoardJobs;