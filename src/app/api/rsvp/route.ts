import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Initialize database table (run once)
async function initDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS rsvp (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        attendance VARCHAR(50) NOT NULL,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}

// GET - Fetch all RSVPs
export async function GET() {
  try {
    await initDatabase();
    
    const { rows } = await sql`
      SELECT id, name, attendance, message, created_at
      FROM rsvp
      ORDER BY created_at DESC
      LIMIT 50;
    `;
    
    return NextResponse.json({ success: true, data: rows });
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
    await initDatabase();
    
    const body = await request.json();
    const { name, attendance, message } = body;

    // Validation
    if (!name || !attendance) {
      return NextResponse.json(
        { success: false, error: 'Name and attendance are required' },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO rsvp (name, attendance, message)
      VALUES (${name}, ${attendance}, ${message || ''})
      RETURNING id, name, attendance, message, created_at;
    `;

    return NextResponse.json({
      success: true,
      data: result.rows[0],
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

