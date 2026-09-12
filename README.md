```markdown
# 🏠 RentWise AI

> **Smart Rental Price Analytics & Property Recommendation System**

![Status](https://img.shields.io/badge/status-in--development-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Made with](https://img.shields.io/badge/Made%20with-React%20%7C%20Node.js%20%7C%20Python-red)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

A full-stack web application that empowers tenants to find fair rental prices and helps landlords set optimal rent using **Data Analytics** and **Machine Learning**.

---

## 📌 Table of Contents

- [Problem Statement](#-problem-statement)
- [Solution](#-solution)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Machine Learning Module](#-machine-learning-module)
- [Analytics Dashboard](#-analytics-dashboard)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)
- [Acknowledgements](#-acknowledgements)

---

## 🎯 Problem Statement

In India, people renting homes often struggle to find **accurate rental price information**. The same locality shows different rent prices across multiple websites, creating confusion and mistrust. Landlords also lack proper tools to decide a **fair rent** for their property.

**Key challenges:**
- ❌ No single source of truth for rental prices
- ❌ Inconsistent data across platforms
- ❌ No data-driven rent suggestions
- ❌ Tenants overpay due to lack of awareness
- ❌ Landlords undercharge or overcharge unknowingly

---

## 💡 Solution

**RentWise AI** is a centralized, intelligent platform that:

- 🏘️ Allows **Landlords** to list their properties with details and images
- 🔍 Allows **Tenants** to search properties using smart filters
- 📊 Uses **Data Analytics** to show Average, Highest, Lowest rents and area-wise trends
- 🤖 Uses **Machine Learning** to suggest a **Fair Rent** for any property
- ⭐ Provides **Fair Rent Score** (0–100) so tenants know if a price is justified
- 📈 Displays an interactive **Analytics Dashboard** for insights

---

## ✨ Features

### 👤 Tenant Features
- User registration & secure login (JWT)
- Smart property search with multi-filter (city, area, BHK, budget, amenities)
- Save favourite properties
- View rent analytics by area
- Check **Fair Rent Score** for any property
- Contact landlord directly
- Compare two or more properties side-by-side

### 🏠 Landlord Features
- Register/login as landlord
- Add, update, and delete property listings
- Upload multiple property images
- View personal dashboard (listings, views, enquiries)
- Get AI-suggested fair rent before listing
- Track performance of listings

### 🛡️ Admin Features
- Manage all users (tenants & landlords)
- Manage / moderate all property listings
- Remove fake or flagged listings
- View platform-wide analytics
- Generate reports (users, listings, trends)

### ⭐ Unique Features
- **Fair Rent Score** – AI-generated fairness meter
- **Area-wise Analytics** – Average/Highest/Lowest rent trends
- **Rent Trend Analysis** – Month-over-month changes
- **Property Comparison** – Compare up to 4 properties
- **Price Prediction** – ML-based rent prediction
- **Interactive Dashboard** – Charts with Chart.js
- **Smart Filters** – Auto-suggest filters based on search history
- **Google Maps Integration** – *Coming Soon*

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React.js, Bootstrap 5, HTML5, CSS3, JavaScript, Chart.js, Axios |
| **Backend** | Node.js, Express.js, JWT, bcrypt, Multer |
| **Database** | MySQL |
| **Machine Learning** | Python, Pandas, NumPy, Scikit-learn, Flask |
| **Data Analytics** | Python, Pandas, Matplotlib |
| **Version Control** | Git & GitHub |
| **API Testing** | Postman |
| **Deployment** | Vercel (Frontend), Render (Backend), PlanetScale / Railway (DB) |

---

## 🏗 System Architecture

```
┌───────────────────────────────────────────────┐
│           CLIENT (React.js + Bootstrap)       │
│     Tenant  |  Landlord  |  Admin Dashboards  │
└────────────────────┬──────────────────────────┘
                     │  HTTPS / REST API
┌────────────────────▼──────────────────────────┐
│        BACKEND (Node.js + Express.js)         │
│  Auth | Property | Search | Analytics | Admin │
└──────┬────────────────────────────┬───────────┘
       │                            │
