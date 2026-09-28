# React Data Fetching, Performance & Styling

A collection of React practice projects focused on working with APIs, optimizing load performance, and styling with a utility-first CSS framework.

## Projects

### 🔹 Notes App
A notes application with full CRUD operations against a JSON Server backend.

**Concepts practiced:** Axios, REST API integration, async/await, loading and error states, JSON Server

### 🔹 Course Dashboard
A multi-view dashboard that fetches and displays course data across routes.

**Concepts practiced:** React Router, data fetching, dynamic routing, component composition

### 🔹 Lazy Dashboard
A dashboard that loads its views on demand instead of all at once.

**Concepts practiced:** code splitting, React.lazy, Suspense, fallback UI, performance optimization

### 🔹 Tailwind Landing Page
A responsive landing page built with utility-first styling.

**Concepts practiced:** Tailwind CSS, responsive design, utility classes, layout with flexbox and grid

## Tech Stack
React, JavaScript (ES6+), Axios, React Router, JSON Server, Tailwind CSS, Vite

## Structure
Each project lives in its own folder with an independent `package.json` and can be run separately:


## Running a project locally
```bash
cd <project-folder>
npm install
npm run dev
```

The Notes App also needs its JSON Server running in a second terminal:
```bash
npx json-server --watch db.json --port 3000
```

## About
These projects continue from [react-fundamentals](https://github.com/MSubhanMajid/react-fundamentals) and [react-forms-data-handling](https://github.com/MSubhanMajid/react-forms-data-handling), covering async data, performance, and styling as part of a broader React learning path.