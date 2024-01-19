import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const existingEmail = await prisma.user.findFirst({ where: { email } });
    const passwordMatch = (await existingEmail?.password) === password;

    if (!existingEmail) {
      return NextResponse.json(
        { message: 'Email not found' },
        {
          status: 404,
        }
      );
    }

    if (!passwordMatch) {
      return NextResponse.json(
        { message: 'Password not valid' },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      { message: 'SUCCESS', ...existingEmail },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
