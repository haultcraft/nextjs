import { NextApiHandler } from 'next';
import { query } from '@/lib/db';

const handler: NextApiHandler = async (_, res) => {
	try {
		const results = await query(`
      SELECT mcmmo_users.user, mcmmo_skills.total
      FROM mcmmo_users 
      JOIN mcmmo_skills
      ON mcmmo_skills.user_id = mcmmo_users.id;
  `);

		return res.json(results);
	} catch (e) {
		res.status(500).json({ message: e.message });
	}
};

export default handler;
