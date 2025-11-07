# Database Setup Guide for RSVP Feature (Prisma + PostgreSQL)

This wedding invitation now includes a fully functional RSVP system with Create and Read operations using Prisma ORM and PostgreSQL database.

## Setup Instructions

### 1. Get a Free PostgreSQL Database

You have several options for free PostgreSQL hosting:

#### Option A: Supabase (Recommended)
1. Go to [supabase.com](https://supabase.com)
2. Create a free account
3. Create a new project
4. Copy the **Database URL** (Connection String) from Project Settings → Database

#### Option B: Neon
1. Go to [neon.tech](https://neon.tech)
2. Create a free account
3. Create a new project
4. Copy the **Connection String**

#### Option C: Railway
1. Go to [railway.app](https://railway.app)
2. Create a free account
3. Create a new PostgreSQL database
4. Copy the **Database URL**

### 2. Set Up Environment Variables

1. Create a `.env` file in your project root (if not exists)
2. Add your database URL:

```env
DATABASE_URL="your-postgresql-connection-string-here"
```

Example:
```env
DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"
```

### 3. Generate Prisma Client and Run Migration

Run these commands in your terminal:

```bash
# Generate Prisma Client
npx prisma generate

# Create database tables
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view your data
npx prisma studio
```

### 4. Deploy to Vercel

1. Push your code to GitHub
2. Import your project to Vercel
3. In Vercel project settings, go to **Environment Variables**
4. Add `DATABASE_URL` with your PostgreSQL connection string
5. Redeploy your project

### 5. Verify Setup

After deployment:
1. Visit your wedding invitation URL
2. Scroll to the RSVP section
3. Submit a test RSVP
4. Check if it appears in the list below the form
5. (Optional) Use `npx prisma studio` locally to view database contents

## Features Implemented

### API Routes

- **GET /api/rsvp** - Fetch all RSVPs (latest 50)
- **POST /api/rsvp** - Submit new RSVP

### RSVP Form Fields

- **Name** (required)
- **Attendance** (required): Hadir, Tidak Hadir, or Masih Ragu
- **Message** (optional): Guest wishes/messages

### Database Schema (Prisma)

```prisma
model RSVP {
  id         Int      @id @default(autoincrement())
  name       String
  attendance String
  message    String?
  createdAt  DateTime @default(now())
}
```

## Local Testing

1. Make sure you've created a `.env` file with `DATABASE_URL`
2. Run `npx prisma generate` to generate Prisma Client
3. Run `npx prisma migrate dev` to create database tables
4. Start your development server: `npm run dev`
5. Visit `http://localhost:3000`
6. Test the RSVP form
7. Use `npx prisma studio` to view database contents

## Features

- ✅ Real-time form submission
- ✅ Automatic data refresh after submission
- ✅ Loading states
- ✅ Success feedback
- ✅ Form validation
- ✅ Color-coded attendance badges
- ✅ Scrollable RSVP list
- ✅ Indonesian date/time formatting
- ✅ Responsive design

## Troubleshooting

### "Failed to fetch RSVPs" or "Prisma Client Error"
- Make sure you've run `npx prisma generate` after installing Prisma
- Check that `DATABASE_URL` is set in your `.env` file (local) or Vercel environment variables (production)
- Verify your database connection string is correct
- Run `npx prisma migrate dev` to ensure tables are created

### "Table does not exist"
- Run `npx prisma migrate dev --name init` to create database tables
- Make sure your database is accessible and credentials are correct

### Vercel Deployment Issues
- Ensure `DATABASE_URL` is added to Vercel environment variables
- Add this to your `package.json` scripts if not present:
  ```json
  "postinstall": "prisma generate"
  ```
- This ensures Prisma Client is generated during Vercel build

## Cost

All recommended PostgreSQL hosting options have generous free tiers:

**Supabase Free Tier:**
- 500 MB database space
- Up to 2 GB bandwidth
- Unlimited API requests
- Perfect for wedding invitation sites!

**Neon Free Tier:**
- 512 MB storage
- 1 project
- Serverless PostgreSQL

**Railway Free Tier:**
- $5 credit per month
- No credit card required

All options are more than sufficient for a wedding invitation with hundreds of RSVPs!

