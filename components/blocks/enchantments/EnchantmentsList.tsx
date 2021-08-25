import { Enchantment } from '@/lib/services/enchantments';
import Skeleton from 'react-loading-skeleton';

type EnchantmentListProps = {
	list: Enchantment[];
	field: string;
	loading: boolean;
	type?: boolean;
}

const EnchantmentsList = ({ list, field, loading, type }: EnchantmentListProps) => {
	return (
		<>
			<div className='w-full overflow-x-auto md:overflow-hidden'>
				<table className='table-auto w-full space-x-1 gap-4'>
					<thead>
					<tr className='text-left text-gray-400 '>
						<th className='md:w-[4rem] text-center'>#</th>
						<th className='w-[12rem] px-2'>Enchantment</th>
						<th className='min-w-[20rem] px-2'>Description</th>
						{
							!!type
							&& (
								<th className='md:w-[10rem] px-2'>Type</th>
							)
						}
						<th className='md:w-[10rem] px-2'>Applies To</th>
						<th className='md:w-[6rem] px-2'>Max Level</th>
					</tr>
					</thead>
					{
						loading ?
							(
								<tbody>
								{
									Array.from({ length: 20 }, (x, i) => i).map((item, index) => (
										<tr key={item} className='border-b'>
											<td className='text-center text-gray-300 px-2'>{index + 1}</td>
											<td className='py-2 capitalize px-2'>
												<Skeleton count={1} />
											</td>
											<td className='px-2'>
												<Skeleton count={1} />
											</td>
											{
												!!type
												&& (
													<td className='capitalize px-2'>
														<Skeleton count={1} />
													</td>
												)
											}
											<td className='text-left px-2'>
												<Skeleton count={1} />
											</td>
											<td className='text-center  px-2'>
												<Skeleton count={1} />
											</td>
										</tr>
									))
								}
								</tbody>
							)
							:
							(
								<tbody>
								{
									list.map((item, index) => (
										<tr key={item['name']} className='border-b'>
											<td className='text-center text-gray-300 px-2'>{index + 1}</td>
											<td className='py-2 capitalize px-2'>
												{item[field]}
											</td>
											<td className='px-2'>
												{item['description']}
											</td>
											{
												!!type
												&& (
													<td className='capitalize px-2'>
														{item['type']}
													</td>
												)
											}
											<td className='text-left px-2'>
												{item['applies_to'].join(', ')}
											</td>
											<td className='text-center  px-2'>
												{item['max_level']}
											</td>
										</tr>
									))
								}
								</tbody>
							)
					}
				</table>
			</div>
		</>
	);
};
export default EnchantmentsList;