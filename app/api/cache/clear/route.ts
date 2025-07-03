import { NextResponse } from 'next/server';
import { clearExpiredCache } from '@/lib/mongodb';

export async function POST() {
  try {
    await clearExpiredCache();
    
    return NextResponse.json({
      success: true,
      message: 'Cache cleared successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error clearing cache:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to clear cache',
      },
      { status: 500 }
    );
  }
}