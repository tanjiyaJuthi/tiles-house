# 🧱 Tiles House – Tile Gallery Web App

## 🌐 Live URL

👉 https://tiles-house.vercel.app/

---

## 📌 Project Overview

**Tiles House** is a modern, responsive tile gallery web application where users can explore, search, and view detailed information about different types of tiles. The platform provides authentication, personalized user profiles, and a clean tile-based UI to enhance browsing experience.

---

## 🎯 Purpose

The goal of this project is to build a full-stack single-page application using **Next.js (App Router)** that demonstrates:

* Dynamic data handling using JSON server
* Authentication system with BetterAuth
* Protected routes
* Responsive UI design
* Clean and modern UX

---

## ✨ Key Features

### 🧱 Tile Gallery

* Browse all tiles in a structured grid layout
* Search tiles by title using a Hero UI input field
* View detailed information for each tile

### 🏠 Home Page

* Banner with CTA ("Discover Your Perfect Aesthetic")
* Marquee section for announcements
* Featured tiles section (Top 4 tiles from server)
* Category Slider

### 🔍 Tile Details Page (Private Route)

* High-resolution tile preview
* Tile description, category, material, dimensions
* Tags (e.g., Minimalist, Modern, Blue)

### 🔍 Category Details Page (Private Route)

* Show products related to that category

### 🔐 Authentication System

* Email & Password Login/Register
* Google Social Login
* Error handling with toast/messages
* Redirect after login/register

### 👤 My Profile (Private Route)

* View logged-in user information
* Update name and profile image
* Secure route protection

### 🎨 UI & UX

* Fully responsive (Mobile, Tablet, Desktop)
* Unique tile-based design
* Smooth animations (using SwiperJS / Animate.css)

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* React.js
* Tailwind CSS
* DaisyUI / HeroUI

### Backend & Auth

* BetterAuth (MongoDB Adapter)
* JSON Server (for tile data)

### Deployment

* Vercel

---

## 📦 NPM Packages Used

* `next`
* `react`
* `tailwindcss`
* `daisyui`
* `better-auth`
* `mongodb`
* `swiper`

---

## 📁 JSON Data Structure

Example tile data:

```json
{
    "id": "tile_001",
    "title": "Ceramic Blue Tile",
    "image": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    "category": "ceramic",
    "price": 45.99,
    "currency": "USD",
    "dimensions": "60x60 cm",
    "material": "Ceramic",
    "inStock": true,
    "color": "Blue",
    "effect": "Glossy glazed finish",
    "overview": {
    "description": "Premium ceramic tile featuring a rich blue glazed surface designed for elegant interior styling. Ideal for both walls and floors, it provides strong water resistance, making it especially suitable for bathrooms, kitchens, and decorative feature spaces. Its glossy finish enhances light reflection and adds a modern, polished aesthetic to any environment."
    },
    "features": [
    "Glazed water-resistant surface",
    "Suitable for wet areas like bathrooms",
    "Durable ceramic build",
    "Easy maintenance and cleaning"
    ],
    "specification": {
    "dimensions": "60x60 cm",
    "material": "Ceramic",
    "finish": "Glossy glazed",
    "usage": "Wall & floor"
    }
}
```

---

## 🧭 Routes Overview

### 🌍 Public Routes

* `/` → Home Page
* `/all-tiles` → Tile Gallery
* `/all-catogories` → Tile Categories
* `/login` → Login Page
* `/register` → Register Page

### 🔒 Private Routes

* `/tile/[id]` → Tile Details
* `/tile/[id]` → Show Product Related to that category
* `/my-profile` → User Profile

---

## 🔐 Authentication Flow

### Login

* User enters email & password
* On success → Redirect to Home
* On failure → Error message

### Register

* User provides Name, Email, Photo URL, Password
* On success → Redirect to Login
* Google login available

---

## ⚙️ Installation & Setup

```bash
git clone hhttps://github.com/tanjiyaJuthi/tiles-house
cd tiles-house
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=your_mongodb_uri
BETTER_AUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
```

---

## 🚀 Deployment

* Hosted on **Vercel**
* SPA routing handled properly (no reload errors on routes)

---

## 📱 Responsiveness

* Mobile-first design
* Optimized for:

  * 📱 Mobile
  * 📲 Tablet
  * 💻 Desktop

---

## 🧪 Additional Features

* 🔁 FFilter Product using Category
* 🔄 Loading spinner on data fetch
* ❌ Custom 404 Not Found page
* 🔐 Route protection (middleware)
* 🔁 Axios interceptor for API calls

---

## 🚧 Challenge Features Implemented

### 👤 My Profile

* Display logged-in user info
* Update name and profile image

### ✏️ Update Feature

* Separate route for updating user data
* Form with:

  * Name input
  * Image URL input

---

## 🧠 Future Improvements

* Add wishlist/favorites feature
* Dark mode support
* Admin dashboard for tile management

---

## 🤝 GitHub Commits

✔️ At least **10 meaningful commits** with proper messages
Example:

* `feat: add tile gallery page`
* `fix: authentication redirect issue`
* `ui: improve responsive layout`

---

## 📄 License

This project is developed for educational purposes.

---

## 👨‍💻 Developer

**Tanjiya Zahir Bhuiyan**
Email: tanjiya098@gmail.com
Feel free to reach out for collaboration or feedback!

---
