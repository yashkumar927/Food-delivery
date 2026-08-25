# 🍔 Food Delivery Web Application

> A modern full-stack MERN food ordering platform with secure authentication, online payments, and an intuitive admin dashboard.

![MERN](https://img.shields.io/badge/Stack-MERN-green)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-success)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Express](https://img.shields.io/badge/API-Express-black)
![License](https://img.shields.io/badge/License-MIT-orange)

---

## 📖 Overview

Food Delivery is a **full-stack MERN web application** that provides a seamless food ordering experience for customers while offering administrators a powerful dashboard to manage food items, menus, and customer orders.

The platform enables users to browse menus, manage their shopping cart, securely authenticate, and complete payments using **Stripe**. Built with scalability and maintainability in mind, the application follows RESTful architecture and modern full-stack development practices.

---

## ✨ Features

### 👨‍🍳 Customer Features

- 🔐 Secure User Authentication (JWT)
- 🍕 Browse food items by category
- 🔍 Search food items
- 🛒 Add & Remove items from cart
- ➕ Update item quantities
- 💳 Secure Stripe Checkout
- 📦 Place Orders
- 📜 Order History
- 📱 Fully Responsive Design

### 🛠️ Admin Features

- 👨‍💼 Admin Dashboard
- ➕ Add New Food Items
- ✏️ Edit Existing Menu
- ❌ Delete Food Items
- 📦 Manage Customer Orders
- 🔄 Update Order Status
- 📊 Centralized Restaurant Management

---

# 🏗️ Tech Stack

## Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Tailwind CSS

## Backend

- Node.js
- Express.js
- REST APIs

## Database

- MongoDB Atlas

## Authentication

- JSON Web Tokens (JWT)
- bcrypt Password Hashing

## Payment Gateway

- Stripe

## Development Tools

- Git
- GitHub
- VS Code
- Postman

---

# 📂 Project Structure

```text
Food-Delivery/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── assets/
│   └── App.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
│
├── admin/
│   ├── src/
│   └── App.jsx
│
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/your-username/food-delivery.git
cd food-delivery
```

---

## Install Dependencies

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd ../client
npm install
```

### Admin Dashboard

```bash
cd ../admin
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

STRIPE_SECRET_KEY=your_stripe_secret_key

CLIENT_URL=http://localhost:5173
```

---

# ▶️ Run the Application

### Backend

```bash
cd server
npm run server
```

### Frontend

```bash
cd client
npm run dev
```

### Admin Dashboard

```bash
cd admin
npm run dev
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|--------|----------|
| POST | `/api/user/register` |
| POST | `/api/user/login` |

---

## Food

| Method | Endpoint |
|--------|----------|
| GET | `/api/food/list` |
| POST | `/api/food/add` |
| DELETE | `/api/food/remove/:id` |

---

## Cart

| Method | Endpoint |
|--------|----------|
| POST | `/api/cart/add` |
| POST | `/api/cart/remove` |
| GET | `/api/cart` |

---

## Orders

| Method | Endpoint |
|--------|----------|
| POST | `/api/order/place` |
| GET | `/api/order/userorders` |
| GET | `/api/order/list` |
| POST | `/api/order/status` |

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing with bcrypt
- Protected Routes
- Secure Stripe Payment Integration
- RESTful API Design
- Environment Variable Management

---

# 🌟 Key Highlights

- ✅ Full-Stack MERN Architecture
- ✅ JWT Authentication
- ✅ Stripe Payment Gateway
- ✅ MongoDB Atlas Cloud Database
- ✅ Responsive UI
- ✅ Shopping Cart Management
- ✅ Order Processing System
- ✅ Admin Dashboard
- ✅ RESTful APIs
- ✅ Scalable Project Structure

---

# 📸 Screenshots

| Home | Menu |
|------|------|
| Add Screenshot | Add Screenshot |

| Cart | Checkout |
|------|----------|
| Add Screenshot | Add Screenshot |

| Orders | Admin Dashboard |
|--------|-----------------|
| Add Screenshot | Add Screenshot |

---

# 🚀 Future Improvements

- 📍 Live Order Tracking
- 🗺️ Google Maps Integration
- ⭐ Food Reviews & Ratings
- 🎟️ Coupons & Discount System
- 🔔 Push Notifications
- 📧 Email Notifications
- 💬 Real-Time Order Updates
- 🍽️ Multi-Restaurant Support

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes

```bash
git commit -m "Add Amazing Feature"
```

4. Push to the branch

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Yash Kumar**

🎓 B.Tech - Electronics & Communication Engineering  
🏫 National Institute of Technology, Kurukshetra

**Connect with me**

- 💼 LinkedIn
- 🌐 GitHub

---

## ⭐ Show your support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub!

It motivates further development and helps others discover the project.

---
