import Head from 'next/head';
import React from 'react';
import HeroBlock from '@/components/blocks/HeroBlock';
import LogoBlock from '@/components/blocks/LogoBlock';
import PricingBlock from '@/components/blocks/PricingBlock';
import RatingBlock from '@/components/blocks/RatingBlock';
import FAQBlock from '@/components/blocks/FAQBlock';
import StatusBlock from '@/components/blocks/StatusBlock';
import LeaderBoardSkills from '@/components/blocks/LeaderBoardSkills';
import LeaderBoardJobs from '@/components/blocks/LeaderBoardJobs';

export default function Home() {
	return (
		<React.Fragment>
			<StatusBlock />
			<HeroBlock />
			<LeaderBoardSkills/>
			<LeaderBoardJobs/>
			{/*<LogoBlock />*/}
			{/*<PricingBlock />*/}
			{/*<RatingBlock />*/}
			{/*<FAQBlock />*/}
		</React.Fragment>
	);
}
