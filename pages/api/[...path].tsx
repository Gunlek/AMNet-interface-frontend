import httpProxy from 'http-proxy'
import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Readable } from 'node:stream';
const API_URL = process.env.NEXT_PUBLIC_API_HOST
const proxy = httpProxy.createProxyServer()

export const config = {
    api: {
        bodyParser: false
    }
}

async function buffer(readable: Readable) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    return new Promise<void>(async (resolve, reject) => {
        const url = new URL(req.url, process.env.NEXT_PUBLIC_API_HOST);
        const pathname = url.pathname
        const isLogin = pathname === '/api/auth'
        const cookies = new Cookies(req, res);
        const access_token = cookies.get('access_token');
        let checked = null;
        req.url = req.url.replace(/^\/api/, process.env.NEXT_PUBLIC_API_HOST);
        req.headers.cookie = '';

        if (access_token) {
            req.headers['Authorization'] = `Bearer ${access_token}`
        };

        if (isLogin) {
            proxy.once('proxyRes', interceptLoginResponse);
        };

        proxy.once('error', reject);

        proxy.web(req, res, {
            target: API_URL,
            autoRewrite: false,
            selfHandleResponse: isLogin
        });

        if(isLogin) checked = JSON.parse((await buffer(req)).toString('utf8')).checked;
   
        function interceptLoginResponse(proxyRes: any, req: NextApiRequest, res: NextApiResponse) {
            let body = [];
            proxyRes.on('data', (chunk) => {
                body.push(chunk);
            });

            proxyRes.on('end', () => {
                try {
                    const { access_token } = JSON.parse(Buffer.concat(body).toString());
                    const cookies = new Cookies(req, res);

                    cookies.set('access_token', access_token, {
                        httpOnly: true,
                        sameSite: "strict",
                        path: "/",
                        secure: process.env.NODE_ENV !== 'development',
                        maxAge: checked ? 1000 * 3600 * 24 * 365 * 10 : 1000 * 3600
                    });

                    res.status(200).json({ loggedIn: true })
                    resolve()
                } catch (err) {
                    reject(err)
                }
            })
        }
    }
)
}