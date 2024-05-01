import { PrismaClient } from '@prisma/client'
export async function POST({ request, cookies }) {
    const body = await request.json();
    const dough = await cookies.json();
    const prisma = new PrismaClient();
    const res = await prisma.monitorData.create({
        data: {
            value: body.value,
            userId: dough.userId
        }
    });
    console.log(res);
    return new Response('Created', { status: 201 });
}

export async function GET({ request, cookies }) {
    const dough = await cookies.json();
    const prisma = new PrismaClient();
    const res = await prisma.monitorData.findMany({
        where: {
            userId: dough.userId
        }
    });
    console.log(res);
    return res
}