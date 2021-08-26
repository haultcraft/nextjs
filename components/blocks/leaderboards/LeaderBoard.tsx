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
	color?: TableProps;
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
			<table className='table-auto w-full'>
				<thead className={color.topColor + ' '}>
				<tr>
					<th className={color.textColor + ' uppercase text-center'} colSpan={3}>TOP {skill}</th>
				</tr>
				</thead>
				<tbody>
				{
					list.length > 0
						? list.map((item, index) => (
							<tr key={item.username + index} className='border-b'>
								<td className='text-center text-gray-300 w-8'>{index + 1}</td>
								<td className='min-w-[24] px-2 flex py-2 items-center'><img src={getHeadURL(item.username)} alt=''
																															 className='w-8 h-8 mr-2' />{item.username}</td>
								<td className={color.textColor + ' text-right px-2'}><span
									className='text-gray-400 text-xs'>{color.textPrefix}&nbsp;</span>{item[field]}</td>
							</tr>
						))
						: (
							<tr>
								<td className='text-center py-4' colSpan={3}>No players with this job</td>
							</tr>
						)
				}
				</tbody>

			</table>
		</>
	);
};
export default LeaderBoard;