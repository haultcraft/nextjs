import { getHeadURL } from '@/utils';

type TableProps = {
	textColor: string;
	topColor: string;
	textPrefix?: string
}

type ListPlayer = {
	username: string
	level: number
}

type LeaderboardProps = {
	skill: string;
	list: ListPlayer[];
	color: TableProps;
	field: string
}


const LeaderBoard = ({
											 skill,
											 list,
											 color,
											 field,
										 }: LeaderboardProps) => {
	return (
		<>
			<table className='table-fixed'>
				<thead className={color.topColor + ' '}>
				<tr>
					<th className={color.textColor + ' uppercase'} colSpan={3}>TOP {skill}</th>
				</tr>
				</thead>
				<tbody>
				{
					list.map((item, index) => (
						<tr key={item.username} className='border-b'>
							<td className='text-center text-gray-300 px-2'>{index + 1}</td>
							<td className='w-48 px-2 flex py-2'><img src={getHeadURL(item.username)} alt=''
																											 className='w-8 h-8 mr-2' />{item.username}</td>
							<td className={color.textColor + ' text-right px-2'}>{color.textPrefix}{item[field]}</td>
						</tr>
					))
				}
				</tbody>

			</table>
		</>
	);
};
export default LeaderBoard;