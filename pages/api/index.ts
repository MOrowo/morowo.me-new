import type { NextApiRequest, NextApiResponse } from 'next';
import { findDataUsingKey, insertToDB } from '../../src/utils/Mongo';
import { get_a_random_string } from '../../src/utils/RandomUtil';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'POST') {
    //res should be {status: 200, link=shortened_url}
    // res.status(200).json({ status: 200, link: req.body.url})
    // res.status(200).json({ status: 200, link: "https://youtube.com/"})
    let r = get_a_random_string(5);
    let data = {
      name: r,
      link: req.body.url,
      new_link: 'http://localhost:3000/shortener/' + r + '/',
    };
    insertToDB(data);
    res.status(200).send(data);
  } else {
    res.status(400).send('METHOD GET NOT ALLOWED');
  }
}
