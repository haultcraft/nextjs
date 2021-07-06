import { ShopCategoryProps } from '@/lib/services/shops';

const ShopCategory = ({ title, list, field = 'material' }: ShopCategoryProps) => {
	return (
		<>
			<table className='table-fixed'>
				<thead>
				<tr>
					<th className=' uppercase' colSpan={3}>{title}</th>
				</tr>
				</thead>
				<tbody>
				{
					list.map((item, index) => (
						<tr key={item[field]} className='border-b'>
							<td className='text-center text-gray-300 px-2'>{index + 1}</td>
							<td className='px-2 flex py-2 capitalize flex flex-col'>
								{/*<picture>*/}
								{/*	<source srcSet={`/img/block/${item.material_img}.png, /img/block/${item.material_img}_side.png, /img/block/${item.material_img}_top.png`} />*/}
								{/*	<img src={`/img/block/${item.material_img}.png`} />*/}
								{/*</picture>*/}
								<p className='capitalize'>{
									typeof item[field] == 'object'
										? item[field].map(value => value.replace(new RegExp('\_|\:', 'g'), ' ').toLowerCase())
										: item[field]
								}</p>
								<div className='text-xs flex justify-between'>
									<p><span className='text-green-600'>buy:</span> {item.buy}</p>
									<p><span className='text-amber-600'>sell:</span> {item.sell}</p>
								</div>
							</td>
						</tr>
					))
				}
				</tbody>

			</table>
		</>
	);
};
export default ShopCategory;