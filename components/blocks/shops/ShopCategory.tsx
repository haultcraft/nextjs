import { ShopCategoryProps } from '@/lib/services/shops';
import Skeleton from 'react-loading-skeleton';

const ShopCategory = ({ title, list, field = 'material' }: ShopCategoryProps) => {
	return (
		<>
			<table className='table-auto w-full'>
				<thead>
				<tr>
					<th className=' uppercase' colSpan={3}>{title}</th>
				</tr>
				</thead>
				<tbody>
				{
					list.length < 1
						? (
							Array.from({ length: 20 }, (x, i) => i).map((item, index) => (
									<tr key={index} className='border-b'>
										<td className='text-center text-gray-300 px-2 w-[4rem]'>{index + 1}</td>
										<td className='px-2 flex py-2 capitalize flex flex-col'>
											<p className='capitalize'><Skeleton count={1} /></p>
											<div className='text-xs flex justify-between'>
												<Skeleton count={1} />
											</div>
										</td>
									</tr>
								),
							)
						)
						: (
							list.map((item, index) => (
								<tr key={item[field] + index} className='border-b'>
									<td className='text-center text-gray-300 px-2 w-[4rem]'>{index + 1}</td>
									<td className='px-2 flex py-2 capitalize flex flex-col'>
										<p className='capitalize'>{
											typeof item[field] == 'object'
												? item[field].map(value => value.replace(new RegExp('\_|\:', 'g'), ' ').toLowerCase())
												: !!item[field]
												? item[field].replace(new RegExp('\_|\:', 'g'), ' ').toLowerCase()
												: item[field]
										}</p>
										<div className='text-xs flex justify-between'>
											<p><span className='text-green-600'>buy:</span> {item.buy}</p>
											<p><span className='text-amber-600'>sell:</span> {item.sell}</p>
										</div>
									</td>
								</tr>
							))
						)
				}
				</tbody>

			</table>
		</>
	);
};
export default ShopCategory;