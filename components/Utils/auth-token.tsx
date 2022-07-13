import cookie from "cookie"
import type { NextApiRequest } from 'next'
import jwt_decode from "jwt-decode";

export default function getToken(req: NextApiRequest) {
  const access_token = cookie.parse(req ? req.headers.cookie || "" : document.cookie).access_token
  const userId = access_token? jwt_decode(access_token)['id'] : null;
  
  return { access_token, userId }
}