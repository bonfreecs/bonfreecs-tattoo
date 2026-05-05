# BONFREECS Tattoo - Dark Art Studio

A modern, dark-themed tattoo studio website built with Laravel 11, Inertia.js, and React. Features neon effects, animations, and responsive design.

## Tech Stack

- **Backend**: Laravel 11
- **Frontend**: React 18 with Inertia.js
- **Build Tool**: Vite 5
- **Styling**: Custom CSS with neon effects
- **Fonts**: Orbitron (display), Rajdhani (body)

## Features

- ✨ Dark theme with neon cyan/pink glow effects
- 🎨 Multi-page: Home, About, Portfolio, Contact
- 🖱️ Custom neon cursor animation
- 📱 Fully responsive (desktop, tablet, mobile)
- 🎭 Glitch text animations
- 🖼️ Portfolio filtering system
- 📝 Booking form with Inertia form handling
- 🌟 Scroll-triggered animations
- 🎯 Hover effects throughout

## Installation

1. Clone/download the project
2. Run `composer install` (PHP 8.2+ required)
3. Run `npm install`
4. Copy `.env.example` to `.env` and configure
5. Run `php artisan key:generate`
6. Run `npm run build` (or `npm run dev` for development)
7. Start server: `php artisan serve`

## Project Structure

```
bonfreecs-tattoo/
├── app/
│   └── Http/Controllers/
│       └── PageController.php
├── resources/
│   ├── js/
│   │   ├── Layouts/
│   │   │   └── MainLayout.jsx
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   └── Contact.jsx
│   │   └── app.jsx
│   ├── css/
│   │   └── app.css
│   └── views/
│       └── app.blade.php
└── routes/
    └── web.php
```

## Pages

- **Home** (`/`): Hero section, features, featured work
- **About** (`/about`): Studio story, team, studio features
- **Portfolio** (`/portfolio`): Filterable gallery with dark art, traditional, blackwork, color
- **Contact** (`/contact`): Contact info, booking form, map section

## Development

```bash
# Start Laravel server
php artisan serve --port=8000

# Start Vite dev server (in another terminal)
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- The original static HTML/CSS/JS version is available in `C:\Users\Irvin\Desktop\portfolio`
- Inertia.js enables SPA-like navigation with Laravel backend
- All pages use the MainLayout component with shared navigation/footer
- Neon effects created with CSS text-shadow and box-shadow
- Animations use CSS keyframes and Intersection Observer API

## License

MIT
