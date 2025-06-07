
# 📊 Affworld - User Insights Dashboard

A professional React.js dashboard built for the Uplyft.ai SDE Internship Assignment.  
Includes authentication, KPI tracking, chart visualization, product CRUD, and dark mode.

---

## 🌐 Live Demo

Deployed via Vercel  
🔗 [https://crud-dashboard-site-git-main-karinigams-projects.vercel.app](https://crud-dashboard-site-git-main-karinigams-projects.vercel.app)

---

## 🔧 Tech Stack

- **React.js + Vite**
- **Redux Toolkit**
- **React Router DOM**
- **DummyJSON API** (https://dummyjson.com)
- **Recharts** for analytics graph
- **html2canvas** for chart export
- **CSS Modules** for styling

---

## 🚀 Features

### ✅ Authentication
- Login page with dummyjson credentials
- Route protection (public/private)

### ✅ Dashboard
- KPI cards: Total Users, Monthly Growth, Active Users
- Monthly active users chart with Recharts
- Export chart as PNG
- Dark mode toggle (🌗)
- Hover effects on cards and buttons

### ✅ Product Management
- CRUD operations (Add, Edit, Delete products)
- Redux-powered state management
- Real API integration using `dummyjson.com/products`
- Smooth UI with responsive design

---

## 🧪 Dummy Login

You can use the following credentials to log in:

```
Username: kminchelle  
Password: 0lelplR
```

> This uses the official dummy login API from DummyJSON.

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/uplyft-dashboard.git
cd uplyft-dashboard
npm install
npm run dev
```

> App will run at `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── LoginPage.jsx
│   ├── Dashboard.jsx
│   └── Products.jsx
├── redux/
│   ├── store.js
│   └── productSlice.js
├── App.jsx
└── main.jsx
```

---

## 📸 Screenshots

*(Add screenshots in a /screenshots folder if needed)*

---

## 🙌 Author

**Karinigam**  


---

## 📃 License

MIT – Free to use with attribution.
