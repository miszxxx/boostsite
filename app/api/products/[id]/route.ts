import { NextRequest, NextResponse } from 'next/server';
import { sellAppAPI } from '@/lib/sellapp';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;

    const result = await sellAppAPI.getProduct(productId);

    return NextResponse.json(result.data, {
      headers: {
        'Cache-Control': result.cached 
          ? 'public, s-maxage=3600, stale-while-revalidate=86400'
          : 'public, s-maxage=300, stale-while-revalidate=600',
        'X-Data-Source': result.cached ? 'cache' : 'api',
      },
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}