import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Test Sell.app API connection
    const response = await fetch('https://sell.app/api/v2/groups?limit=1', {
      headers: {
        'Authorization': `Bearer ${process.env.SELLAPP_API_KEY}`,
      },
    });

    const isApiHealthy = response.ok;

    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      api: {
        sellapp: isApiHealthy ? 'connected' : 'disconnected',
      },
      environment: process.env.NODE_ENV,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        error: 'Health check failed',
      },
      { status: 500 }
    );
  }
}