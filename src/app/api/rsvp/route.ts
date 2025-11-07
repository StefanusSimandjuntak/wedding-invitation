import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch all RSVPs
export async function GET() {
  try {
    const rsvps = await prisma.rSVP.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 50,
    });
    
    return NextResponse.json({ success: true, data: rsvps });
  } catch (error) {
    console.error('Error fetching RSVPs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch RSVPs' },
      { status: 500 }
    );
  }
}

// POST - Create new RSVP
export async function POST(request: Request) {
  try {
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
  } catch (error) {
    console.error('Error creating RSVP:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit RSVP' },
      { status: 500 }
    );
  }
}

