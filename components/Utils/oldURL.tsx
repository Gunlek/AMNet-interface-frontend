import type { NextApiRequest } from 'next'

export default function oldURL(req: NextApiRequest){
    const oldURL = req.headers.referer;
    return oldURL ? new URL(oldURL).pathname : ""
}