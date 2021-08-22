import { ItemJob } from '@/lib/services/jobs';
import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeaderBoard from '@/components/LeaderBoard';
import { moneyFormatter } from '@/utils';

const JobInfo = ({ name, description, rewards, toplist, color }: ItemJob) => {
	return (
		<>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={`flex items-center justify-between w-full py-2 text-sm font-medium text-left border-b-2 border-${color}-200 outline-none focus:outline-none`}>
							<div>
								<h3 className='text-lg leading-6 font-medium capitalize'>
									{name}
								</h3>
								<p className='mt-1 max-w-2xl text-sm text-gray-500'>
									{description}
								</p>
							</div>

							<FontAwesomeIcon
								icon={['fas', 'chevron-down']}
								className={`${open ? 'transform rotate-180' : ''
									} w-5 h-5 text-${color}-500`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className='pt-4 pb-2 text-sm text-gray-500'>
							{/*If you're unhappy with your purchase for any reason, email us*/}
							{/*within 90 days and we'll refund you in full, no questions asked.*/}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 md:mt-8'>
								<LeaderBoard
									skill={name}
									list={toplist || []}
									color={{ textColor: `text-mine-${color}/60`, topColor: `bg-mine-${color}/10` }}
									field='level'
								/>
								<div className='grid grid-cols-1 gap-8'>
									{
										!!rewards &&
										Object.keys(rewards)
											.map(key =>
											(
												<table className='table-fixed'>
													<thead>
														<tr className={`bg-mine-${color}/20 text-${color}/60`}>
															<th className='text-center uppercase' colSpan={12}>
																{key}
															</th>
														</tr>
														<tr className='border-b bg-gray-100 text-right'>
															<td className='text-left px-2'>
																Stuff
															</td>
															<td>
																Income
															</td>
															<td>
																Points
															</td>
															<td>
																Exp
															</td>
														</tr>

													</thead>
													<tbody>
														{
															Object.keys(rewards[key])
																.map(item => (
																	<tr className='border-b'>
																		<td className='capitalize min-w-[24] px-2 flex py-2'>
																			{item.replace(new RegExp('\_', 'g'), ' ').toLowerCase()}
																		</td>
																		<td className='text-right w-16'>
																			<span className='text-gray-400 text-xs'>C$</span>&nbsp;{moneyFormatter(rewards[key][item].income)}
																		</td>
																		<td className='text-right w-16'>
																			{rewards[key][item].points}&nbsp;<span className='text-gray-400 text-xs'>PTS</span>
																		</td>
																		<td className='text-right w-16'>
																			{rewards[key][item].experience}&nbsp;<span className='text-gray-400 text-xs'>XP</span>
																		</td>
																	</tr>
																))
														}
													</tbody>
												</table>

											),
											)
									}
								</div>

							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	);
};
export default JobInfo;