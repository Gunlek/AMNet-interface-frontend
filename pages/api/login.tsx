import axios from 'axios';
import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'

const logIn = (req: NextApiRequest, res: NextApiResponse) => {
    return new Promise<void>(async () => {
        try {
            const { access_token } = await (await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth`, req.body)).data;
            const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== "development" });

            cookies.set('access_token', access_token, {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                maxAge: req.body.checked ? 1000 * 3600 * 24 * 365 * 10 : 1000 * 3600,
                secure: process.env.NODE_ENV !== "development"
            });

            res.status(200).json({ loggedIn: true })
        } catch (err) {
            res.status(401).json({ loggedIn: false })
        }
    })
};

export default logIn