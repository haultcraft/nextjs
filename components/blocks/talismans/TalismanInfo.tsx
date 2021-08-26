import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Talisman } from '@/lib/services/talismans';

type TalismanInfoProps = {
	title: string
	talismans: Talisman[]
}

const TalismanInfo = ({ title, talismans }: TalismanInfoProps) => {
	return (
		<>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={`flex items-center justify-between w-full py-2 text-sm font-medium text-left border-b-2 border-gray-200 outline-none focus:outline-none`}>
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
								className={`${
									open ? 'transform rotate-180' : ''
								} w-5 h-5 text-gray-500`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className='pt-4 pb-2'>
							{/*If you're unhappy with your purchase for any reason, email us*/}
							{/*within 90 days and we'll refund you in full, no questions asked.*/}
							{
								<div className='w-full overflow-x-auto md:overflow-hidden'>
									<table className='table-auto w-full space-x-1 gap-4'>
										<thead>
										<tr className='text-left text-gray-400 '>
											<td className='w-[4rem] text-center'>
												Level
											</td>
											<td className='w-[16rem] px-2'>
												Name
											</td>
											<td className='min-w-[20rem] px-2'>
												Description
											</td>
										</tr>

										</thead>
										<tbody>
										{
											!!talismans && talismans.map((item, index) => (
												<tr>
													<td className='text-center text-gray-300 px-2'>
														{item.level}
													</td>
													<td className='py-2 capitalize px-2'>
														{item.name}
													</td>
													<td className='px-2'>
														{item.description}
													</td>
												</tr>
											))
										}
										</tbody>
									</table>
								</div>
							}
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	);
};

export default TalismanInfo;