import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

	const router = useRouter();

	return (
		<>
			<header className='max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 py-4 lg:py-6 flex justify-between'>
				<div className='w-full md:w-1/3'>
					<Link href='/'>
						<a className='text-2xl font-bold font-minecrafter-alt tracking-wider'>
							Comp <span className='text-amber-400'>Craft</span>
						</a>
					</Link>

				</div>

				<label htmlFor='nav-mobile' className='md:hidden'><FontAwesomeIcon icon={['fas', 'bars']}
																																					 className='text-2xl' /></label>
				<input
					type='checkbox'
					id='nav-mobile'
					className='hidden' />
				<nav
					className='flex absolute top-[-200%] text-lg flex-col left-0 px-6 py-2 bg-white z-10 w-screen nav-collapsable transition-all ease-in duration-200 md:static  md:flex-row md:gap-4 md:justify-end md:p-0 md:m-0 md:w-full'>
					{
						links.map(item => (
							<Link key={item.url} href={item.url}>
								<a
									className={(router.pathname === item.url ? 'font-semibold' : 'text-gray-500') + ' flex gap-2 items-center hover:text-gray-700 mt-2 md:mt-0 mt-2 md:mt-0'}>
									{item.label}
								</a>
							</Link>
						))
					}
					<a href='https://discord.gg/ECkXBMZQ6T' target='_blank'
						 className='text-gray-500 flex items-center hover:text-gray-700 mt-2 md:mt-0' title='Download Minecraf'>TLauncher</a>					<a href='https://discord.gg/ECkXBMZQ6T' target='_blank'
						 className='text-gray-500 flex items-center hover:text-gray-700 mt-2 md:mt-0'>Discord</a>
					<a target='_blank'
						 style={{
							 background: '#434d58',
							 textDecoration: 'none',
							 fontFamily: 'Verdana,sans-serif',
							 fontSize: '16px',
							 textShadow: '0 1px rgba(0, 0, 0, 0.3)',
						 }}
						 className='text-white flex items-center hover:text-gray-200 items-center justify-center shadow px-3 py-1 rounded mt-2 md:mt-0'
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