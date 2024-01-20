import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const params = await req.nextUrl.search;
  const urlParams = new URLSearchParams(params);
  const categoryId = urlParams.get('categoryId');
  const sort = urlParams.get('sort') as 'asc' | 'desc' | undefined;

  if (!categoryId) {
    return NextResponse.json({ message: 'FAILED' });
  }

  try {
    let orderBy;

    if (sort) {
      orderBy = { price: sort };
    }

    const response = await prisma.villa.findMany({
      where: {
        categoryId: categoryId ?? '',
      },
      orderBy: orderBy,
    });
    return NextResponse.json({ message: 'SUCCESS', data: response });
  } catch (error) {
    return NextResponse.json({ message: 'Not found' });
  }
}
