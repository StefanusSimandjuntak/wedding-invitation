# Database Setup Guide for RSVP Feature

This wedding invitation now includes a fully functional RSVP system with Create and Read operations that saves data to Vercel Postgres.

## Setup Instructions

### 1. Create Vercel Postgres Database

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on the **Storage** tab
3. Click **Create Database**
4. Select **Postgres**
5. Choose a database name (e.g., `wedding-rsvp`)
6. Select your region (choose closest to your users)
7. Click **Create**

### 2. Connect Database to Your Project

After creating the database:

1. Vercel will automatically add the environment variables to your project
2. The database table will be created automatically on first API call
3. No additional configuration needed!

### 3. Environment Variables (Automatic)

Vercel automatically adds these to your project:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NO_SSL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

### 4. Local Development (Optional)

If you want to test locally:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Copy all POSTGRES_* variables
4. Create a `.env.local` file in your project root
5. Paste the variables there

## Features Implemented

### API Routes

- **GET /api/rsvp** - Fetch all RSVPs (latest 50)
- **POST /api/rsvp** - Submit new RSVP

### RSVP Form Fields

- **Name** (required)
- **Attendance** (required): Hadir, Tidak Hadir, or Masih Ragu
- **Message** (optional): Guest wishes/messages

### Database Schema

```sql
CREATE TABLE rsvp (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  attendance VARCHAR(50) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Testing

1. Deploy your project to Vercel
2. Set up the Postgres database
3. Visit your wedding invitation
4. Scroll to the RSVP section
5. Fill out the form and submit
6. Your RSVP will appear in the list below!

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

### "Failed to fetch RSVPs"
- Make sure your Vercel Postgres database is created and connected
- Check that environment variables are set in Vercel project settings
- Redeploy your project after setting up the database

### Local Development Not Working
- Ensure you've copied the environment variables to `.env.local`
- Make sure the database URL is accessible from your local machine
- Some Vercel Postgres databases require SSL connections

## Cost

Vercel Postgres has a free tier that includes:
- Up to 256 MB storage
- 60 hours of compute time per month
- Perfect for small wedding invitation sites!

For larger weddings or more features, consider upgrading to a paid plan.

