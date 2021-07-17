import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const HeaderBlock = () => {
	const links = [
		{ label: 'Home', url: '/' },
		{ label: 'Shop', url: '/shop' },
		{ label: 'Jobs', url: '/jobs' },
		{ label: 'Enchantments', url: '/enchantments' },
		// { label: 'Map', url: '/map' },
		// { label: 'Download', url: '/download' },
		// { label: 'Discord', url: '/discord' },
		// { label: 'Donate', url: '/donate' },
	];

	const [navOpen, isNavOpen] = useState<boolean>();

	const router = useRouter();

	return (
		<>
			<header className='max-w-screen-xl h-20 mx-auto px-6 lg:px-8 xl:px-4 items-center flex justify-between'>
				<div className='flex w-full lg:w-[180px] justify-between items-center'>
					<Link href='/'>
						<a className='text-2xl font-bold font-minecrafter-alt tracking-wider min-w-[180px]'>
							Comp <span className='text-amber-400'>Craft</span>
						</a>
					</Link>
					<span onClick={() => isNavOpen(!navOpen)} className='lg:hidden'>
					<FontAwesomeIcon icon={['fas', 'bars']} className='text-2xl' />
				</span>
				</div>


				<nav
					id='global-nav'
					className='flex absolute top-[-200%] text-base flex-col left-0 px-6 bg-white z-10 w-screen transition-all ease-in duration-200 lg:static  lg:flex-row lg:gap-4 lg:justify-end lg:p-0 lg:m-0 lg:w-full lg:items-center'
					aria-expanded={navOpen ? 'true' : 'false'}
				>
					{
						links.map(item => (
							<Link key={item.url} href={item.url}>
								<a
									onClick={() => isNavOpen(!navOpen)}
									className={(router.pathname === item.url ? 'font-semibold lg:after:border-b-2 lg:after:border-amber-400 relative lg:after:absolute lg:after:bottom-[-2px] lg:after:left-0 lg:after:w-full' : 'text-gray-500') + ' flex gap-2 items-center hover:text-gray-700 mt-2 lg:mt-0 mt-2 lg:mt-0 '}>
									{item.label}
								</a>
							</Link>
						))
					}
					<a href='https://tlauncher.org/' target='_blank'
						 className='text-gray-500 flex items-center hover:text-gray-700 mt-2 lg:mt-0'
						 title='Download Minecraf'>TLauncher</a>
					<a href='https://discord.gg/ECkXBMZQ6T' target='_blank'
						 className='text-gray-500 flex items-center hover:text-gray-700 mt-2 lg:mt-0'>Discord</a>
					<a target='_blank'
						 className='text-white bg-gray-700 flex items-center hover:text-gray-200 items-center justify-center shadow px-3 py-1 rounded mt-2 lg:mt-0'
						 href='https://donorbox.org/comp-craft-donation'>
						<img src='https://donorbox.org/images/red_logo.png' alt='' className='object-contain mr-2' />
						<span>Donate</span>
					</a>
				</nav>
			</header>

		</>
	);
};

export default HeaderBlock;