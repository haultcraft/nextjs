import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

const HeaderBlock = () => {
	const wiki = true;

	const links = [
		{ label: 'Home', url: '/' },
		// { label: 'Map', url: '/map' },
		// { label: 'Download', url: '/download' },
		// { label: 'Discord', url: '/discord' },
		// { label: 'Donate', url: '/donate' },
	];

	const menuLinks = [
		// { label: 'Enchantments', url: '/enchantments' },
		{ label: 'Jobs', url: '/jobs' },
		{ label: 'Shop', url: '/shop' },
		{ label: 'Talismans', url: '/talismans' },
	];

	const [navOpen, isNavOpen] = useState<boolean>();

	const router = useRouter();

	return (
		<>
			<header className='max-w-screen-xl h-20 mx-auto px-6 md:px-8 xl:px-4 items-center flex justify-between z-0'>
				<div className='flex w-full md:w-[180px] justify-between items-center bg-white md:bg-transparent z-20 h-20'>
					<Link href='/'>
						<a className='text-2xl font-bold font-minecrafter-alt tracking-wider min-w-[180px]'>
							Comp <span className='text-amber-400'>Craft</span>
						</a>
					</Link>
					<span onClick={() => isNavOpen(!navOpen)} className='md:hidden'>
						<FontAwesomeIcon icon={['fas', 'bars']} className='text-2xl' />
					</span>
				</div>
				<nav
					id='global-nav'
					className='flex z-10 absolute top-[-100%] text-base flex-col left-0 px-6 pb-8 md:pb-0 bg-white z-10 w-screen transition-all ease-in duration-200 md:static  md:flex-row md:gap-4 md:justify-end md:p-0 md:m-0 md:w-full md:items-center'
					aria-expanded={navOpen ? 'true' : 'false'}
				>
					{
						links.map(item => (
							<Link key={item.url} href={item.url}>
								<a
									onClick={() => isNavOpen(!navOpen)}
									className={(router.pathname === item.url ? 'font-semibold md:after:border-b-2 md:after:border-amber-400 relative md:after:absolute md:after:bottom-[-2px] md:after:left-0 md:after:w-full' : 'text-gray-500') + ' flex gap-2 items-center hover:text-gray-700 mt-2 md:mt-0 mt-2 md:mt-0 '}>
									{item.label}
								</a>
							</Link>
						))
					}
					{
						wiki &&
						(<div className='relative'>
							<Menu>
								<Menu.Button
									className={(menuLinks.map(item => item.url).includes(router.pathname) ? 'font-semibold ' : 'text-gray-500') + ' flex gap-2 items-center hover:text-gray-700 mt-2 md:mt-0 mt-2 md:mt-0 font-medium'}>Wiki</Menu.Button>
								<Transition
									enter='transition-opacity duration-75'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='transition-opacity duration-150'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
								>
									<Menu.Items static id='menu-plugins'
										className='bg-white flex flex-col absolute top-10 -left-6 pb-4 px-6 md:px-4 md:-left-4 animation  w-screen md:w-max border-none'>
										{
											menuLinks.map((item, index) => (
												<Menu.Item key={item.label + index}>
													{({ active }) => (
														<Link href={item.url}>
															<a
																onClick={() => isNavOpen(false)}
																className={(index == 0 ? 'mt-0 ' : 'mt-4 ') + (router.pathname === item.url ? 'font-semibold md:after:border-b-2 md:after:border-amber-400 relative md:after:absolute md:after:bottom-[-2px] md:after:left-0 md:after:w-full' : 'text-gray-500') + ' flex gap-2 items-center hover:text-gray-700'}
															>
																{item.label}
															</a></Link>
													)}
												</Menu.Item>
											))
										}
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
						)
					}

					<a href='https://tlauncher.org/' target='_blank'
						className='text-gray-500 flex items-center hover:text-gray-700 mt-2 md:mt-0'
						title='Download Minecraf'>TLauncher</a>
					<a href='https://discord.gg/CQT3vhqQ9r' target='_blank'
						className='text-gray-500 flex items-center hover:text-gray-700 mt-2 md:mt-0'>Discord</a>
					<a target='_blank'
						className='text-white bg-gray-700 flex items-center hover:text-gray-200 items-center justify-center shadow px-3 py-1 rounded mt-2 md:mt-0'
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