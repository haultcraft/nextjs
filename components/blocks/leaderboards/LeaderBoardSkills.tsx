import { useEffect, useState } from 'react';
import { getTopListSkill } from '@/lib/services/mcmmo';
import LeaderBoard from '@/components/LeaderBoard';

const LeaderBoardSkills = ({}) => {
	const [miningSkill, setMiningSkill] = useState<[]>();
	const [woodcuttingSkill, setWoodcuttingSkill] = useState<[]>();
	const [swordsSkill, setSwordsSkill] = useState<[]>();
	const [acrobaticsSkill, setAcrobaticsSkill] = useState<[]>();

	async function handleGetLeaderboard(skill, state) {
		const data = await getTopListSkill(skill);
		state(data);
	}

	useEffect(() => {
		handleGetLeaderboard('mining', setMiningSkill);
		handleGetLeaderboard('woodcutting', setWoodcuttingSkill);
		handleGetLeaderboard('swords', setSwordsSkill);
		handleGetLeaderboard('acrobatics', setAcrobaticsSkill);
	}, []);

	return (
		<>
			<div className='py-12 md:py-24'>
				<div
					className='max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4'>
					<h1 className='text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8'>Skill
						Leaderboards</h1>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
						<LeaderBoard skill='mining' list={miningSkill || []} field='level'
												 color={{ topColor: 'bg-green-200', textColor: 'text-green-600' }} />
						<LeaderBoard skill='woodcutting' list={woodcuttingSkill || []} field='level'
												 color={{ topColor: 'bg-amber-200', textColor: 'text-amber-600' }} />
						<LeaderBoard skill='swords' list={swordsSkill || []} field='level'
												 color={{ topColor: 'bg-gray-200', textColor: 'text-gray-600' }} />
						<LeaderBoard skill='acrobatics' list={acrobaticsSkill || []} field='level'
												 color={{ topColor: 'bg-indigo-200', textColor: 'text-indigo-600' }} />
					</div>
				</div>
			</div>

		</>
	);
};
export default LeaderBoardSkills;