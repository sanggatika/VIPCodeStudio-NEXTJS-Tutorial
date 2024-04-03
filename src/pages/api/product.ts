// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData } from '@/libs/firebase/service';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: boolean;
    status_code: number;
    // data: {
    //     id: number,
    //     name: string,
    //     price: number,
    //     size: string
    // }[];

    data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // const data = [
    //     {
    //         id:1,
    //         name: 'Baju Baru',
    //         price: 250000,
    //         size: 'XL',
    //     },
    //     {
    //         id:2,
    //         name: 'Baju Lama',
    //         price: 100000,
    //         size: 'L',
    //     }
    // ];

    const data = await retrieveData("products");

    res.status(200).json({ status: true, status_code:200, data })
}
