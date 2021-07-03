import React from 'react';
import HeroBlock from '@/components/blocks/HeroBlock';
import StatusBlock from '@/components/blocks/StatusBlock';
import LeaderBoardSkills from '@/components/blocks/leaderboards/LeaderBoardSkills';
import LeaderBoardJobs from '@/components/blocks/leaderboards/LeaderBoardJobs';
import LeaderBoardGeneral from '@/components/blocks/leaderboards/LeaderBoardGeneral';

export default function Home() {
	return (
		<React.Fragment>
			<HeroBlock />
			<LeaderBoardGeneral/>
			<LeaderBoardJobs/>
			<LeaderBoardSkills/>
		</React.Fragment>
	);
}
