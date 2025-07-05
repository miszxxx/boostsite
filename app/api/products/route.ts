import { NextRequest, NextResponse } from 'next/server';
import { sellAppAPI } from '@/lib/sellapp';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const timestamp = searchParams.get('timestamp');

    // Use the enhanced method to get groups with products
    const result = await sellAppAPI.getGroupsWithProducts();

    // Ensure we return an array
    const responseData = Array.isArray(result.data) ? result.data : [];

    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': result.cached 
          ? 'public, s-maxage=3600, stale-while-revalidate=86400' // Longer cache for cached data
          : 'public, s-maxage=300, stale-while-revalidate=600',   // Shorter cache for fresh data
        'X-Data-Source': result.cached ? 'cache' : 'api',
        'X-Timestamp': new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error in products API:', error);
    
    // Return empty array instead of error to prevent frontend crashes
    return NextResponse.json([], {
      headers: {
        'Cache-Control': 'no-cache',
        'X-Data-Source': 'error-fallback',
        'X-Timestamp': new Date().toISOString(),
      },
    });
  }
}