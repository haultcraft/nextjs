import { ItemJob } from '@/lib/services/jobs';
import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeaderBoard from '@/components/blocks/leaderboards/LeaderBoard';
import { moneyFormatter } from '@/utils';

const JobInfo = ({ name, description, rewards, toplist, color }: ItemJob) => {
	return (
		<>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button
							className={`flex items-center justify-between w-full py-2 text-sm font-medium text-left border-b-2 outline-none focus:outline-none`}>
							<div>
								<h3 className='text-xl leading-6 font-medium capitalize'>
									{name}
								</h3>
								<p className='mt-1 max-w-2xl text-sm text-gray-500'>
									{description}
								</p>
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
							<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 md:mt-8'>
								<div>
									<LeaderBoard
										skill={name}
										list={toplist || []}
										field='level'
									/>
								</div>

								<div>
									{
										!!rewards &&
										Object.keys(rewards)
											.map(key =>
												(
													<div className='mb-8' key={key}>
														<table className='table-auto w-full'>
															<thead>
															<tr>
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
																				<span
																					className='text-gray-400 text-xs'>C$</span>&nbsp;{moneyFormatter(rewards[key][item].income)}
																			</td>
																			<td className='text-right w-16'>
																				{rewards[key][item].points}&nbsp;<span
																				className='text-gray-400 text-xs'>PTS</span>
																			</td>
																			<td className='text-right w-16'>
																				{rewards[key][item].experience}&nbsp;<span
																				className='text-gray-400 text-xs'>XP</span>
																			</td>
																		</tr>
																	))
															}
															</tbody>
														</table>
													</div>


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