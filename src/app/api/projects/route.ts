import { getServerSession } from 'next-auth';
import { authOptions } from '@/libs/auth';
import { NextResponse } from 'next/server';
import prisma from '@/libs/prisma';


export async function GET(req: Request, res: Response) {
    const session = await getServerSession(authOptions)

    if(!session) {
        return new NextResponse('Not Authenticated', { status: 500 });
    }

    try {
        const products = await prisma.project.findMany();

        return NextResponse.json(products, {
            status: 200,
            statusText: 'Successful',
        });
    } catch (error) {
        console.log(error);
        return new NextResponse('Cannot fetch data', { status: 500 });
    }
}

export async function POST(req: Request, res: Response) {
    const session = await getServerSession(authOptions)

    if(!session) {
        return new NextResponse('Not Authenticated', { status: 500 });
    }

    const userEmail = session.user?.email;

    if (!userEmail) {
        return new NextResponse('Not Authenticated', { status: 500 });
    }

    const user = await prisma.user.findUnique({where: {email: userEmail}});

    if (!user) return new NextResponse('Not Authenticated', { status: 500 });

    const { description, name, slug } = await req.json();

    if(!description || !name || !slug) {
        return new NextResponse('All fields are required to be filled', { status: 400 });
    }

    try {
        const createdProject = await prisma.project.create({
            data: {
                description,
                name,
                slug,
                userId: user.id,
            },
        });

        return NextResponse.json(createdProject, {
            status: 200,
            statusText: 'Project Created Successfully',
        });
    } catch (error) {
        console.log(error);
        return new NextResponse('Cannot create project', { status: 500 });
    }

}