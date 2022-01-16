// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { findDataUsingKey, insertToDB } from '../../src/utils/Mongo';

type Data = {
  res: string;
  status: number;
};

// http://localhost:3000/api/ffff return {"res":"https://www.google.com/"} with status 200
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let query = req.query;
  let id = query.id;
  let link = await findDataUsingKey(id);
  if (link) {
    res.status(200).json({ status: 200, res: link });
  } else {
    res.status(200).json({ status: 404, res: 'Not found' });
  }
}
