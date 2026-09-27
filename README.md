# 💪 Gym Website (FitLog)

A modern, responsive workout library and fitness planning application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

FitLog allows users to browse workouts, view detailed exercise information, add exercises to today's plan, save workouts for later, and manage their workout plan from a dedicated dashboard.

---

## 🔗 Project Links


* **Live Demo:** `https://gymnasium-website.vercel.app/`
* **GitHub Repository:** `https://github.com/delusionalSpringTail/gymnasium-website`

---

## ✨ Features

* 🏋️ **Workout Library** — Browse all available workouts from the FitLog API.
* 📋 **Today's Plan** — Add workouts to a daily plan with a maximum of 5 exercises.
* 🔖 **Save for Later** — Save favorite workouts and access them from the Saved tab.
* 🔎 **Search** — Search workouts by name or relevant information.
* ↕️ **Sorting** — Sort workouts by duration, calories, or rating.
* 📊 **Live Metrics** — Track exercises, total minutes, and calories in today's plan.
* 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop screens.
* ⚡ **Loading & Error States** — Includes loading UI and a custom 404 page.

---

## 📄 Main Pages

### 🏠 Home / Workout Library

The home page includes:

* Responsive navbar
* Workout library hero section
* Workout cards
* Workout categories
* Equipment information
* Duration, calories, and rating
* Browse workouts CTA
* Responsive workout grid

### 📋 My Plan — `/my-plan`

The My Plan page includes:

* Today's Plan tab
* Saved tab
* Exercise count
* Total workout minutes
* Total calories
* Search functionality
* Sort functionality
* View Details
* Mark as Done
* Remove workout
* Empty state
* Responsive workout cards

### 🏋️ Workout Details — `/workouts/[id]`

Each workout has a dedicated details page containing:

* Workout image
* Workout title
* Description
* Category tags
* Equipment
* Difficulty
* Sets and reps
* Duration
* Calories
* Rating
* Step-by-step instructions
* Add to Today's Plan
* Save for Later

### 🚫 404 Page

A custom not-found page is included for invalid or unknown routes.

---

## 🧭 Navigation

The navbar contains:

* **WORK OUT** → Home / Workout Library
* **MY PLAN** → Personal workout plan
* **Plan Counter** → Number of workouts currently in Today's Plan
* **Saved Counter** → Number of saved workouts

Both counters link to the My Plan page.

The active navigation item is visually highlighted.

---

## 🔌 API

FitLog uses the provided FitLog API.

### Get All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Get Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## 🛠️ Technologies Used

| Technology         | Purpose                                      |
| ------------------ | -------------------------------------------- |
| Next.js 16         | React framework and application architecture |
| TypeScript         | Type-safe development                        |
| React              | UI development                               |
| Next.js App Router | Routing and page navigation                  |
| Tailwind CSS       | Styling and responsive design                |
| Lucide React       | Icons                                        |
| React Toastify     | Toast notifications                          |
| Context API        | Plan and Saved state management              |
| LocalStorage       | Persistent client-side data                  |
| Next/Image         | Optimized image rendering                    |

---

## 📱 Responsive Design

FitLog is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

The interface adapts with:

* Responsive navigation
* Responsive hero section
* Collapsible workout grids
* Flexible workout cards
* Mobile-friendly action buttons
* Responsive My Plan layout

---