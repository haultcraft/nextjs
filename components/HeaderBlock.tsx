import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderBlock = () => {
	const links = [
		{ label: 'Home', url: '/' },
		{ label: 'Server', url: '/server' },
		{ label: 'Gallery', url: '/gallery' },
		{ label: 'Stats', url: '/stats' },
		{ label: 'Shop', url: '/shop' },
		{ label: 'Download', url: '/download' },
		{ label: 'Discord', url: '/discord' },
	];

	const router = useRouter();

	return (
		<>
			<header className='max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 py-4 lg:py-6 flex justify-between'>
				<div className='w-full'>
					<Link href='/'>
						<a className='text-2xl font-bold'>
							Comp Craft
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
					className='flex absolute top-[-200%] text-lg gap-2 flex-col left-0 px-6 py-2 bg-white z-10 w-screen nav-collapsable transition-all ease-in duration-200 md:static  md:flex-row md:gap-4 md:justify-end md:p-0 md:m-0 md:w-full'>
					{
						links.map(item => (
							<Link key={item.url} href={item.url}>
								<a
									className={(router.pathname === item.url ? 'font-semibold' : 'text-gray-500') + ' flex gap-2 items-center hover:text-gray-700'}>
									{item.label}
								</a>
							</Link>
						))
					}
				</nav>
			</header>

		</>
	);
};

export default HeaderBlock;