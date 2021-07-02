import { getHeadURL } from '@/utils';

type TableColors = {
	textColor: string;
	topColor: string;
}

type ListPlayer = {
	username: string
	level: number
}

type LeaderboardProps = {
	skill: string;
	list: ListPlayer[];
	color: TableColors
}


const LeaderBoard = ({
											 skill,
											 list,
											 color,
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
							<td className={color.textColor + ' text-center px-2'}>{item.level}</td>
						</tr>
					))
				}
				</tbody>

			</table>
		</>
	);
};
export default LeaderBoard;