import httpProxy from 'http-proxy';
import Cookies from 'cookies';
import type { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.NEXT_PUBLIC_API_HOST;
const proxy = httpProxy.createProxyServer({
    target: API_URL,
    changeOrigin: true
});

export const config = {
    api: {
        bodyParser: false
    }
};

const path = (req: NextApiRequest, res: NextApiResponse) => {
    return new Promise<void>(async (resolve, reject) => {
        const cookies = new Cookies(req, res);
        const access_token = cookies.get('access_token');
        req.url = req.url.replace(/^\/api/, '');
        req.headers.cookie = '';

        if (access_token) {
            req.headers['Authorization'] = `Bearer ${access_token}`;
        };

        proxy.once('error', reject);

        proxy.web(req, res, {
            target: API_URL,
            autoRewrite: false,
            selfHandleResponse: false
        });
    })
};

export default path;