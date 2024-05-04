import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

export async function POST({ request, cookies }) {
    const body = await request.json();
    const { username, password } = body;
    const prisma = new PrismaClient();
    const user = await prisma.user.findFirst({ where: { email: username } });
    console.log(user);
    const match = bcrypt.compareSync(password, user.hashPass);
    if (match) {
        const token = jwt.sign({ id: user.id, email: user.email}, "s3cretStuff");
        cookies.set('userId', user.id, { httpOnly: true, path: '/' });
        cookies.set('token', token, { httpOnly: true, path: '/' });
        return new Response('OK', { status: 200 });
    } else {
        return new Response('Unauthorized', { status: 401 });
    }
}

export async function DELETE({ cookies }) {
    // Clear cookies
    cookies.set('userId', '', { httpOnly: true, path: '/', expires: new Date(0) });
    cookies.set('token', '', { httpOnly: true, path: '/', expires: new Date(0) });
    return new Response('Logged out successfully', { status: 200 });
}
