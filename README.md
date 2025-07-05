# 📸 React Query + Unsplash API Practice

A simple React project to practice using **React Query** for API data fetching, powered by the **Unsplash API** for searching and displaying images.

---

## 🚀 Features

- 🔍 Search photos from Unsplash
- ⚡ Fetching handled via **React Query**
- ✅ Loading, error, and success states
- 🖼️ Dynamic image rendering
- 🌗 Light/Dark theme support (optional)
- 🔔 Error notifications with React Toastify

---

## 🧰 Tech Stack

- [React](https://reactjs.org/)
- [React Query](https://tanstack.com/query/latest)
- [Unsplash API](https://unsplash.com/documentation)
- [Axios](https://axios-http.com/) *(optional)*
- [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sapscode/Unsplash-images.git
cd Unsplash-images
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Unsplash API Access
- Go to [Unsplash Developers](https://unsplash.com/developers) and create a new application.
- Copy your **Access Key**.
- Create a `.env` file in the root directory of your project and add the following line:

```env
VITE_UNSPLASH_KEY=your_access_key_here
```

### 4. Start the Development Server

```bash
npm run dev
```
Your app will now be running at: http://localhost:5173
