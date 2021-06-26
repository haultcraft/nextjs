// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiHandler } from 'next';

const mcutil = require('minecraft-server-util');
const { API_HOST } = process.env;

const hander: NextApiHandler = async (req, res) => {
	try {
		let queryStatus = await mcutil.queryFull(API_HOST); // port is default 25565

		queryStatus.plugins = queryStatus.plugins.map(item => item
			.replace(new RegExp('[0-9](.*)', 'g'), '')
			.replace(new RegExp('\-', 'g'), ' ')
			.trim(),
		);

		res.status(200).json(queryStatus);
	} catch (e) {
		res.status(200).json({ status: 'offline' });
	}
};

export default hander;
