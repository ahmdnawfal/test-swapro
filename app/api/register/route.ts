import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req: Request) {
  const { name, email, phone, password } = await req.json();

  const data = {
    name,
    email,
    phone,
    password,
  };

  const existingEmail = await prisma.user.findUnique({ where: { email } });

  if (existingEmail) {
    return NextResponse.json(
      { message: 'Email already exist' },
      {
        status: 404,
      }
    );
  }

  try {
    await prisma.user.create({ data });
    return NextResponse.json({ message: 'SUCCESS' }, { status: 201 });
  } catch (error) {
    return error;
  }
}
