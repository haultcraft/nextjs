// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiHandler } from 'next';

const mcutil = require('minecraft-server-util');
const { API_HOST } = process.env;


const hander: NextApiHandler = async (req, res) => {
	try {
		const status = await mcutil.status(API_HOST); // port is default 25565
		res.status(200).json(status);
	} catch (e) {
		res.status(200).json({ status: 'offline' });
	}
};

export default hander;
