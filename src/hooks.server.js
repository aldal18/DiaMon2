import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';


export async function handle({ event, resolve }) {
    const { request, cookies } = event;
	const { pathname } = new URL(request.url);
    console.log(event.url.pathname);
    console.log(event.cookies.get('token'));

    if (['/', '/api/login', '/login', '/signup'].includes(pathname)) {
		return await resolve(event);
	} else {
		if (!cookies.get('token')) {
			return new Response('Unauthorized', { status: 401 });
		} else {
			try {
				const token = jwt.verify(cookies.get('token'), env.JWT_SECRET);
				event.request.user = token;
			} catch (e) {
				console.log(e);
				return new Response('Unauthorized', { status: 401 });
			}
		}

		return await resolve(event);
	}
}
