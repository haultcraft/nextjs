import { NextApiHandler } from 'next';
import { query } from '@/lib/db';

const handler: NextApiHandler = async (req, res) => {
	try {
		const playerUUID: string = req.query.uuid ? String(req.query.uuid) : null;
		const playerUsername = !!playerUUID ? null : String(req.query.username);

		const results: object[] = await query(`
      select mcmmo_users.user, mcmmo_skills.*
			from mcmmo_users 
			join mcmmo_skills
			on mcmmo_skills.user_id = mcmmo_users.id
			where mcmmo_users.user = (?) or mcmmo_users.uuid = (?);
  `, [playerUsername, playerUUID]);

		if (results.length < 1) {
			return res.status(404).json({ message: 'No players found' });
		}

		return res.json(results);
	} catch (e) {
		res.status(500).json({ message: e.message });
	}
};

export default handler;
