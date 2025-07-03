import { NextRequest, NextResponse } from 'next/server';
import { sellAppAPI } from '@/lib/sellapp';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const timestamp = searchParams.get('timestamp');

    const result = await sellAppAPI.getGroups(timestamp || undefined);

    return NextResponse.json(result.data, {
      headers: {
        'Cache-Control': result.cached 
          ? 'public, s-maxage=3600, stale-while-revalidate=86400' // Longer cache for cached data
          : 'public, s-maxage=300, stale-while-revalidate=600',   // Shorter cache for fresh data
        'X-Data-Source': result.cached ? 'cache' : 'api',
      },
    });
  } catch (error) {
    console.error('Error in products API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}