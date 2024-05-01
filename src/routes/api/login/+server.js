
import { PrismaClient } from '@prisma/client';
import { env } from '$env/dynamic/private';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';




export async function POST({ request, cookies }) {
	const body = await request.json();
	const { username, password } = body;
	const prisma = new PrismaClient({ log: ['query'] });
	const user = await prisma.user.findFirst({ where: { email: username } });
	if (!user) {
		return new Response('Unauthorized', { status: 401 });
	}
	const match = bcrypt.compareSync(password, user.hashPass);
	if (match) {
		const token = jwt.sign({ id: user.userId, email: user.email }, env.JWT_SECRET);
		cookies.set('token', token, { httpOnly: true, path: '/' }); // cookies
		return new Response('Logged in', { status: 200 });
	} else {
		return new Response('Unauthorized', { status: 401 });
	}
}
