import { useContext } from 'react';
import ServerContext from '@/components/context/ServerContext';
import { copyToClipBoard } from '@/utils';
import Skeleton from 'react-loading-skeleton';

const HeroBlock = ({}) => {
	const { loading, version, plugins, ip } = useContext(ServerContext);

	return (
		<>
			<div className='py-12 md:py-24 bg-gray-100'>
				<div
					className='max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 grid md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20'>
					<div className='order-2 md:order-1 col-span-3 self-center'>
						<h1 className='text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8'>Hault Craft
							Club</h1>
						{/*<p className='text-lg xl:text-xl text-gray-600 mb-4'>Survival Hard</p>*/}
						{
							loading ?
								(
									<div className='mb-4'>
										<Skeleton count={1} />
										<Skeleton count={1} />
										<Skeleton count={1} />
										<Skeleton count={1} />
									</div>
								) :
								(
									<div className='flex flex-wrap mb-4'>
										{
											!!plugins && plugins.map((item, index) => (
												<span key={item + index} className='mr-4 text-base'>{item}</span>
											))
										}
									</div>
								)
						}


						{/*<div className='flex space-x-4 mb-6'>*/}
						{/*	<input type='text' placeholder='enter your email...'*/}
						{/*				 className='flex-1 py-4 px-4 border border-gray-200 rounded-lg leading-none focus:outline-none' />*/}
						{/*	<button*/}
						{/*		className='focus:outline-none inline-block bg-gradient-to-br from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-700 font-semibold rounded-lg py-2 px-5  text-white '>Get*/}
						{/*		started*/}
						{/*	</button>*/}
						{/*</div>*/}
						<p className='text-lg text-gray-600 mb-4'>IP: <span
							className='text-amber-400 cursor-pointer hover:text-amber-600 transition duration-200 ease-in'
							onClick={() => copyToClipBoard(ip)}>{ip}</span>
						</p>

						<p className='text-gray-500 text-sm'>Versão {version} do Minecraft.</p>
					</div>
					<div className='hidden md:block md:order-2 col-span-1 xl:col-span-1'>
						<img src='/img/skeleton.png' className='h-80 min-w-[180px]' alt='esquelo minecraft' />
					</div>
				</div>
			</div>

		</>
	);
};
export default HeroBlock;