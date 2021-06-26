import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
	try {
		const filename = path.resolve(process.env.ESSENTIALS_FOLDER, 'userdata', String(req.query.uuid) + '.yml');
		const { lastAccountName: username, money, timestamps, afk } = yaml.load(fs.readFileSync(filename));
		return res.json({
			username,
			lastLogin: timestamps.login,
			isAFK: afk,
			money
		});
	} catch (e) {
		res.status(500).json({ message: e.message });
	}
};

export default handler;