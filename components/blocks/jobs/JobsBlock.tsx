import { useEffect, useState } from 'react';
import { getInfoJob, ItemJob } from '@/lib/services/jobs';
import JobInfo from '@/components/blocks/jobs/JobInfo';


const JobsBlock = ({}) => {
	const [jobBrewer, setJobBrewer] = useState<ItemJob>();
	const [jobBuilder, setJobBuilder] = useState<ItemJob>();
	const [jobCrafter, setJobCrafter] = useState<ItemJob>();
	const [jobDigger, setJobDigger] = useState<ItemJob>();
	const [jobEnchanter, setJobEnchanter] = useState<ItemJob>();
	const [jobExplorer, setJobExplorer] = useState<ItemJob>();
	const [jobFarmer, setJobFarmer] = useState<ItemJob>();
	const [jobFisherman, setJobFisherman] = useState<ItemJob>();
	const [jobHunter, setJobHunter] = useState<ItemJob>();
	const [jobMiner, setJobMiner] = useState<ItemJob>();
	const [jobWeaponsmith, setJobWeaponsmith] = useState<ItemJob>();
	const [jobWoodcutter, setJobWoodcutter] = useState<ItemJob>();

	async function handleGetJob(job: string, state, minimal = false) {
		const data = await getInfoJob(job, 20, minimal);
		state(data);
	}

	useEffect(() => {
		handleGetJob('brewer', setJobBrewer, true);
		handleGetJob('builder', setJobBuilder, true);
		handleGetJob('crafter', setJobCrafter, true);
		handleGetJob('digger', setJobDigger, true);
		handleGetJob('enchanter', setJobEnchanter, true);
		handleGetJob('explorer', setJobExplorer, true);
		handleGetJob('farmer', setJobFarmer, true);
		handleGetJob('fisherman', setJobFisherman, true);
		handleGetJob('hunter', setJobHunter, true);
		handleGetJob('miner', setJobMiner, true);
		handleGetJob('weaponsmith', setJobWeaponsmith, true);
		handleGetJob('woodcutter', setJobWoodcutter, true);
	}, []);

	return (
		<>
			<div className='py-12 md:py-24'>
				<div
					className='max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4'>
					<div className='flex justify-between items-baseline'>
						<h1 className='text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8'>Jobs </h1><a
						href='https://www.spigotmc.org/resources/jobs-reborn.4216/'><span
						className='text-gray-400 text-sm'>Jobs Reborn</span></a>
					</div>
					<div className='flex flex-col gap-6'>
						<div onClick={() => handleGetJob('brewer', setJobBrewer)}>
							<JobInfo {...jobBrewer} />
						</div>
						<div onClick={() => handleGetJob('builder', setJobBuilder)}>
							<JobInfo {...jobBuilder} />
						</div>
						<div onClick={() => handleGetJob('crafter', setJobCrafter)}>
							<JobInfo {...jobCrafter} />
						</div>
						<div onClick={() => handleGetJob('digger', setJobDigger)}>
							<JobInfo {...jobDigger} />
						</div>
						<div onClick={() => handleGetJob('enchanter', setJobEnchanter)}>
							<JobInfo {...jobEnchanter} />
						</div>
						<div onClick={() => handleGetJob('explorer', setJobExplorer)}>
							<JobInfo {...jobExplorer} />
						</div>
						<div onClick={() => handleGetJob('farmer', setJobFarmer)}>
							<JobInfo {...jobFarmer} />
						</div>
						<div onClick={() => handleGetJob('fisherman', setJobFisherman)}>
							<JobInfo {...jobFisherman} />
						</div>
						<div onClick={() => handleGetJob('hunter', setJobHunter)}>
							<JobInfo {...jobHunter} />
						</div>
						<div onClick={() => handleGetJob('miner', setJobMiner)}>
							<JobInfo {...jobMiner} />
						</div>
						<div onClick={() => handleGetJob('weaponsmith', setJobWeaponsmith)}>
							<JobInfo {...jobWeaponsmith} />
						</div>
						<div onClick={() => handleGetJob('woodcutter', setJobWoodcutter)}>
							<JobInfo {...jobWoodcutter} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default JobsBlock;