┌──────▼────────┐         ┌─────────▼──────────┐
│   MySQL DB    │         │  Python ML Service │
│  Users, Props │         │  Flask + sklearn   │
│  Favourites   │         │  /predict endpoint │
└───────────────┘         └────────────────────┘
```

**Architecture Pattern:** 3-Tier (Presentation → Business Logic → Data)

---

## 📂 Folder Structure

```
RentWise-AI/
│
├── frontend/                      # React.js application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Property.jsx
│   │   │   └── Analytics.jsx
│   │   ├── services/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── .env
│
├── backend/                       # Node.js + Express API
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── propertyRoutes.js
│   │   ├── analyticsRoutes.js
│   │   └── adminRoutes.js
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── config/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── database/                      # SQL scripts
│   ├── schema.sql
│   ├── seed_data.sql
│   └── er_diagram.png
│
├── analytics/                     # Data analytics module
│   ├── analysis.py
│   ├── trends.py
│   └── notebooks/
│
├── machine-learning/              # ML module
│   ├── data/
│   ├── notebooks/
│   │   └── rent_prediction.ipynb
│   ├── model/
│   │   └── rent_model.pkl
│   ├── train.py
│   ├── predict.py
│   ├── app.py                     # Flask API
│   └── requirements.txt
│
├── docs/                          # Documentation
│   ├── SRS.md
│   ├── UseCase.md
│   ├── ER_Diagram.md
│   └── API_Documentation.md
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- **Node.js** (v18+)
- **npm** or **yarn**
- **Python** (v3.9+)
- **MySQL** (v8+)
- **Git**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/RentWise-AI.git
cd RentWise-AI
```

### 2️⃣ Setup the Database

```bash
cd database
mysql -u root -p < schema.sql
mysql -u root -p < seed_data.sql
```

### 3️⃣ Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=rentwise_ai
JWT_SECRET=your_super_secret_key
ML_SERVICE_URL=http://localhost:5001
```

Run the backend:

```bash
npm run dev
```

Backend runs at: `http://localhost:5000`

### 4️⃣ Setup the Frontend

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Run the frontend:

```bash
npm start
```

Frontend runs at: `http://localhost:3000`

### 5️⃣ Setup the ML Service

```bash
cd machine-learning
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python train.py                 # Trains and saves model.pkl
python app.py                   # Starts Flask server
```

ML service runs at: `http://localhost:5001`

---

## 🔐 Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|----------|-------------|
| `PORT` | Backend server port |
| `DB_HOST` | MySQL host |
| `DB_USER` | MySQL username |
| `DB_PASSWORD` | MySQL password |
| `DB_NAME` | Database name |
| `JWT_SECRET` | Secret key for JWT signing |
| `ML_SERVICE_URL` | Flask ML service URL |

### Frontend (`frontend/.env`)

| Variable | Description |
|----------|-------------|
| `REACT_APP_API_URL` | Backend API base URL |

---

## 🔌 API Endpoints

### 🔑 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/auth/me` | Get logged-in user |

### 🏠 Properties

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/properties` | Get all properties (with filters) |
| GET | `/api/properties/:id` | Get property by ID |
| POST | `/api/properties` | Add new property (Landlord) |
| PUT | `/api/properties/:id` | Update property (Landlord) |
| DELETE | `/api/properties/:id` | Delete property (Landlord) |
| POST | `/api/properties/:id/favourite` | Add to favourites (Tenant) |

### 📊 Analytics

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/analytics/area/:area` | Area-wise rent analytics |
| GET | `/api/analytics/trends` | Rent trend analysis |
| GET | `/api/analytics/summary` | Platform summary stats |

### 🤖 ML

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/ml/predict` | Predict fair rent |
| POST | `/api/ml/fair-score` | Get Fair Rent Score |

### 🛡️ Admin

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/users` | Get all users |
| GET | `/api/admin/properties` | Get all properties |
| DELETE | `/api/admin/properties/:id` | Remove listing |
| GET | `/api/admin/reports` | Generate reports |

---

## 🤖 Machine Learning Module

### Objective
Predict **fair rent** for a property based on:
- City / Area / Locality
- BHK (1, 2, 3, 4+)
- Carpet area (sq. ft.)
- Furnishing type (Furnished / Semi / Unfurnished)
- Amenities (parking, gym, WiFi, etc.)
- Floor number & total floors
- Age of building

