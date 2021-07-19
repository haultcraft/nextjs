import { useEffect, useState } from 'react';
import { getTalismans } from '@/lib/services/talismans';
import TalismanInfo from '@/components/blocks/talismans/TalismanInfo';


const TalismansBlock = ({}) => {
	const [talismansCategories, setTalismansCategories] = useState<any>();

	async function handleGetTalismans(categories = false, state) {
		const data = await getTalismans(categories);
		state(data);
	}

	useEffect(() => {
		handleGetTalismans(true, setTalismansCategories);
	}, []);

	return (
		<>
			<div className='py-12 md:py-24'>
				<div
					className='max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4'>
					<div className='flex justify-between items-baseline'>
						<h1
							className='text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8'>Talismans </h1>
						<a
							href='https://www.spigotmc.org/resources/87377/'><span
							className='text-gray-400 text-sm'>Talismans</span></a>
					</div>
					<div className='flex flex-col gap-6'>
						{
							!!talismansCategories && Object.keys(talismansCategories).map(talismanCategory => (
								<div key={talismanCategory}>
									<TalismanInfo title={talismanCategory.replace(new RegExp('\_', 'g'), ' ')}
																talismans={talismansCategories[talismanCategory]} />
								</div>
							))
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default TalismansBlock;