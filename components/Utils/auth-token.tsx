import cookie from "cookie"
import type { NextApiRequest } from 'next'
import jwt_decode from "jwt-decode";
import * as requestIp from 'request-ip';

export default function getToken(req: NextApiRequest) {
  const access_token = cookie.parse(req ? req.headers.cookie || "" : document.cookie).access_token
  const userId = access_token ? jwt_decode(access_token)['id'] : null;
  const clientIp = requestIp.getClientIp(req).replace("::ffff:", "");
  const localNetwork = (/^10(\.[0-9]+){3}$/).test(clientIp);

  return { access_token, userId, localNetwork }
}