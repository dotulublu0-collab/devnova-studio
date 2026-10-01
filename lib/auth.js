import jwt from 'jsonwebtoken';
export const COOKIE='devnova_admin';
export function verify(token){try{return jwt.verify(token,process.env.AUTH_SECRET)}catch{return null}}
export function sign(){return jwt.sign({role:'admin'},process.env.AUTH_SECRET,{expiresIn:'7d'})}
