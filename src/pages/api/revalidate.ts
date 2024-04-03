// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  revalidate: boolean;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // res.status(200).json({ name: 'John Doe', age: 30 })
    if(req.query.token != process.env.REVALIDATE_TOKEN)
    {
        return res.status(401).json({ revalidate: false, message: 'Unauthorized' });
    }

    if(req.query.data == 'product')
    {
        try {
            await res.revalidate('/product/static-incremental');
            return res.json({ revalidate: true });
        } catch (err) {
            // If there was an error, Next.js will continue
            // to show the last successfully generated page
            return res.status(500).send({ revalidate: false });
        }
    }

    return res.json({ revalidate: false, message: 'data not found' });        
}
