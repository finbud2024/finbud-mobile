# Finbud

Ứng dụng giao dịch tự động với đề xuất đầu tư được hỗ trợ bởi AI.

## Cấu trúc Dự án

```
.
├── frontend/               # Ứng dụng di động React Native (Expo)
│   ├── app/                # Mã nguồn chính của ứng dụng
│   │   ├── components/     # Các thành phần giao diện có thể tái sử dụng
│   │   ├── screens/        # Các màn hình trong ứng dụng
│   │   ├── navigation/     # Cấu hình điều hướng
│   │   ├── services/       # Các dịch vụ API và dịch vụ khác
│   │   └── utils/          # Các hàm tiện ích
│   ├── assets/             # Tài nguyên tĩnh
│   └── ...                 # Các tệp cấu hình của Expo
│
└── backend/                # Backend sử dụng Python FastAPI
    ├── app/                # Mã nguồn chính của backend
    │   ├── routers/        # Xử lý các route API
    │   ├── models/         # Các mô hình cơ sở dữ liệu
    │   ├── schemas/        # Schema Pydantic để kiểm tra dữ liệu
    │   ├── services/       # Các dịch vụ xử lý nghiệp vụ
    │   └── database/       # Kết nối và cấu hình cơ sở dữ liệu
    └── requirements.txt    # Danh sách thư viện Python cần cài đặt
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

1. Di chuyển vào thư mục frontend:

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

4. Dùng ứng dụng Expo Go trên điện thoại để quét mã QR hoặc nhấn 'i' để mở trình giả lập iOS (chỉ dùng được trên macOS) hoặc 'a' cho giả lập Android.

### Backend Setup

1. Di chuyển vào thư mục backend:

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
