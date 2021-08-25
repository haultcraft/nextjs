import React from 'react';
import HeroBlock from '@/components/blocks/HeroBlock';
import LeaderBoardJobs from '@/components/blocks/leaderboards/LeaderBoardJobs';
import LeaderBoardGeneral from '@/components/blocks/leaderboards/LeaderBoardGeneral';
import Development from '@/components/blocks/Development';

export default function Home() {
	return (
		<React.Fragment>
			<HeroBlock />
			<LeaderBoardGeneral />
			<LeaderBoardJobs />
			<Development />
			{/*<LeaderBoardSkills/>*/}
		</React.Fragment>
	);
}
