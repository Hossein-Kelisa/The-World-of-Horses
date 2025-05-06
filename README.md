# 🐴 Horse Breeds App

A responsive React + Vite web app that displays information about different horse breeds.  
Users can view breed details, like/unlike breeds, and manage their list of favourites.  
All breed data is fetched from the Wikipedia API.

---

## 🌐 Live Demo

👉 [Click here to view the Horse Breeds App online](https://Hossein-kelisa.github.io/The-World-of-Horses/)


---

## 📌 Features

- 🐎 View a list of horse breeds
- 📄 See more information and images for each breed
- ❤️ Like or unlike a breed by clicking a heart icon
- 🌟 See your favourite breeds on a separate page
- 📌 Fixed header with navigation: All Breeds | Favourites
- 📦 Data from Wikipedia API
- ⚡ Built with React and Vite

---

## 🧰 Dependencies

This app uses:

- `react`
- `react-dom`
- `react-router-dom`
- `vite`

---

🚀 Getting Started

Follow these steps to run the app locally:

```bash
# 1. Clone the repository
git clone https://github.com/Hossein-Kelisa/The-World-of-Horses.git
cd The-World-of-Horses

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

---

🗂️ Project Structure
src/
│
├── assets/         # Images and icons
├── components/     # UI parts like BreedCard, Header
├── context/        # BreedContext for managing favourites
├── hooks/          # Custom hooks like useLocalStorage
├── pages/          # Pages like AllBreeds and Favourites
├── services/       # API functions for Wikipedia
├── styles/         # CSS or styling files
└── App.jsx         # Main app with routing

---

🧠 Learning Goals
Learn how to fetch data from APIs (Wikipedia)

Understand React Router and page navigation

Use React Context for state management

Create custom hooks (like useLocalStorage)

Build a clean, professional UI

---

Made  ❤️ by Hossein – HYF Student