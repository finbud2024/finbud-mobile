# AutoTrade AI

An automated trading application with AI-powered investment recommendations.

## Project Structure

```
.
├── frontend/               # React Native (Expo) mobile app
│   ├── app/                # App source code
│   │   ├── components/     # Reusable UI components
│   │   ├── screens/        # App screens
│   │   ├── navigation/     # Navigation configuration
│   │   ├── services/       # API and other services
│   │   └── utils/          # Utility functions
│   ├── assets/             # Static assets
│   └── ...                 # Expo configuration files
│
└── backend/                # Python FastAPI backend
    ├── app/                # App source code
    │   ├── routers/        # API route handlers
    │   ├── models/         # Database models
    │   ├── schemas/        # Pydantic schemas for validation
    │   ├── services/       # Business logic services
    │   └── database/       # Database connection and configs
    └── requirements.txt    # Python dependencies
```

## Tech Stack

### Frontend (Mobile App)

- **React Native** (via Expo)
- **NativeWind** (Tailwind CSS for React Native)
- **React Navigation** for navigation

### Backend

- **Python + FastAPI** (API server)
- **SQLAlchemy** (ORM)
- **Yahoo Finance API** for market data
- **Supabase** for PostgreSQL database

## Setup Instructions

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Use Expo Go app on your mobile device to scan the QR code or press 'i' to open in iOS simulator (macOS only) or 'a' for Android emulator.

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the backend directory with the following content:

   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/autotrade
   ```

5. Run the FastAPI server:

   ```bash
   uvicorn app.main:app --reload
   ```

6. The API will be available at `http://localhost:8000` and the API documentation at `http://localhost:8000/docs`

## Features

- Trading strategy selection (Conservative, Moderate, Aggressive)
- Automated stock investments based on AI recommendations
- Portfolio tracking and performance monitoring
- Market data visualization
- Investment history and returns analysis
