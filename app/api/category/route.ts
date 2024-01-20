import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await prisma.category.findMany({});
    return NextResponse.json({ message: 'SUCCESS', data: response });
  } catch (error) {
    return NextResponse.json({ message: 'error not found' });
  }
}
