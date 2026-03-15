# ProjektNash Website

Static marketing site built with Vite.

## Project Structure

```
projektnash/
├── index.html              # Home page
├── src/
│   ├── pages/
│   │   ├── solutions.html
│   │   ├── process.html
│   │   ├── portfolio.html
│   │   ├── about.html
│   │   └── contact.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── nav.js          # Shared navigation
│       └── contact.js      # EmailJS contact form
├── public/                 # Static assets (images, favicon etc.)
├── vite.config.js
├── package.json
└── .gitignore
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server (live reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploying to IONOS

After `npm run build`, upload the contents of the `/dist` folder to your IONOS web root via FTP.

Or use the GitHub Action in `.github/workflows/deploy.yml` to auto-deploy on every push to `main`.

## Contact Form (EmailJS)

1. Sign up free at https://www.emailjs.com
2. Create a service (e.g. Gmail or IONOS email)
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key into `src/js/contact.js`

## Customisation

- **Colours / fonts**: Edit CSS variables at top of `src/css/style.css`
- **Content**: Edit the relevant `.html` file directly
- **Email**: Replace `adrian@projektnash.co.uk` across all files with your real address
