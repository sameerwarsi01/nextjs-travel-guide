# 🌍 Next.js Travel Guide - Dynamic & Parallel Routing Demo

A modern Next.js project demonstrating advanced App Router concepts including **Dynamic Routes**, **Parallel Routes (Slots)**, and client-side navigation.

---

## ✨ Features Covered

- **Dynamic Routing (`[city]`):** Dynamically loads destination pages based on URL parameters.
- **Parallel Routes (`@info`):** Renders multiple independent pages simultaneously within the same layout using named slots.
- **Client Components & Hooks:** Utilizes `useRouter` and `useParams` from `next/navigation` to handle smooth user interactions and routing parameters.
- **Asset Optimization:** Uses `next/image` for responsive and optimized image loading.
- **Tailwind CSS Styling:** Clean dark-mode layout styled with utility classes.

---

## 📁 Key Folder Structure

```text
src/
└── app/
    ├── destinations/
    │   ├── page.jsx            # Main destination picker (Tokyo, Paris, New York)
    │   └── [city]/             # Dynamic route folder
    │       ├── layout.js       # Layout rendering children & @info slot
    │       ├── page.jsx        # Dynamic city view with images
    │       └── @info/          # Parallel Route slot folder
    │           └── page.jsx    # Parallel view rendered alongside city details
    └── layout.js               # Root application layout