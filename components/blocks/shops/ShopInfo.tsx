import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShopCategoryProps } from '@/lib/services/shops';
import { moneyFormatter } from '@/utils';

const JobInfo = ({ title, list, field = 'material' }: ShopCategoryProps) => {

	const getNameItem = function(item) {
		return typeof item[field] == 'object'
			? item[field].map(value => value.replace(new RegExp('\_|\:', 'g'), ' ').toLowerCase())
			: !!item[field]
				? item[field].replace(new RegExp('\_|\:', 'g'), ' ').toLowerCase()
				: item[field];
	};

	const getRawNameItem = function(item) {
		return item[field].toLowerCase();
	};

	return (
		<>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={`flex items-center justify-between w-full py-2 text-sm font-medium text-left border-b-2 outline-none focus:outline-none`}>
							<div>
								<h3 className='text-xl leading-6 font-medium capitalize'>
									{title}
								</h3>
								{/*<p className='mt-1 max-w-2xl text-sm text-gray-500'>*/}
								{/*	{description}*/}
								{/*</p>*/}
							</div>

							<FontAwesomeIcon
								icon={['fas', 'chevron-down']}
								className={`${open ? 'transform rotate-180' : ''
								} w-5 h-5`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className='pt-4 pb-2 text-sm text-gray-500'>
							{/*If you're unhappy with your purchase for any reason, email us*/}
							{/*within 90 days and we'll refund you in full, no questions asked.*/}
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
								{
									list.map((item, index) => (
										<div key={item[field] + index} className={'w-full flex flex-col justify-between shadow  border-edge-top border-gray-400 hover:shadow-lg transition-all duration-200 ease-linear'}>
											<div className={'flex items-center p-4'}>
												<img src={`/minecraft/${getRawNameItem(item)}.png`} className='h-10'
														 alt={`${getNameItem(item)} Item Icon`} />

												<p className='capitalize text-lg ml-2'>{
													getNameItem(item)
												}</p>
											</div>

											<div className='text-sm uppercase flex justify-between'>
												<p className='bg-green-200 w-full h-full px-4 py-2'><span className='text-green-900'>buy</span><br/> <span className='text-xs'>C$ </span>{moneyFormatter(item.buy)}</p>
												<p className='bg-amber-200 w-full h-full px-4 py-2'><span className='text-amber-900'>sell</span><br/> <span className='text-xs'>C$ </span>{moneyFormatter(item.sell)}</p>
											</div>
										</div>
									))
								}


							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	);
};
export default JobInfo;