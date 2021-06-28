import Head from 'next/head';
import HeroBlock from '@/components/HeroBlock';
import LogoBlock from '@/components/LogoBlock';
import PricingBlock from '@/components/PricingBlock';
import RatingBlock from '@/components/RatingBlock';
import FAQBlock from '@/components/FAQBlock';
import StatusBlock from '@/components/StatusBlock';

export default function Home() {
	return (
		<>
			<StatusBlock />
			<HeroBlock />
			{/*<LogoBlock />*/}
			{/*<PricingBlock />*/}
			{/*<RatingBlock />*/}
			{/*<FAQBlock />*/}
		</>
	);
}
