// import { serialize } from 'cookie';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { CSRF } from 'csrf';

// const csrf = new CSRF();

// export default function handler(req, res) {
//   const token = csrf.create();
//   const cookie = serialize('csrfToken', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict', path: '/' });
//   res.setHeader('Set-Cookie', cookie);
//   res.status(200).json({ csrfToken: token });
// }
