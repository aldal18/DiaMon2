import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
export async function POST({ request, cookies }) {
    const body = await request.json();
    const prisma = new PrismaClient();
    const hash = await bcrypt.hashSync(body.pass);
    const res = await prisma.user.create({
        data: {
            email: body.email,
            name: body.name,
            hashPass: hash
        }
    });
    console.log(res);
    return new Response('Bruger oprettet', { status: 201 });
}
