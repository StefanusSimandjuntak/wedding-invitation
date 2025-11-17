import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch all RSVPs
export async function GET() {
  try {
    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL is not set');
      return NextResponse.json(
        { success: false, error: 'Database not configured. Please set DATABASE_URL environment variable.' },
        { status: 500 }
      );
    }

    const rsvps = await prisma.rSVP.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 50,
    });
    
    return NextResponse.json({ success: true, data: rsvps });
  } catch (error: any) {
    console.error('Error fetching RSVPs:', error);
    
    // Handle Prisma errors
    if (error.code === 'P2021') {
      return NextResponse.json(
        { success: false, error: 'Database table does not exist. Please run: npx prisma migrate dev' },
        { status: 500 }
      );
    }
    
    if (error.code === 'P1001') {
      return NextResponse.json(
        { success: false, error: 'Cannot reach database server. Please check your DATABASE_URL.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch RSVPs' },
      { status: 500 }
    );
  }
}

// POST - Create new RSVP
export async function POST(request: Request) {
  try {
    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL is not set');
      return NextResponse.json(
        { success: false, error: 'Database not configured. Please set DATABASE_URL environment variable.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, attendance, message } = body;

    // Validation
    if (!name || !attendance) {
      return NextResponse.json(
        { success: false, error: 'Name and attendance are required' },
        { status: 400 }
      );
    }

    const rsvp = await prisma.rSVP.create({
      data: {
        name,
        attendance,
        message: message || null,
      },
    });

    return NextResponse.json({
      success: true,
      data: rsvp,
      message: 'RSVP submitted successfully'
    });
  } catch (error: any) {
    console.error('Error creating RSVP:', error);
    
    // Handle Prisma errors
    if (error.code === 'P2021') {
      return NextResponse.json(
        { success: false, error: 'Database table does not exist. Please run: npx prisma migrate dev' },
        { status: 500 }
      );
    }
    
    if (error.code === 'P1001') {
      return NextResponse.json(
        { success: false, error: 'Cannot reach database server. Please check your DATABASE_URL.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || 'Failed to submit RSVP' },
      { status: 500 }
    );
  }
}