### Algorithm Used
- **Random Forest Regressor** (primary)
- **XGBoost** (comparison)
- **Linear Regression** (baseline)

### Pipeline
```
Data Collection → Cleaning → Feature Engineering →
Train/Test Split → Model Training → Evaluation →
Model Serialization (pickle) → Flask API → Integration
```

### Evaluation Metrics
- R² Score
- Mean Absolute Error (MAE)
- Root Mean Squared Error (RMSE)

### Fair Rent Score
```
Fair Rent Score = 100 - |(Listed Rent - Predicted Rent) / Predicted Rent| × 100
```

---

## 📊 Analytics Dashboard

The dashboard provides:
- 📈 **Average Rent by Area** (bar chart)
- 📉 **Rent Trend Over Time** (line chart)
- 🥧 **BHK Distribution** (pie chart)
- 📊 **Rent Range Distribution** (histogram)
- 🔥 **Top 10 Expensive Areas** (horizontal bar)
- 🏙️ **City-wise Comparison** (multi-line)

Charts are rendered using **Chart.js** in the React frontend and computed via **Pandas** on the backend.

---

## 📸 Screenshots

> 🖼️ *Screenshots will be added as the project progresses.*

| Page | Preview |
|------|---------|
| Home Page | _Coming Soon_ |
| Login / Register | _Coming Soon_ |
| Tenant Dashboard | _Coming Soon_ |
| Landlord Dashboard | _Coming Soon_ |
| Property Listing | _Coming Soon_ |
| Analytics Dashboard | _Coming Soon_ |
| Fair Rent Checker | _Coming Soon_ |

---

## 🗺 Roadmap

- [x] **Phase 1:** Requirement Analysis
- [x] **Phase 2:** Software Requirements Specification (SRS)
- [ ] **Phase 3:** Use Case Diagram
- [ ] **Phase 4:** System Design
- [ ] **Phase 5:** ER Diagram
- [ ] **Phase 6:** Database Design
- [ ] **Phase 7:** UI/UX Design
- [ ] **Phase 8:** Frontend Development
- [ ] **Phase 9:** Backend Development
- [ ] **Phase 10:** REST APIs
- [ ] **Phase 11:** Data Analytics Module
- [ ] **Phase 12:** Machine Learning Module
- [ ] **Phase 13:** Testing
- [ ] **Phase 14:** Deployment
- [ ] **Phase 15:** Documentation & PPT

---

## 🧪 Testing

### Backend (Jest + Supertest)
```bash
cd backend
npm test
```

### Frontend (React Testing Library)
```bash
cd frontend
npm test
```

### ML (Pytest)
```bash
cd machine-learning
pytest
```

### Manual Testing
Use **Postman** with the collection in `/docs/postman_collection.json`.

---

## 🚢 Deployment

| Service | Platform | Notes |
|---------|----------|-------|
| Frontend | **Vercel** | Auto-deploy from `main` |
| Backend | **Render** | Node.js environment |
| ML Service | **Render / Railway** | Python Flask |
| Database | **PlanetScale / Railway MySQL** | Managed MySQL |

### Deployment Steps
1. Push code to GitHub `main` branch
2. Connect repo to Vercel (frontend) & Render (backend + ML)
3. Set environment variables on each platform
4. Trigger deploy → Live 🎉

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. **Fork** the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes
   ```bash
   git commit -m "feat: Add amazing feature"
   ```
4. Push to your branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a **Pull Request**

### Commit Message Convention
| Prefix | Meaning |
|--------|---------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation |
| `style:` | Formatting |
| `refactor:` | Code restructuring |
| `test:` | Testing |
| `chore:` | Config/setup |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**[Your Full Name]**
- 🎓 Final Year B.E. / B.Tech Student
- 📧 Email: your.email@example.com
- 🔗 LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
- 🐙 GitHub: [@your-username](https://github.com/your-username)
- 🌐 Portfolio: [your-portfolio.com](https://your-portfolio.com)

---

## 🙏 Acknowledgements

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Scikit-learn](https://scikit-learn.org/)
- [Chart.js](https://www.chartjs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- Open-source community ❤️

---


<p align="center">
  Made with ❤️ in India
</p>
```
