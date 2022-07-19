import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
    return new Promise<void>(async () => {
        const cookies = new Cookies(req, res);
        const access_token = cookies.get('access_token');
        
        if (access_token) {
            cookies.set('access_token');
            res.status(200).json({ loggedOut: true });
        }
        else res.status(400).json({ loggedOut: false });
    })
}