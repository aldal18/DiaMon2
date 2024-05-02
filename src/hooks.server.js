import jwt from 'jsonwebtoken';

export async function handle({ event, resolve }) {
    const path = event.url.pathname;
    const cookie = event.cookies.get('token');
    if (['/', '/login', '/api/login'].includes(path)) {
        return await resolve(event);
    } else {
        if (cookie) {
            try {
                const decoded = jwt.verify(cookie, 's3cretStuff');
                event.request.user = decoded;
                return await resolve(event);
            } catch (e) {
                return new Response('Unauthorized: ' + e, 
{ status: 401 });
            }
        }
    }
    return new Response('Unauthorized', { status: 401 });
}
