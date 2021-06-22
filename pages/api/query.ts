// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiHandler} from "next";

const mcutil = require('minecraft-server-util')


const hander: NextApiHandler = async (req, res) => {
  const status = await mcutil.queryFull('ninemoe5400') // port is default 25565

  res.status(200).json(status)
}

export default hander
