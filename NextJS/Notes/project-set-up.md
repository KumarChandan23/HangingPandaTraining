
# Installation
- command : npx create-next-app@latest

▶️ while installation you will see this 
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*

# Folder Structure
- my-nextjs-project/
- ├── public/                # Static assets like images, fonts, favicon
- ├── app/                   # Main routing & pages directory
- │   ├── layout.js          # Root layout (shared UI like header/footer)
- │   ├── page.js            # Home page (route: '/')
- │   ├── about/             # Nested route: '/about'
- │   │   ├── page.js        # About page
- │   └── contact/           # Nested route: '/contact'
- │       ├── page.js        # Contact page
- │
- ├── components/            # Reusable UI components (Navbar, Button, etc.)
- ├── styles/                # Global and modular CSS or Tailwind config
- ├── lib/                   # Utility functions, API clients (e.g., axios instance)
- ├── hooks/                 # Custom React hooks
- ├── middleware.js          # Middleware for auth, redirects, etc.
- ├── next.config.js         # Next.js configuration file
- ├── package.json           # Dependencies & scripts
- └── .env.local             # Environment variables (never commit this)
