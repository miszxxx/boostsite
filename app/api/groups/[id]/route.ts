import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const groupId = params.id;

    const response = await fetch(`https://sell.app/api/v2/groups/${groupId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SELLAPP_API_KEY}`,
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch group: ${response.statusText}`);
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error fetching group:', error);
    return NextResponse.json(
      { error: 'Failed to fetch group' },
      { status: 500 }
    );
  }
}