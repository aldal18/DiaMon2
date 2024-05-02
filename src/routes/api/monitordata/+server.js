import { PrismaClient } from '@prisma/client'
export async function POST({ request, cookies }) {
    const body = await request.json();
    const userId = await cookies.get('userId');
    const prisma = new PrismaClient();
    const res = await prisma.monitorData.create({
        data: {
            value: body.value,
            userId: userId
        }
    });
    console.log(res);
    return new Response('Created', { status: 201 });
}

export async function GET({ request, cookies }) {
    const userId = await cookies.get('userId');
    const prisma = new PrismaClient();
    const res = await prisma.monitorData.findMany({
        where: {
            userId: userId
        }
    });
    console.log(res);
    return new Response ('Data hentet', res, { status: 201});
}